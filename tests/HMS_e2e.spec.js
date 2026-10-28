import {test,expect} from '@playwright/test'
import fs, { readFileSync } from 'fs'
import homePage from '../POM/02_home.page'
import hms from '../POM/01_hms'
import patientLog from '../POM/03_patient_login.page'
import appointment from '../POM/04_patient_Appointment.page'
import patientregister from '../POM/05_patient_registration.page'


// Your appointment successfully booked
// Your email updated Successfully
// Successfully Registered. You can login now

let login_data_file = fs.readFileSync('D:/TekPyramid/Playwright_Project_2/test-data/login-data.json')
let login_data = JSON.parse(login_data_file)

test("HMS SYS TETSING",async({browser})=>{
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
    await expect(page3).toHaveURL('http://49.249.29.4:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/hms/user-login.php')

    // REGISTRATION OF PATIENT 
    // let p_register = new patientregister(page3)
    // let msg1
    // page3.once("dialog",async(dialog)=>{
    //     msg1 = dialog.message()
    //     dialog.accept()
    // })
    // await p_register.registration("kichu","Indus avenue","Thrissur","hms_sample02@gamil.com","123456789")
    // await expect(msg1).toContain("Successfully Registered. You can login now")
    // await p_register.re_login.click()

    // PATIENT LOGIN
    let patientLogin = new patientLog(page3)
    await patientLogin.PatientloginProcess("hms_sample02@gamil.com","123456789")
    console.log(await patientLogin.heading);
    await expect(await patientLogin.heading).toHaveText("User | Dashboard")

    // DOCTOR APPOINTMNET BOOKING
    let patient_appt = new appointment(page3)
    let msg2
    page3.once("dialog",async(dialog)=>{
        msg2 = dialog.message()
        dialog.accept()
    })
    await patient_appt.appointment_booking("ENT","Anuj kumar","2026-11-20","10:00 AM")
    await expect(msg2).toContain("Your appointment successfully booked")

    // APPOINMENT HISTORY
    await patient_appt.view_appt_history()
    await expect(await page3.locator(`//td[@class="hidden-xs" and text()="Anuj kumar"]/ancestor::table[@id="sample-table-1"]/descendant::td[text()="2026-11-20 / 10:00 AM												"]`))
    await patient_appt.patient_dashboard()

    // UPDATE PATIENT PROFILE
    await patient_appt.update_patient_profile("kichu2","mysore","male")
    await expect(patient_appt.update_msg).toHaveText("Your Profile updated Successfully")
    await patient_appt.update_patient_email("hms_sample02@gamil.com")
    // await expect(patient_appt.upd_email_error_msg).toHaveText(" Email already exists .")
    await expect(patient_appt.upd_email_sucedd_msg).toHaveText("Your email updated Successfully")
    await context.close()
})