import { test as base, expect } from '@playwright/test';
import dotenv from 'dotenv';
import hms from "../POM/01_hms";
import homePage from "../POM/02_home.page";
import patientLog from "../POM/03_patient_login.page";

dotenv.config();

export const test = base.extend({ loggedInPatient: async ({ browser }, use) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    // Open the HMS application
    await page.goto(process.env.BASE_URL);

    // Test server home page -> HMS home page
    const hmsPage = new hms(page);

    const [publicPage] = await Promise.all([
        page.waitForEvent("popup"),
        hmsPage.homePage()
    ]);

    await publicPage.waitForLoadState("domcontentloaded");

    // HMS home page -> Patient login page
    const home = new homePage(publicPage);

    const [loginPage] = await Promise.all([
        publicPage.waitForEvent("popup"),
        home.PatientLogin()
    ]);

    await loginPage.waitForLoadState("domcontentloaded");

    const patientLogin = new patientLog(loginPage);

    await patientLogin.PatientloginProcess(process.env.PATIENT_1_EMAIL,process.env.PATIENT_1_PASSWORD);

    try {
        await use(loginPage);
    } finally {
        await context.close();
    }

    // await use(loginPage);

    // Optional teardown after the test
    // Add cleanup here if your test needs it.
  },
});

export { expect };
