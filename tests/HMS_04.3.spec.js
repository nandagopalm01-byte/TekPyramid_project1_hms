import fs from "node:fs";
import path from "node:path";
import { test, expect } from '../fixtures/hms_login.fixture.js';
import { fakerdata } from "../utils/FakerData.js";

import hms from "../POM/01_hms";
import homePage from "../POM/02_home.page";
import patientLog from "../POM/03_patient_login.page";
import appointment from "../POM/04_patient_Appointment.page";
import patientregister from "../POM/05_patient_registration.page";
import patient_details_updation from "../POM/06_patient_details_updation";
import doctorLogin from "../POM/07_doctor_login.page.js";
import Doctor_Patient from "../POM/08_doctor_patient.page.js";

const testDataDir = path.resolve(process.cwd(), "test-data");
const patientDataPath = path.join(testDataDir, "patient-data.json");
const medicalHistoryPath = path.join(testDataDir,"patient-medical-history.json");

const patient_data = JSON.parse(fs.readFileSync(patientDataPath, "utf8"));
const medhistory = JSON.parse(fs.readFileSync(medicalHistoryPath, "utf8"));

const validPatient = { email: process.env.PATIENT_1_EMAIL?.trim(), pwd: process.env.PATIENT_1_PASSWORD?.trim() };

const uniqueEmail2 = () =>`hms_pw_${Date.now()}_${Math.floor(Math.random() * 10000)}@example.com`;
const safeTestText = (value) => value.replaceAll("'", "");
// const uniquePwd = ()=>`${Date.now()}_${Math.floor(Math.random() * 10000)}`

const pdname = safeTestText(fakerdata.getname())

// --------------------------------------------------
// REUSABLE HELPERS
// --------------------------------------------------

async function withAcceptedDialog(page, action) {
    const dialogPromise = page.waitForEvent("dialog").then(async (dialog) => {
        const message = dialog.message();
        await dialog.accept();
        return message;
    });

    const [message] = await Promise.all([dialogPromise, action()]);
    return message;
}

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
    const home = new homePage(publicPage)
    const [loginPage] = await Promise.all([
        publicPage.waitForEvent("popup"),
        home.PatientLogin()
    ]);
    await loginPage.waitForLoadState("domcontentloaded");
    return { context, page: loginPage }; // returns an object containing the context and the login-page tab
}

async function openDoctorLogin(browser) {
    const context = await browser.newContext();
    const page = await context.newPage();
    const hmsPage = new hms(page)
    const [publicPage]= await Promise.all([
        page.waitForEvent("popup"),
        hmsPage.homePage()
    ]);
    await publicPage.waitForLoadState("domcontentloaded");
    const home = new homePage(publicPage);
    const [loginPage] = await Promise.all([
        publicPage.waitForEvent("popup"),
        home.DoctorLoginPage()
    ]);
    await loginPage.waitForLoadState("domcontentloaded");
    return { context, page: loginPage };
}

async function loginPatient(page, email, password) {
    const patientLogin = new patientLog(page);
    await patientLogin.PatientloginProcess(email, password);
    return patientLogin;
}

async function registerNewPatient(page) {
    const patientRegister = new patientregister(page);
    const email = uniqueEmail2();
    const password = fakerdata.getpwd();
    const name = safeTestText(fakerdata.getname());
    const message = await withAcceptedDialog(
        page,
        () => patientRegister.registration(
            name,
            safeTestText(fakerdata.getaddress()),
            safeTestText(fakerdata.getcity()),
            email,
            password
        )
    );

    return {
        email,
        password,
        message,
        patientRegister,
        name
    };
}


//=========================================================================================================================
//=========================================================================================================================


test.describe("HMS E2E TESTING ",()=>{

    test.setTimeout(120000);

    // --------------------------------------------------
    // HMS_TS_01: PATIENT REGISTRATION
    // Functional testing
    // --------------------------------------------------

    test("HMS_TS_01 - Register a new patient successfully", async ({ browser }) => {
        const { context, page } = await openPatientLogin(browser);
        const result = await registerNewPatient(page);
        expect(result.message).toBe("Successfully Registered. You can login now");

        await context.close();
    })

    // --------------------------------------------------
    // HMS_TS_02: REGISTERED PATIENT CAN LOGIN
    // Integration testing
    // --------------------------------------------------

    test("HMS_TS_02 - Register a patient and login with the new credentials", async ({ browser }) => {

        const { context, page } = await openPatientLogin(browser);
        const result = await registerNewPatient(page);
        expect(result.message).toBe("Successfully Registered. You can login now");

        // Navigate from registration page to login page
        await result.patientRegister.re_login.click();
        const patientLogin = await loginPatient(page,result.email,result.password);
        await expect(patientLogin.heading).toHaveText("User | Dashboard");

        await context.close();
    })

    // --------------------------------------------------
    // HMS_TS_03: VALID LOGIN AND DASHBOARD
    // Functional testing
    // --------------------------------------------------


    test("HMS_TS_03 - Login as Patient with valid credentials and verify dashboard", async ({browser }) => {
        const { context, page } = await openPatientLogin(browser);
        const patientLogin = await loginPatient(page,validPatient.email,validPatient.pwd)

        await expect(patientLogin.heading).toHaveText("User | Dashboard");
        await expect(page.getByRole('heading', { name: 'My Profile' })).toBeVisible();
        await expect(page.getByText("My Appointments", { exact: true })).toBeVisible();
        await expect(page.getByText("Book My Appointment", { exact: true })).toBeVisible();

        await context.close();
    })  

    // --------------------------------------------------
    // HMS_TS_04: OPEN EDIT PROFILE
    // Functional testing
    // --------------------------------------------------

    test("HMS_TS_04 - Open Edit Profile and verify page heading", async ({ loggedInPatient  }) => {        
        const patientLogin = new patientLog(loggedInPatient) 
        await expect(patientLogin.heading).toHaveText("User | Dashboard");
        await patientLogin.PatientProfile();
        await expect(patientLogin.myprofile_title).toHaveText("User | Edit Profile");
        await expect(loggedInPatient.getByRole('heading', { name: 'Edit Profile', exact: true })).toBeVisible();
    })

    // --------------------------------------------------
    // HMS_TS_05: BOOK AN APPOINTMENT
    // Integration testing
    // --------------------------------------------------
    
    test("HMS_TS_05 - Book an appointment successfully", async ({ loggedInPatient }) => {
        const patientAppointment = new appointment(loggedInPatient);
        const message = await patientAppointment.appointment_booking(
            "Radiology",
            "Rahul Ramachandran",
            "2026-11-18",
            "10:00 AM"
        );
        expect(message).toBe("Your appointment successfully booked");
    })


    // --------------------------------------------------
    // HMS_TS_06: VERIFY APPOINTMENT HISTORY
    // Integration testing
    // --------------------------------------------------

    
    test("HMS_TS_06 - Verify booked appointment in appointment history", async ({ loggedInPatient }) => {
        const patientAppointment = new appointment(loggedInPatient);
        const message3 = await patientAppointment.appointment_booking(
            "Radiology",
            "Rahul Ramachandran",
            "2026-11-18",
            "10:00 AM"
        );
        expect(message3).toBe("Your appointment successfully booked");
        await patientAppointment.view_appt_history();
        await expect(loggedInPatient).toHaveURL(/appointment-history\.php/);
    });


    // --------------------------------------------------
    // HMS_TS_07: UPDATE PATIENT PROFILE
    // Functional testing
    // --------------------------------------------------

    test("HMS_TS_07 - Update patient profile details", async ({ loggedInPatient }) => {

        const patientAppointment = new patient_details_updation(loggedInPatient)

        const updatedName = `HMS Patient ${Date.now()}`;
        const updatedCity = "Bangalore";

        await patientAppointment.update_patient_profile(updatedName,updatedCity,"male");
        await expect(patientAppointment.update_msg).toHaveText("Your Profile updated Successfully");

        // Verify the updated values in the form
        await expect(patientAppointment.update_name).toHaveValue(updatedName);
        await expect(patientAppointment.update_city).toHaveValue(updatedCity);
        await expect(patientAppointment.update_gender).toHaveValue("male");
    })

    // --------------------------------------------------
    // HMS_TS_09: UPDATE PATIENT PASSWORD
    // Functional testing
    // --------------------------------------------------

    test("HMS_TS_09 - Update patient password",async({browser})=>{
        const { context, page } = await openPatientLogin(browser);
        const result = await registerNewPatient(page);
        expect(result.message).toBe("Successfully Registered. You can login now");
        await result.patientRegister.re_login.click();
        await loginPatient(page, result.email, result.password);

        const updateDetails = new patient_details_updation(page)
        const updatedPwd = fakerdata.getpwd()
        await updateDetails.update_patient_pwd(result.password,updatedPwd)

        await context.close()
    })

    // --------------------------------------------------
    // HMS_TS_08: UPDATE EMAIL ADDRESS
    // Functional testing
    // --------------------------------------------------

    test("HMS_TS_08 - Update patient email address", async ({ browser }) => {

        const { context, page } = await openPatientLogin(browser);
        const result = await registerNewPatient(page);
        expect(result.message).toBe("Successfully Registered. You can login now");
        await result.patientRegister.re_login.click();
        const patientLogin = await loginPatient(page,result.email,result.password);

        const patientAppointment = new patient_details_updation(page)
        const oldEmail = result.email;
        const updatedEmail = uniqueEmail2()

        await patientAppointment.open_update_profile();
        await patientAppointment.update_patient_email(updatedEmail);
        await expect(patientAppointment.upd_email_sucedd_msg).toHaveText("Your email updated Successfully");

        console.log(`Email updated successfully: ${oldEmail} -> ${updatedEmail}`);

        // Verify the new email is reflected in the email field
        await patientAppointment.dashboard.click()
        await patientAppointment.open_update_profile();

        await context.close();
    })

   
    // --------------------------------------------------
    // HMS_TS_10: LOGOUT
    // Functional testing
    // --------------------------------------------------

    test("HMS_TS_10 - Logout and verify protected page access", async ({ loggedInPatient }) => {
        const patientLogin = new patientLog(loggedInPatient)
        const BASE_URL ="http://49.249.29.4:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/";

        await expect(patientLogin.heading).toHaveText("User | Dashboard");

        // Open the account dropdown
        await patientLogin.profile_dropdown.click();

        // Uses a valid CSS selector instead of the broken POM locator
        await loggedInPatient.locator('a[href="logout.php"]').click();
        await expect(loggedInPatient).toHaveURL(`${BASE_URL}index.php`);

        // Attempt to access the dashboard after logout
        await loggedInPatient.goto(`${BASE_URL}hms/dashboard.php`);

        // A protected page should not remain accessible
        await expect(loggedInPatient).not.toHaveURL(/dashboard\.php/);
    })

    test("HMS_TS_11 - Login as Doctor with valid credentials and verify dashboard", async({browser})=>{
        const {context,page} = await openDoctorLogin(browser)
        const drLoginPage = new doctorLogin(page)

        await drLoginPage.DoctorLoginProcess(process.env.DOCTOR_1_EMAIL?.trim(),process.env.DOCTOR_1_PWD?.trim())
        await expect(drLoginPage.heading).toHaveText("Doctor | Dashboard")
        await expect(page.getByRole('heading', { name: 'My Profile' })).toBeVisible();
        await expect(page.getByText("My Appointments", { exact: true })).toBeVisible();
        await context.close();
    })


    test("HMS_TS_12 - Verify a new Patient's Doctor appointment in Doctor's Appointment history",{tag:'@failed1'}, async ({ browser }) => {
        test.setTimeout(240000);

        const { context, page } = await openPatientLogin(browser);
        const result = await registerNewPatient(page);

        expect(result.message).toBe("Successfully Registered. You can login now");
        
        await result.patientRegister.re_login.click();
        const patientLogin = await loginPatient(page, result.email, result.password);
        await expect(patientLogin.heading).toHaveText("User | Dashboard");

        const patientAppointment = new appointment(page);
        const message = await patientAppointment.appointment_booking(
            "Radiology",
            "Rahul Ramachandran",
            "2026-12-15",
            "10:00 AM"
        );
        expect(message).toBe("Your appointment successfully booked");

        const { context: context2, page: page2 } = await openDoctorLogin(browser);

        const drLoginPage = new doctorLogin(page2);
        await drLoginPage.DoctorLoginProcess(
            process.env.DOCTOR_2_EMAIL,
            process.env.DOCTOR_2_PWD
        );

        await drLoginPage.aptHistory.click();
        await expect(page2.locator(`//td[@class="hidden-xs" and normalize-space()="${result.name}"]`)).toBeVisible();

        await context.close();
        await context2.close();
    });

})


test.describe("DOCTOR AUTHENTICATED SCRIPTS",()=>{
    test.use({ storageState:'.auth/user.json'});
    test.setTimeout(120000);
    test("HMS_TS_13 - Add a Patient and Verify patient is added in Manage Patients",{tag:'@failed2'},async({page})=>{

        await page.goto(
            'http://49.249.29.4:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/hms/doctor/dashboard.php'
        );
        await expect(page.getByText("Doctor | Dashboard")).toBeVisible();

        const doctor_patient = new Doctor_Patient(page)
        const email = uniqueEmail2()

        await doctor_patient.add_patient(
            pdname,
            patient_data.age,
            patient_data.phno,
            patient_data.address,
            patient_data.med_hist,
            email
        )
        await doctor_patient.manage_patient()
        await expect(page.locator(`//td[@class="hidden-xs" and normalize-space()="${pdname}"]`).first()).toBeVisible()
    })

    test("HMS_TS_14 - Verify that medical history can be added for a patient",{tag:'@failed2'},async({page})=>{
        await page.goto('http://49.249.29.4:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/hms/doctor/dashboard.php');
        let mng_patient = new Doctor_Patient(page,"Mohanlal")
        await mng_patient.patient_link.click()
        await mng_patient.manage_patient_link.click()
        await mng_patient.mng_eye_icon.click()
        await expect(mng_patient.table_heading).toBeVisible()
        await expect(mng_patient.med_hist_heading).toBeVisible()

        await mng_patient.add_med_hist_btn.click()
        const mdialog = page.locator('#myModal').first()
        await mdialog.getByPlaceholder("Blood Pressure").fill(medhistory.patient_bp)
        await mdialog.getByPlaceholder("Blood Sugar").first().fill(medhistory.patient_sugar)
        await mdialog.getByPlaceholder("Weight").fill(medhistory.patient_weight)
        await mdialog.locator('input[name="temp"]').fill(medhistory.patient_temp)
        await mdialog.getByPlaceholder("Medical Prescription").fill(medhistory.prescription)

        const message = await withAcceptedDialog(
            page,
            () => mdialog.locator('button[name="submit"]').click()
        );
        
        expect(message).toBe("Medicle history has been added.");
        
    })

    test("HMS_TS_15 Verify patient's details are visible when entered in Search",{tag:'@auth_test3'},async({page})=>{
        await page.goto('http://49.249.29.4:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/hms/doctor/dashboard.php');
        let dr_dashboard = new doctorLogin(page)
        await dr_dashboard.SearchPatient(pdname)
        await expect(page.getByRole("row").filter({hasText:`${pdname}`}).first()).toBeVisible()

    })
})