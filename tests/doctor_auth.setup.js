import { test as setup, expect } from '@playwright/test';
import hms from "../POM/01_hms";
import homePage from "../POM/02_home.page";
import doctorLogin from "../POM/07_doctor_login.page.js";
import path from 'path';
import fs from 'fs';

const authDir = path.resolve(__dirname, '../.auth');
const authFile = path.join(authDir, 'user.json');
// const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup("authenticate",async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    const hmsPage = new hms(page)
    const [publicPage]= await Promise.all([
        page.waitForEvent("popup"),
        hmsPage.homePage()
    ]);
    await publicPage.waitForLoadState("domcontentloaded");
    const home = new homePage(publicPage);
    const [loginPage] = await Promise.all([
        publicPage.waitForEvent("popup"),
        home.DoctorLoginPage()
    ]);
    await loginPage.waitForLoadState("domcontentloaded");

    const drLoginPage = new doctorLogin(loginPage)
    await drLoginPage.DoctorLoginProcess(process.env.DOCTOR_2_EMAIL,process.env.DOCTOR_2_PWD)
    await expect(drLoginPage.heading).toHaveText("Doctor | Dashboard")
    // recursive: true option means that if .auth already exists, 
    // Node.js leaves it in place without throwing an error. If it doesn't exist, Node.js creates it.
    fs.mkdirSync(authDir, { recursive: true }); 
    await loginPage.context().storageState({ path: authFile });

})