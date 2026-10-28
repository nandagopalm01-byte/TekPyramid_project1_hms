import { test, expect } from "@playwright/test";
import fs, { readFileSync } from "fs";
import homePage from "../POM/02_home.page";
import hms from "../POM/01_hms";
import patientLog from "../POM/03_patient_login.page";
import appointment from "../POM/04_patient_Appointment.page";
import patientregister from "../POM/05_patient_registration.page";

let login_data_file = fs.readFileSync("D:/TekPyramid/Playwright_Project_2/test-data/login-data.json",);
let login_data = JSON.parse(login_data_file);
let registr_data_file = fs.readFileSync("D:/TekPyramid/Playwright_Project_2/test-data/registration-data.json")
let registr_data = JSON.parse(registr_data_file)

test.describe("HMS_SYS_TESTING", () => {
  for (let vdata of login_data.valid) {

    test.skip(`NEW PATIENT REGISTRATION - ${vdata.email}`,async({browser})=>{
        let context = await browser.newContext()
        let page = await context.newPage()
        // TEST SERVER HOME PAGE --> HMS HOMEPAGE
        let hmsPage = new hms(page)
        let [page2] = await Promise.all([
                page.waitForEvent('popup'),
                hmsPage.homePage()
        ])
        // HMS HOMEPAGE ---> PATIENT LOGIN
        let home = new homePage(page2)
        await page2.waitForLoadState()
        let [page3] = await Promise.all([
                page2.waitForEvent('popup'),
                home.PatientLogin()
        ])

        // REGISTRATION OF PATIENT 
        let p_register = new patientregister(page3)
        let msg1
        page3.once("dialog",async(dialog)=>{
            msg1 = dialog.message()
            dialog.accept()
        })
        await p_register.registration(
            registr_data.name,
            registr_data.address,
            registr_data.city,
            registr_data.email,
            registr_data.pwd
        )

        // Add new email and password to valid data in login_data
        const newUser = {
            email: registr_data.email,
            pwd: registr_data.pwd
        };

        login_data.valid.push(newUser);
        // Write the updated data back to the JSON file
        fs.writeFileSync("D:/TekPyramid/Playwright_Project_2/test-data/login-data.json",JSON.stringify(login_data, null, 4));
        await expect(msg1).toBe("Successfully Registered. You can login now")
    })
    test(`VALID_CREDENTIAL_LOGIN - ${vdata.email}`, async ({ browser }) => {
      test.setTimeout(60000);
      let context = await browser.newContext();
      let page = await context.newPage();
      // TEST SERVER HOME PAGE --> HMS HOMEPAGE
      let hmsPage = new hms(page);
      let [page2] = await Promise.all([
        page.waitForEvent("popup"),
        hmsPage.homePage(),
      ]);
      // HMS HOMEPAGE ---> PATIENT LOGIN
      let home = new homePage(page2);
      await page2.waitForLoadState();
      let [page3] = await Promise.all([
        page2.waitForEvent("popup"),
        home.PatientLogin(),
      ]);
      await expect(page3).toHaveURL(
        "http://49.249.29.4:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/hms/user-login.php",
      );

      let patientLogin = new patientLog(page3);
      await patientLogin.PatientloginProcess(vdata.email, vdata.pwd);
      await expect(await patientLogin.heading).toHaveText("User | Dashboard");
      await patientLogin.PatientProfile()
      await expect(await patientLogin.myprofile_title),toHaveText("USER | EDIT PROFILE")
      await patientLogin.Logout()
      await expect(page3).toHaveURL('http://49.249.29.4:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/index.php')
    });

    test.skip(`BOOKING_DOCTOR_APPOINTMENT - ${vdata.email}`, async ({ browser }) => {
      let context = await browser.newContext();
      let page = await context.newPage();
      // TEST SERVER HOME PAGE --> HMS HOMEPAGE
      let hmsPage = new hms(page);
      let [page2] = await Promise.all([
        page.waitForEvent("popup"),
        hmsPage.homePage(),
      ]);
      // HMS HOMEPAGE ---> PATIENT LOGIN
      let home = new homePage(page2);
      await page2.waitForLoadState();
      let [page3] = await Promise.all([
        page2.waitForEvent("popup"),
        home.PatientLogin(),
      ]);
      // LOGIN ---> DASHBOARD
      let patientLogin = new patientLog(page3);
      await patientLogin.PatientloginProcess(vdata.email, vdata.pwd);

      // APPOINTMENT BOOKING
      let patient_appt = new appointment(page3);
      let msg2;
      page3.once("dialog", async (dialog) => {
        msg2 = dialog.message();
        dialog.accept();
      });
      await patient_appt.appointment_booking(
        "ENT",
        "Anuj kumar",
        "2026-11-20",
        "10:00 AM",
      );
      await expect(msg2).toBe("Your appointment successfully booked");

      // APPOINMENT HISTORY
      await patient_appt.view_appt_history();
      await expect(
        await page3.locator(
          `//td[@class="hidden-xs" and text()="Anuj kumar"]/ancestor::table[@id="sample-table-1"]/descendant::td[text()="2026-11-20 / 10:00 AM												"]`,
        ),
      );
      await patient_appt.patient_dashboard();
    });

    test.skip(`UPDATING PROFILE - ${vdata.email}`,async({browser})=>{
        test.setTimeout(60000);
        let context = await browser.newContext();
        let page = await context.newPage();
        let hmsPage = new hms(page);
        let [page2] = await Promise.all([
            page.waitForEvent("popup"),
            hmsPage.homePage(),
        ]);
        // HMS HOMEPAGE ---> PATIENT LOGIN
        let home = new homePage(page2);
        await page2.waitForLoadState();
        let [page3] = await Promise.all([
            page2.waitForEvent("popup"),
            home.PatientLogin(),
        ]);
        let patientLogin = new patientLog(page3);
        await patientLogin.PatientloginProcess(vdata.email, vdata.pwd);

        // UPDATE PATIENT PROFILE
        let patient_appt = new appointment(page3)
        await patient_appt.update_patient_profile("kichu3","BANGALORE","male")
        await expect(patient_appt.update_msg).toHaveText("Your Profile updated Successfully")
        await patient_appt.update_patient_email("hms_sample02@gamil.com")
        // await expect(patient_appt.upd_email_error_msg).toBe(" Email already exists .")
        await expect(patient_appt.upd_email_sucedd_msg).toBe("Your email updated Successfully")
        await context.close()
    })


  }
});
