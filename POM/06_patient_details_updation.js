import {test,expect} from '@playwright/test'

class patient_details_updation{
    constructor(page){
        this.page = page
        this.dashboard = page.locator('//span[@class="title" and text()=" Dashboard "]')
        // this.profile_dropdown = page.locator('i[class="ti-angle-down"]')  a[class="dropdown-toggle"]
        this.profile_dropdown = page.locator('a[class="dropdown-toggle"]')
        this.update_prof_link = page.getByRole("link",{name:" Update Profile "})
        this.update_name = page.locator('input[name="fname"]')
        this.update_city = page.locator('input[name="city"]')
        this.update_gender = page.locator('select[name="gender"]')
        this.update_btn = page.getByRole("button",{name:"Update"})
        this.update_msg = page.locator('h5[style="color: green; font-size:18px; "]')
        this.update_email = page.locator('//a[text()="Update your email id"]')
        this.upd_email_txtfld = page.getByPlaceholder("Email")
        this.email_update_btn = page.getByRole("button",{name:"Update"})
        this.upd_email_error_msg = page.locator('//span[@id="user-availability-status1"]')
        this.upd_email_sucedd_msg = page.locator('h5[style="color: green; font-size:18px; "]')
        this.upd_password_link = page.locator('a[href="change-password.php"]')
        this.upd_current_pwd = page.getByPlaceholder("Enter Current Password")
        this.upd_new_pwd = page.getByPlaceholder("New Password")
        this.upd_cnf_pwd = page.getByPlaceholder("Confirm Password")
        this.upd_pwd_sub_btn = page.getByRole("button",{name:"Submit"})
    }

    async open_update_profile() {
        await this.page.waitForLoadState("domcontentloaded")
        await this.profile_dropdown.click();
        await this.update_prof_link.click();
    }

    async update_patient_profile(upname,upcity,upgender){
        await this.open_update_profile()
        await this.update_name.fill(upname)
        await this.update_city.fill(upcity)
        await this.update_gender.selectOption(upgender)
        await this.update_btn.click()
    }
    
    async update_patient_email(upemail){
        await this.update_email.click()
        await this.upd_email_txtfld.fill(upemail)
        await this.email_update_btn.click()

    }

    async patient_dashboard(){
        await this.dashboard.click()
    }
    
    async update_patient_pwd(oldpwd,newpwd){
        await this.profile_dropdown.click()
        await this.upd_password_link.click()
        await this.upd_current_pwd.fill(oldpwd)
        await this.upd_new_pwd.fill(newpwd)
        await this.upd_cnf_pwd.fill(newpwd)
        await this.upd_pwd_sub_btn.click()
    }
}

export default patient_details_updation