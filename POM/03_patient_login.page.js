import {test,expect} from '@playwright/test'

class patientLogin{
    constructor(page){
        this.page = page
        this.patientName = page.getByPlaceholder("Username")
        this.patientPwd = page.getByPlaceholder("Password")
        this.submitBtn = page.getByRole("button",{name:"Login "})
        this.heading = page.locator(".mainTitle")
        this.profile_dropdown = page.locator('i[class="ti-angle-down"]')
        this.my_profile = page.locator('//a[@href="edit-profile.php"]//ancestor::ul[@class="dropdown-menu dropdown-dark"]//descendant::a[@href="edit-profile.php"]') // a[href="edit-profile.php"] //
        this.logout = page.locator('href="logout.php"')
        this.myprofile_title = page.locator('h1[class="mainTitle"]')

    }

    async PatientloginProcess(pname,pwd){
        await this.patientName.fill(pname)
        await this.patientPwd.fill(pwd)
        await this.submitBtn.click()
    }
    async PatientProfile(){
        await this.profile_dropdown.click()
        await this.my_profile.click()
    }
    async Logout(){
        await this.profile_dropdown.click()
        await this.logout.click()
    }
}

export default patientLogin