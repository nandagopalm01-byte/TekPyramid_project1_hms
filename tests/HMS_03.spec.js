
import { test, expect } from "@playwright/test";
import fs from "fs";

import hms from "../POM/01_hms";
import homePage from "../POM/02_home.page";
import patientLog from "../POM/03_patient_login.page";
import appointment from "../POM/04_patient_Appointment.page";
import patientregister from "../POM/05_patient_registration.page";

// --------------------------------------------------
// TEST DATA
// --------------------------------------------------

const loginData = JSON.parse(
    fs.readFileSync(
        "D:/TekPyramid/Playwright_Project_2/test-data/login-data.json",
        "utf-8"
    )
);

const registrationData = JSON.parse(
    fs.readFileSync(
        "D:/TekPyramid/Playwright_Project_2/test-data/registration-data.json",
        "utf-8"
    )
);

const validPatient = loginData.valid[0];
const emailUpdatePatient = loginData.valid[1];

const BASE_URL =
    "http://49.249.29.4:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/";

const uniqueEmail = () =>
    `hms_pw_${Date.now()}_${Math.floor(Math.random() * 10000)}@example.com`;

// --------------------------------------------------
// REUSABLE HELPERS
// --------------------------------------------------

// 1. HMS HOME PAGE ---> PATIENT LOGIN ( repeats the navigation steps needed to reach the patient login page )
async function openPatientLogin(browser) {  
    const context = await browser.newContext();
    const page = await context.newPage();

    // Test server home page -> HMS home page
    const hmsPage = new hms(page);

    const [publicPage] = await Promise.all([
        page.waitForEvent("popup"),
        hmsPage.homePage()
    ]);

    await publicPage.waitForLoadState("domcontentloaded");

    // HMS home page -> Patient login page
    const home = new homePage(publicPage);

    const [loginPage] = await Promise.all([
        publicPage.waitForEvent("popup"),
        home.PatientLogin()
    ]);

    await loginPage.waitForLoadState("domcontentloaded");

    return { context, page: loginPage }; // returns an object containing the context and the login-page tab
}

// 2. LOGIN TO HMS PATIENT PORTAL
async function loginPatient(page, email, password) {
    const patientLogin = new patientLog(page);

    await patientLogin.PatientloginProcess(email, password);

    return patientLogin;
}

// 3. REGISTER A NEW PATIENT 
async function registerNewPatient(page) {
    const patientRegister = new patientregister(page);

    const email = uniqueEmail();

    const registrationDialogPromise = page.waitForEvent("dialog");

    await patientRegister.registration(
        registrationData.name,
        registrationData.address,
        registrationData.city,
        email,
        registrationData.pwd
    );

    const dialog = await registrationDialogPromise;
    const message = dialog.message();

    await dialog.accept();

    return {
        email,
        password: registrationData.pwd,
        message,
        patientRegister
    };
}

// --------------------------------------------------
// HMS AUTOMATION TEST SUITE
// --------------------------------------------------

test.describe("HMS_SYS_TESTING", () => {

    test.setTimeout(60000);

    // --------------------------------------------------
    // HMS_TS_01: PATIENT REGISTRATION
    // Functional testing
    // --------------------------------------------------

    test("HMS_TS_01 - Register a new patient successfully", async ({ browser }) => {
        const { context, page } = await openPatientLogin(browser);

        try {
            const result = await registerNewPatient(page);

            expect(result.message).toBe(
                "Successfully Registered. You can login now"
            );
        } finally {
            await context.close();
        }
    });

    // --------------------------------------------------
    // HMS_TS_02: REGISTERED PATIENT CAN LOGIN
    // Integration testing
    // --------------------------------------------------

    test("HMS_TS_02 - Register a patient and login with the new credentials", async ({ browser }) => {
        const { context, page } = await openPatientLogin(browser);

        try {
            const result = await registerNewPatient(page);

            expect(result.message).toBe(
                "Successfully Registered. You can login now"
            );

            // Navigate from registration page to login page
            await result.patientRegister.re_login.click();

            const patientLogin = await loginPatient(
                page,
                result.email,
                result.password
            );

            await expect(patientLogin.heading).toHaveText(
                "User | Dashboard"
            );
        } finally {
            await context.close();
        }
    });

    // --------------------------------------------------
    // HMS_TS_03: VALID LOGIN AND DASHBOARD
    // Functional testing
    // --------------------------------------------------

    test("HMS_TS_03 - Login with valid credentials and verify dashboard", async ({ browser }) => {
        const { context, page } = await openPatientLogin(browser);

        try {
            const patientLogin = await loginPatient(
                page,
                validPatient.email,
                validPatient.pwd
            );

            await expect(page).toHaveURL(/dashboard\.php/);

            await expect(patientLogin.heading).toHaveText(
                "User | Dashboard"
            );

            await expect(
                page.getByText("My Profile", { exact: true })
            ).toBeVisible();

            await expect(
                page.getByText("My Appointments", { exact: true })
            ).toBeVisible();

            await expect(
                page.getByText("Book My Appointment", { exact: true })
            ).toBeVisible();
        } finally {
            await context.close();
        }
    });

    // --------------------------------------------------
    // HMS_TS_04: OPEN EDIT PROFILE
    // Functional testing
    // --------------------------------------------------

    test("HMS_TS_04 - Open Edit Profile and verify page heading", async ({ browser }) => {
        const { context, page } = await openPatientLogin(browser);

        try {
            const patientLogin = await loginPatient(
                page,
                validPatient.email,
                validPatient.pwd
            );

            await expect(patientLogin.heading).toHaveText(
                "User | Dashboard"
            );

            await patientLogin.PatientProfile();

            await expect(patientLogin.myprofile_title).toHaveText(
                "USER | EDIT PROFILE"
            );

            await expect(
                page.getByText("Edit Profile", { exact: true })
            ).toBeVisible();
        } finally {
            await context.close();
        }
    });

    // --------------------------------------------------
    // HMS_TS_05: BOOK AN APPOINTMENT
    // Integration testing
    // --------------------------------------------------

    test("HMS_TS_05 - Book an appointment successfully", async ({ browser }) => {
        const { context, page } = await openPatientLogin(browser);

        try {
            await loginPatient(
                page,
                validPatient.email,
                validPatient.pwd
            );

            const patientAppointment = new appointment(page);

            const bookingDialogPromise = page.waitForEvent("dialog");

            await patientAppointment.appointment_booking(
                "ENT",
                "Anuj kumar",
                "2026-12-15",
                "10:00 AM"
            );

            const dialog = await bookingDialogPromise;
            const message = dialog.message();

            await dialog.accept();

            expect(message).toBe(
                "Your appointment successfully booked"
            );
        } finally {
            await context.close();
        }
    });

    // --------------------------------------------------
    // HMS_TS_06: VERIFY APPOINTMENT HISTORY
    // Integration testing
    // --------------------------------------------------

    test("HMS_TS_06 - Verify booked appointment in appointment history", async ({ browser }) => {
        const { context, page } = await openPatientLogin(browser);

        try {
            await loginPatient(
                page,
                validPatient.email,
                validPatient.pwd
            );

            const patientAppointment = new appointment(page);

            const bookingDialogPromise = page.waitForEvent("dialog");

            await patientAppointment.appointment_booking(
                "ENT",
                "Anuj kumar",
                "2026-12-16",
                "11:00 AM"
            );

            const dialog = await bookingDialogPromise;
            const message = dialog.message();

            await dialog.accept();

            expect(message).toBe(
                "Your appointment successfully booked"
            );

            await patientAppointment.view_appt_history();

            await expect(
                page.locator(
                    '//td[normalize-space(.)="Anuj kumar"]'
                )
            ).toBeVisible();

            await expect(
                page.locator(
                    '//td[contains(normalize-space(.), "2026-12-16 / 11:00 AM")]'
                )
            ).toBeVisible();
        } finally {
            await context.close();
        }
    });

    // --------------------------------------------------
    // HMS_TS_07: UPDATE PATIENT PROFILE
    // Functional testing
    // --------------------------------------------------

    test("HMS_TS_07 - Update patient profile details", async ({ browser }) => {
        const { context, page } = await openPatientLogin(browser);

        try {
            await loginPatient(
                page,
                validPatient.email,
                validPatient.pwd
            );

            const patientAppointment = new appointment(page);

            const updatedName = `HMS Patient ${Date.now()}`;
            const updatedCity = "Bangalore";

            await patientAppointment.update_patient_profile(
                updatedName,
                updatedCity,
                "male"
            );

            await expect(patientAppointment.update_msg).toHaveText(
                "Your Profile updated Successfully"
            );

            // Verify the updated values in the form
            await expect(
                patientAppointment.update_name
            ).toHaveValue(updatedName);

            await expect(
                patientAppointment.update_city
            ).toHaveValue(updatedCity);

            await expect(
                patientAppointment.update_gender
            ).toHaveValue("male");
        } finally {
            await context.close();
        }
    });

    // --------------------------------------------------
    // HMS_TS_08: UPDATE EMAIL ADDRESS
    // Functional testing
    // --------------------------------------------------

    test("HMS_TS_08 - Update patient email address", async ({ browser }) => {
        const { context, page } = await openPatientLogin(browser);

        try {
            await loginPatient(
                page,
                emailUpdatePatient.email,
                emailUpdatePatient.pwd
            );

            const patientAppointment = new appointment(page);

            const updatedEmail = uniqueEmail();

            await patientAppointment.update_patient_email(updatedEmail);

            await expect(
                patientAppointment.upd_email_sucedd_msg
            ).toHaveText("Your email updated Successfully");

            // Verify the new email is reflected in the email field
            await expect(
                page.locator('input[name="email"]')
            ).toHaveValue(updatedEmail);
        } finally {
            await context.close();
        }
    });

    // --------------------------------------------------
    // HMS_TS_09: LOGOUT
    // System testing
    // --------------------------------------------------

    test("HMS_TS_09 - Logout and verify protected page access", async ({ browser }) => {
        const { context, page } = await openPatientLogin(browser);

        try {
            const patientLogin = await loginPatient(
                page,
                validPatient.email,
                validPatient.pwd
            );

            await expect(patientLogin.heading).toHaveText(
                "User | Dashboard"
            );

            // Open the account dropdown
            await patientLogin.profile_dropdown.click();

            // Use a valid CSS selector instead of the broken POM locator
            await page.locator('a[href="logout.php"]').click();

            await expect(page).toHaveURL(
                `${BASE_URL}index.php`
            );

            // Attempt to access the dashboard after logout
            await page.goto(`${BASE_URL}hms/dashboard.php`);

            // A protected page should not remain accessible
            await expect(page).not.toHaveURL(/dashboard\.php/);
        } finally {
            await context.close();
        }
    });

    // --------------------------------------------------
    // HMS_TS_10: AD HOC / UNEXPECTED INPUT
    // Negative and exploratory testing
    // --------------------------------------------------

    test("HMS_TS_10 - Verify invalid credentials do not grant dashboard access", async ({ browser }) => {
        const { context, page } = await openPatientLogin(browser);

        try {
            const invalidPatient = loginData.invalid[0];

            await loginPatient(
                page,
                invalidPatient.email,
                invalidPatient.pwd
            );

            // Invalid credentials must not authenticate the user
            await expect(page).not.toHaveURL(/dashboard\.php/);

            // Verify that the user has not reached the dashboard
            await expect(
                page.getByText("My Appointments", { exact: true })
            ).not.toBeVisible();
        } finally {
            await context.close();
        }
    });

});
