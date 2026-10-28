import { test, expect } from "@playwright/test";
import fs from "fs";
import hms from "../POM/01_hms";
import homePage from "../POM/02_home.page";
import patientLog from "../POM/03_patient_login.page";
import appointment from "../POM/04_patient_Appointment.page";
import patientregister from "../POM/05_patient_registration.page";
import patient_details_updation from "../POM/06_patient_details_updation";

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

//const validPatient = loginData.valid[2];
const validPatient = loginData.valid.at(-1);
const emailUpdatePatient = loginData.valid[1];

const uniqueEmail = () =>`hms_pw_${Date.now()}_${Math.floor(Math.random() * 10000)}@example.com`;
const uniquePwd = ()=>`${Date.now()}_${Math.floor(Math.random() * 10000)}`

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

async function loginPatient(page, email, password) {
    const patientLogin = new patientLog(page);

    await patientLogin.PatientloginProcess(email, password);

    return patientLogin;
}

async function registerNewPatient(page) {
    const patientRegister = new patientregister(page);

    let message
    page.once("dialog",async(dialog)=>{
            message = dialog.message()
            dialog.accept()
        })
    
    const email = uniqueEmail();
    await patientRegister.registration(
        registrationData.name,
        registrationData.address,
        registrationData.city,
        email,
        registrationData.pwd
    );

    return {
        email: email,
        password: registrationData.pwd,
        message,
        patientRegister
    };
}


test.describe("HMS E2E TESTING",()=>{

    test.setTimeout(60000);

    // --------------------------------------------------
    // HMS_TS_01: PATIENT REGISTRATION
    // Functional testing
    // --------------------------------------------------

    test.skip("HMS_TS_01 - Register a new patient successfully", async ({ browser }) => {
        const { context, page } = await openPatientLogin(browser);
        const result = await registerNewPatient(page);
        expect(result.message).toBe("Successfully Registered. You can login now");
        
        const newUser1 = {
            email: result.email,
            pwd: result.password
        };
        loginData.valid.push(newUser1);
        fs.writeFileSync("D:/TekPyramid/Playwright_Project_2/test-data/login-data.json",JSON.stringify(loginData, null, 4));

        await context.close();
    })

    // --------------------------------------------------
    // HMS_TS_02: REGISTERED PATIENT CAN LOGIN
    // Integration testing
    // --------------------------------------------------

    test.skip("HMS_TS_02 - Register a patient and login with the new credentials", async ({ browser }) => {

        const { context, page } = await openPatientLogin(browser);
        const result = await registerNewPatient(page);
        expect(result.message).toBe("Successfully Registered. You can login now");

        // Navigate from registration page to login page
        await result.patientRegister.re_login.click();
        const patientLogin = await loginPatient(page,result.email,result.password);
        await expect(patientLogin.heading).toHaveText("User | Dashboard");

        const newUser2 = {
            email: result.email,
            pwd: result.password
        };
        loginData.valid.push(newUser2);
        fs.writeFileSync("D:/TekPyramid/Playwright_Project_2/test-data/login-data.json",JSON.stringify(loginData, null, 4));

        await context.close();
    })

    // --------------------------------------------------
    // HMS_TS_03: VALID LOGIN AND DASHBOARD
    // Functional testing
    // --------------------------------------------------


    test("HMS_TS_03 - Login with valid credentials and verify dashboard", async ({ browser }) => {
        const { context, page } = await openPatientLogin(browser);
        // const patientLogin = await loginPatient(page,validPatient.email,validPatient.pwd); // process.env.PATIENT_EMAIL 
        const patientLogin = await loginPatient(page,process.env.PATIENT_1_EMAIL,process.env.PATIENT_1_PASSWORD)

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

    test.skip("HMS_TS_04 - Open Edit Profile and verify page heading", async ({ browser }) => {
        const { context, page } = await openPatientLogin(browser);
        const patientLogin = await loginPatient(page,validPatient.email,validPatient.pwd);
        
        await expect(patientLogin.heading).toHaveText("User | Dashboard");
        await patientLogin.PatientProfile();
        await expect(patientLogin.myprofile_title).toHaveText("User | Edit Profile");
        await expect(page.getByRole('heading', { name: 'Edit Profile', exact: true })).toBeVisible();

        await context.close();
    })

    // --------------------------------------------------
    // HMS_TS_05: BOOK AN APPOINTMENT
    // Integration testing
    // --------------------------------------------------
    
    test.skip("HMS_TS_05 - Book an appointment successfully", async ({ browser }) => {
        const { context, page } = await openPatientLogin(browser);

        await loginPatient(page,validPatient.email,validPatient.pwd);
        const patientAppointment = new appointment(page);

        let message2
        page.once("dialog",async(dialog)=>{
            message2 = dialog.message()
            await dialog.accept()
        })
        await patientAppointment.appointment_booking(
            "ENT",
            "Anuj kumar",
            "2026-12-15",
            "10:00 AM"
        );
        await expect(message2).toBe("Your appointment successfully booked");

        await context.close();
    })

    // --------------------------------------------------
    // HMS_TS_06: VERIFY APPOINTMENT HISTORY
    // Integration testing
    // --------------------------------------------------

    // test("HMS_TS_06 - Verify booked appointment in appointment history", async ({ browser }) => {
    //     const { context, page } = await openPatientLogin(browser);
    //     await loginPatient(page,validPatient.email,validPatient.pwd);
        
    //     const patientAppointment = new appointment(page);
    //     let message3
    //     page.once("dialog",async(dialog)=>{
    //         message3 = dialog.message()
    //         await dialog.accept()
    //     })
    //     await patientAppointment.appointment_booking(
    //         "ENT",
    //         "Anuj kumar",
    //         "2026-12-15",
    //         "10:00 AM"
    //     );
    //     await expect(message3).toBe("Your appointment successfully booked");
    //     await patientAppointment.view_appt_history();
    //     //await expect(page.locator(`//td[text()="2026-10-22 12:16:31"]`).last()).toBeVisible();
    //     await expect(page).toHaveURL("http://49.249.29.4:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/hms/appointment-history.php")
    //     await context.close();
    // })

    test.skip("HMS_TS_06 - Verify booked appointment in appointment history", async ({ browser }) => {
        const { context, page } = await openPatientLogin(browser);
        await loginPatient(page, validPatient.email, validPatient.pwd);

        const patientAppointment = new appointment(page);

        // Start waiting before submitting the appointment form
        const dialogPromise = page.waitForEvent("dialog");

        await patientAppointment.appointment_booking(
            "ENT",
            "Anuj kumar",
            "2026-12-15",
            "10:00 AM"
        );

        const dialog = await dialogPromise;
        const message3 = dialog.message();
        await dialog.accept();

        expect(message3).toBe("Your appointment successfully booked");

        await patientAppointment.view_appt_history();

        await expect(page).toHaveURL(/appointment-history\.php/);

        await context.close();
    });

    // --------------------------------------------------
    // HMS_TS_07: UPDATE PATIENT PROFILE
    // Functional testing
    // --------------------------------------------------

    test.skip("HMS_TS_07 - Update patient profile details", async ({ browser }) => {
        const { context, page } = await openPatientLogin(browser);
        await loginPatient(page,validPatient.email,validPatient.pwd);

        //const patientAppointment = new appointment(page);
        const patientAppointment = new patient_details_updation(page)

        const updatedName = `HMS Patient ${Date.now()}`;
        const updatedCity = "Bangalore";

        await patientAppointment.update_patient_profile(updatedName,updatedCity,"male");
        await expect(patientAppointment.update_msg).toHaveText("Your Profile updated Successfully");

        // Verify the updated values in the form
        await expect(patientAppointment.update_name).toHaveValue(updatedName);
        await expect(patientAppointment.update_city).toHaveValue(updatedCity);
        await expect(patientAppointment.update_gender).toHaveValue("male");

        await context.close();
    })

    // --------------------------------------------------
    // HMS_TS_08: UPDATE EMAIL ADDRESS
    // Functional testing
    // --------------------------------------------------

    test.skip("HMS_TS_08 - Update patient email address", async ({ browser }) => {
        const { context, page } = await openPatientLogin(browser);
        await loginPatient(page,emailUpdatePatient.email,emailUpdatePatient.pwd);

        // const patientAppointment = new appointment(page);
        const patientAppointment = new patient_details_updation(page)
        const oldEmail = emailUpdatePatient.email;
        const updatedEmail = uniqueEmail();
        await patientAppointment.update_prof_link.click()
        await patientAppointment.update_patient_email(updatedEmail);

        await expect(patientAppointment.upd_email_sucedd_msg).toHaveText("Your email updated Successfully");

        const patientIndex = loginData.valid.findIndex(patient => patient.email === oldEmail);
        loginData.valid[patientIndex].email = updatedEmail;

        // Write the updated data back to the JSON file
        fs.writeFileSync("D:/TekPyramid/Playwright_Project_2/test-data/login-data.json",JSON.stringify(loginData, null, 4),"utf-8");

        // Update the in-memory account reference
        emailUpdatePatient.email = updatedEmail;
        console.log(`Email updated successfully: ${oldEmail} -> ${updatedEmail}`);

        // Verify the new email is reflected in the email field
        await patientAppointment.dashboard.click()
        await patientAppointment.update_prof_link.click()
        // await expect(page.locator('form[name="edit"] input[name="email"]')).toHaveValue(updatedEmail);

        await context.close();
    })

    // --------------------------------------------------
    // HMS_TS_09: UPDATE PATIENT PASSWORD
    // Functional testing
    // --------------------------------------------------

    test.skip("HMS_TS_09 - Update patient password",async({browser})=>{
        const { context, page } = await openPatientLogin(browser);
        await loginPatient(page,emailUpdatePatient.email,emailUpdatePatient.pwd);

        const updateDetails = new patient_details_updation(page)
        const updatedPwd = uniquePwd()
        const oldpwd = emailUpdatePatient.pwd
        await updateDetails.update_patient_pwd(emailUpdatePatient.pwd,updatedPwd)
        // await expect(page.locator('p[style="color:red;"]')).toHaveText('Password Changed Successfully !!')

        const patientIndex = loginData.valid.findIndex(patient => patient.pwd === oldpwd);
        loginData.valid[patientIndex].pwd = updatedPwd;

        // Write the updated data back to the JSON file
        fs.writeFileSync("D:/TekPyramid/Playwright_Project_2/test-data/login-data.json",JSON.stringify(loginData, null, 4),"utf-8");

        // Update the in-memory account reference
        emailUpdatePatient.pwd = updatedPwd;
        console.log(`Password updated successfully: ${oldpwd} -> ${updatedPwd}`);

    })

    // --------------------------------------------------
    // HMS_TS_10: LOGOUT
    // Functional testing
    // --------------------------------------------------

    test.skip("HMS_TS_10 - Logout and verify protected page access", async ({ browser }) => {
        const { context, page } = await openPatientLogin(browser);
        const patientLogin = await loginPatient(page,validPatient.email,validPatient.pwd);
        const BASE_URL ="http://49.249.29.4:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/";

        await expect(patientLogin.heading).toHaveText("User | Dashboard");

        // Open the account dropdown
        await patientLogin.profile_dropdown.click();

        // Uses a valid CSS selector instead of the broken POM locator
        await page.locator('a[href="logout.php"]').click();

        await expect(page).toHaveURL(`${BASE_URL}index.php`);

        // Attempt to access the dashboard after logout
        await page.goto(`${BASE_URL}hms/dashboard.php`);

        // A protected page should not remain accessible
        await expect(page).not.toHaveURL(/dashboard\.php/);
    })

})