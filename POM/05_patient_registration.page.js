import {test,expect} from '@playwright/test'

class patientregister{
    constructor(page){
        this.page = page
        this.create_accnt_link = page.getByRole("link",{name:"Create an account"})
        this.regstr_page_heading = page.locator('//h2[text()="HMS | Patient Registration"]')
        this.patient_name = page.getByPlaceholder("Full Name")
        this.patient_address = page.getByPlaceholder("Address")
        this.patient_city = page.getByPlaceholder("City")
        this.patient_gender = page.locator('label[for="rg-male"]')  // page.getByRole("radio").first() //  page.locator("#rg-male")
        this.patient_email = page.getByPlaceholder("Email")
        this.patient_pwd = page.getByPlaceholder("Password",{exact:true})
        this.patient_cnfpwd = page.getByPlaceholder("Password Again",{exact:true})
        this.register_agree = page.locator("#agree")
        this.register_submit_btn = page.locator("#submit")
        this.re_login = page.getByRole("link",{name:"Log-in"})
        }

    async registration(pname,paddress,pcity,pemail,pwd){
        await this.create_accnt_link.click()
        await this.patient_name.fill(pname)
        await this.patient_address.fill(paddress)
        await this.patient_city.fill(pcity)
        await this.patient_gender.click()
        await this.patient_email.fill(pemail)
        await this.patient_pwd.fill(pwd)
        await this.patient_cnfpwd.fill(pwd)
        await this.register_agree.check()

        console.log('Name:', await this.patient_name.inputValue());
        console.log('Address:', await this.patient_address.inputValue());
        console.log('City:', await this.patient_city.inputValue());
        console.log('Email:', await this.patient_email.inputValue());
        console.log('Password fields match:',
            (await this.patient_pwd.inputValue()) === (await this.patient_cnfpwd.inputValue())
        );
        console.log('Agreement checked:', await this.register_agree.isChecked());
        console.log('Submit enabled:', await this.register_submit_btn.isEnabled());
        
        // Wait for the form's validation to enable Submit
        await expect(this.register_submit_btn).toBeEnabled();
        
        await this.register_submit_btn.click()
    }
}
export default patientregister