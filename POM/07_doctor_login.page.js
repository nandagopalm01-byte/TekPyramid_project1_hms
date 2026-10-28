import {test,expect} from '@playwright/test'

class doctorLogin{
   constructor(page){
      this.page = page
      this.doctorEmail = page.getByPlaceholder("Username")
      this.doctorPwd = page.getByPlaceholder("Password")
      this.submitBtn = page.getByRole("button",{name:"Login "})
      this.heading = page.locator(".mainTitle")
      this.aptHistory = page.locator('//span[@class="title" and text()=" Appointment History "]')
      this.patient_search = page.locator('a[href="search.php"]')
      this.patient_search_txtField = page.locator('#searchdata')
      this.p_search_submit_btn = page.locator('#submit')
   } 

   // async DoctorLoginProcess(dremail,drpwd){
   //    await this.doctorEmail.fill(dremail)
   //    await this.doctorPwd.fill(drpwd)
   //    await this.submitBtn.click()
   // }

   async DoctorLoginProcess(dremail, drpwd) {
      if (typeof dremail !== "string" || !dremail.trim()) {
         throw new Error("Doctor email is missing. Check DOCTOR_1_EMAIL / DOCTOR_2_EMAIL in .env.");
      }
      if (typeof drpwd !== "string" || !drpwd.trim()) {
         throw new Error("Doctor password is missing. Check DOCTOR_1_PWD / DOCTOR_2_PWD in .env.");
      }
      await this.doctorEmail.fill(dremail.trim());
      await this.doctorPwd.fill(drpwd);
      await this.submitBtn.click();
   }

   async SearchPatient(pname){
      await this.patient_search.click()
      await this.patient_search_txtField.fill(pname)
      await this.p_search_submit_btn.click()
   }

}

export default doctorLogin