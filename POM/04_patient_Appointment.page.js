class appointment{
    constructor(page){
        this.page = page
        this.dashboard = page.locator('//span[@class="title" and text()=" Dashboard "]')
        this.book_appointment = page.locator('//span[@class="title" and text()=" Book Appointment "]')
        this.doc_specialization = page.locator('select[name="Doctorspecialization"]')
        this.doctor_name = page.locator('select[name="doctor"]')
        // this.appt_date = page.locator('input[data-date-format="yyyy-mm-dd"]')  input[name="appdate"]
        this.appt_date = page.locator('input[name="appdate"]') 
        this.appt_time = page.locator('input[id="timepicker1"]')
        this.submit_btn = page.getByRole("button",{name:"Submit"})
        this.appt_history = page.locator('//span[@class="title" and text()=" Appointment History "]')
    }

    async appointment_booking(spez, drname, date, time) {
        await this.book_appointment.click();
        await this.doc_specialization.selectOption(spez);
        await this.doctor_name.selectOption(drname);
        await this.appt_date.pressSequentially(date);
        await this.appt_time.fill(time);

        const dialogMessagePromise = this.page.waitForEvent("dialog").then(async (dialog) => {
            const message = dialog.message();
            await dialog.accept();
            return message;
        });

        const [message] = await Promise.all([
            dialogMessagePromise,
            this.submit_btn.click()
        ]);
        return message;
    }

    async view_appt_history(){
        await this.appt_history.click()
    }

    async patient_dashboard(){
        await this.dashboard.click()
    }
}

export default appointment