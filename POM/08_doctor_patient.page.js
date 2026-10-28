import {test,expect} from '@playwright/test'

class Doctor_Patient{
    constructor(page,mng_patient_name){
        this.page = page
        this.patient_link = page.locator('//span[@class="title" and normalize-space()="Patients"]')
        this.add_patient_link = page.locator('a[href="add-patient.php"]')
        this.manage_patient_link = page.locator('a[href="manage-patient.php"]')
        this.patient_name = page.getByPlaceholder("Enter Patient Name")
        this.patient_contact_no = page.getByPlaceholder("Enter Patient Contact no")
        this.patient_email = page.getByPlaceholder("Enter Patient Email id")
        this.patient_address = page.getByPlaceholder("Enter Patient Address")
        this.patient_age = page.getByPlaceholder("Enter Patient Age")
        this.patient_gender = page.locator('label[for="rg-male"]')
        this.patient_medical_history = page.getByPlaceholder('Enter Patient Medical History(if any)')
        this.p_details_submit = page.getByRole("button",{name:"Add"})

        // this.mng_patient_name = page.getByRole("row").filter({hasText:`${mng_pname}`}).first()
        this.mng_patient_name = mng_patient_name
            ? page.getByRole("row").filter({ hasText: mng_patient_name }).first()
            : page.getByRole("row").filter({ hasText: /.+/ }).first();

        //this.mng_eye_icon = mng_patient_name.getByRole("link",{name:""})
        
        this.mng_eye_icon = this.mng_patient_name.getByRole("link", { name: /View|/ });
        this.table_heading = page.locator('//td[@colspan="4"]')
        this.med_hist_heading = page.locator('//th[@colspan="8"]')
        this.add_med_hist_btn = page.getByRole("button",{name:"Add Medical History"})
    }

    async add_patient(pname,p_age,phno,paddress,p_med_hist,pemail){
        await this.patient_link.click()
        await this.add_patient_link.click()
        await this.patient_name.fill(pname)
        await this.patient_age.fill(p_age)
        await this.patient_contact_no.fill(phno)
        await this.patient_address.fill(paddress)
        await this.patient_gender.click()
        await this.patient_medical_history.fill(p_med_hist)
        await this.patient_email.fill(pemail)
        await this.p_details_submit.click()
    }

    async manage_patient(){
        await this.patient_link.click()
        await this.manage_patient_link.click()
    }

    // async mng_patient_add_medHist(){
    //     await this.mng_eye_icon.click()
    //     await this.add_med_hist_btn.click()
    //     this.page.on("dialog",async(dialog)=>{

    //     })
    // }
}

export default Doctor_Patient