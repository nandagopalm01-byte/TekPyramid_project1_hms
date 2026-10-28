import {test,expect} from '@playwright/test'

class homePage{
    constructor(page){
        this.page = page
        this.patient_login_btn = page.locator('//a[@href="hms/user-login.php"]/ancestor::div[@class="blog-single-det"]/descendant::button[@class="btn btn-success btn-sm"]')
        this.doctor_login_btn = page.locator('//button[@class="btn btn-success btn-sm"]/parent::a[@href="hms/doctor"]/child::button[text()="Click Here"]')
    }

    async PatientLogin(){
        await expect(this.patient_login_btn).toBeVisible()
        await this.patient_login_btn.click()
    }
    async DoctorLoginPage(){
        await expect(this.doctor_login_btn).toBeVisible()
        await this.doctor_login_btn.click()
    }
}

export default homePage