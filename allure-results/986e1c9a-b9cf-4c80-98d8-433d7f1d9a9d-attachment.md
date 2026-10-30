# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HMS_04.3.spec.js >> DOCTOR AUTHENTICATED SCRIPTS >> HMS_TS_14 - Verify that medical history can be added for a patient
- Location: tests\HMS_04.3.spec.js:427:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: dialog.accept: Target page, context or browser has been closed
```

# Test source

```ts
  348 |     test("HMS_TS_11 - Login as Doctor with valid credentials and verify dashboard", async({browser})=>{
  349 |         const {context,page} = await openDoctorLogin(browser)
  350 |         const drLoginPage = new doctorLogin(page)
  351 | 
  352 |         await drLoginPage.DoctorLoginProcess(process.env.DOCTOR_1_EMAIL?.trim(),process.env.DOCTOR_1_PWD?.trim())
  353 |         await expect(drLoginPage.heading).toHaveText("Doctor | Dashboard")
  354 |         await expect(page.getByRole('heading', { name: 'My Profile' })).toBeVisible();
  355 |         await expect(page.getByText("My Appointments", { exact: true })).toBeVisible();
  356 |         await context.close();
  357 |     })
  358 | 
  359 | 
  360 |     test("HMS_TS_12 - Verify a new Patient's Doctor appointment in Doctor's Appointment history",{tag:'@failed1'}, async ({ browser }) => {
  361 | 
  362 |         const { context, page } = await openPatientLogin(browser);
  363 |         const result = await registerNewPatient(page);
  364 | 
  365 |         expect(result.message).toBe("Successfully Registered. You can login now");
  366 |         const newUser1 = {
  367 |             email: result.email,
  368 |             pwd: result.password
  369 |         };
  370 |         loginData.valid.push(newUser1);
  371 |         fs.writeFileSync(loginDataPath,JSON.stringify(loginData, null, 4),"utf8");
  372 |         
  373 |         await result.patientRegister.re_login.click();
  374 |         const patientLogin = await loginPatient(page, result.email, result.password);
  375 |         await expect(patientLogin.heading).toHaveText("User | Dashboard");
  376 | 
  377 |         const patientAppointment = new appointment(page);
  378 |         const message = await patientAppointment.appointment_booking(
  379 |             "Radiology",
  380 |             "Rahul Ramachandran",
  381 |             "2026-12-15",
  382 |             "10:00 AM"
  383 |         );
  384 | 
  385 |         const { context: context2, page: page2 } = await openDoctorLogin(browser);
  386 | 
  387 |         const drLoginPage = new doctorLogin(page2);
  388 |         await drLoginPage.DoctorLoginProcess(
  389 |             process.env.DOCTOR_2_EMAIL,
  390 |             process.env.DOCTOR_2_PWD
  391 |         );
  392 | 
  393 |         await drLoginPage.aptHistory.click();
  394 |         await expect(page2.locator(`//td[@class="hidden-xs" and normalize-space()="${result.name}"]`)).toBeVisible();
  395 | 
  396 |         await context.close();
  397 |         await context2.close();
  398 |     });
  399 | 
  400 | })
  401 | 
  402 | 
  403 | test.describe("DOCTOR AUTHENTICATED SCRIPTS",()=>{
  404 |     test.use({ storageState:'.auth/user.json'});
  405 |     test("HMS_TS_13 - Add a Patient and Verify patient is added in Manage Patients",{tag:'@failed2'},async({page})=>{
  406 | 
  407 |         await page.goto(
  408 |             'http://49.249.29.4:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/hms/doctor/dashboard.php'
  409 |         );
  410 |         await expect(page.getByText("Doctor | Dashboard")).toBeVisible();
  411 | 
  412 |         const doctor_patient = new Doctor_Patient(page)
  413 |         const email = uniqueEmail2()
  414 | 
  415 |         await doctor_patient.add_patient(
  416 |             pdname,
  417 |             patient_data.age,
  418 |             patient_data.phno,
  419 |             patient_data.address,
  420 |             patient_data.med_hist,
  421 |             email
  422 |         )
  423 |         await doctor_patient.manage_patient()
  424 |         await expect(page.locator(`//td[@class="hidden-xs" and normalize-space()="${pdname}"]`).first()).toBeVisible()
  425 |     })
  426 | 
  427 |     test("HMS_TS_14 - Verify that medical history can be added for a patient",{tag:'@failed2'},async({page})=>{
  428 |         await page.goto('http://49.249.29.4:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/hms/doctor/dashboard.php');
  429 |         let mng_patient = new Doctor_Patient(page,"Mohanlal")
  430 |         await mng_patient.patient_link.click()
  431 |         await mng_patient.manage_patient_link.click()
  432 |         await mng_patient.mng_eye_icon.click()
  433 |         await expect(mng_patient.table_heading).toBeVisible()
  434 |         await expect(mng_patient.med_hist_heading).toBeVisible()
  435 | 
  436 |         await mng_patient.add_med_hist_btn.click()
  437 |         const mdialog = page.locator('#myModal').first()
  438 |         await mdialog.getByPlaceholder("Blood Pressure").fill(medhistory.patient_bp)
  439 |         await mdialog.getByPlaceholder("Blood Sugar").first().fill(medhistory.patient_sugar)
  440 |         await mdialog.getByPlaceholder("Weight").fill(medhistory.patient_weight)
  441 |         await mdialog.locator('input[name="temp"]').fill(medhistory.patient_temp)
  442 |         await mdialog.getByPlaceholder("Medical Prescription").fill(medhistory.prescription)
  443 | 
  444 |         const dialogPromise = page.waitForEvent("dialog");
  445 |         await mdialog.locator('button[name="submit"]').click()
  446 |         const dialog = await dialogPromise;
  447 |         const message = dialog.message();
> 448 |         await dialog.accept();
      |                      ^ Error: dialog.accept: Target page, context or browser has been closed
  449 |         
  450 |         expect(message).toBe("Medicle history has been added.");
  451 |         
  452 |     })
  453 | 
  454 |     test("HMS_TS_15 Verify patient's details are visible when entered in Search",{tag:'@auth_test3'},async({page})=>{
  455 |         await page.goto('http://49.249.29.4:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/hms/doctor/dashboard.php');
  456 |         let dr_dashboard = new doctorLogin(page)
  457 |         await dr_dashboard.SearchPatient(pdname)
  458 |         await expect(page.getByRole("row").filter({hasText:`${pdname}`}).first()).toBeVisible()
  459 | 
  460 |     })
  461 | })
```