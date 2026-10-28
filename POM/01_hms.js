import {test,expect} from '@playwright/test'

class hms{
    constructor(page){
        this.page = page
        this.hms_link = page.getByRole("link",{name:"Hospital Doctor Patient Management System"})
    }

    async homePage(){
        await this.page.goto('/')
        await expect(this.hms_link).toBeVisible()
        await this.hms_link.click()
    }
}
export default hms