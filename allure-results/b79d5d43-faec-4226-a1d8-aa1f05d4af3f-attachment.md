# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HMS_04.3.spec.js >> HMS E2E TESTING  >> HMS_TS_01 - Register a new patient successfully
- Location: tests\HMS_04.3.spec.js:126:9

# Error details

```
Error: dialog.accept: Protocol error (Page.handleJavaScriptDialog): No dialog is showing
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - heading "TeK Pyramid - Select Your Website" [level=1] [ref=e4]
  - generic [ref=e6]:
    - generic [ref=e7]:
      - generic [ref=e8]: BFSI
      - generic [ref=e10]:
        - generic [ref=e11]:
          - link "Bank Locker Management System" [ref=e13] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Bank_Locker_Management_System
          - generic [ref=e14]:
            - generic [ref=e15]:
              - generic [ref=e16]: "Banker/Admin:"
              - generic [ref=e17]:
                - generic [ref=e18]:
                  - generic [ref=e19]: "User Name: admin"
                  - generic [ref=e20] [cursor=pointer]: 
                - generic [ref=e21]:
                  - generic [ref=e22]: "Password: Test@123"
                  - generic [ref=e23] [cursor=pointer]: 
            - generic [ref=e24]:
              - generic [ref=e25]: "Sub-admin:"
              - generic [ref=e26]:
                - generic [ref=e27]:
                  - generic [ref=e28]: "User Name: test12"
                  - generic [ref=e29] [cursor=pointer]: 
                - generic [ref=e30]:
                  - generic [ref=e31]: "Password: Test@123"
                  - generic [ref=e32] [cursor=pointer]: 
        - generic [ref=e33]:
          - link "IFSC Code Finder Project" [ref=e35] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/IFSC_Code_Finder_Project
          - generic [ref=e37]:
            - generic [ref=e38]: "Admin Panel:"
            - generic [ref=e39]:
              - generic [ref=e40]:
                - generic [ref=e41]: "User Name: admin"
                - generic [ref=e42] [cursor=pointer]: 
              - generic [ref=e43]:
                - generic [ref=e44]: "Password: Test@123"
                - generic [ref=e45] [cursor=pointer]: 
        - generic [ref=e46]:
          - link "Loan Management System" [ref=e48] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Loan_Management_System
          - generic [ref=e50]:
            - generic [ref=e51]: "Admin Panel:"
            - generic [ref=e52]:
              - generic [ref=e53]:
                - generic [ref=e54]: "User Name: admin"
                - generic [ref=e55] [cursor=pointer]: 
              - generic [ref=e56]:
                - generic [ref=e57]: "Password: admin123"
                - generic [ref=e58] [cursor=pointer]: 
    - generic [ref=e59]:
      - generic [ref=e60]: Business Management Build Repository
      - generic [ref=e62]:
        - generic [ref=e63]:
          - link "Bakery Shop Management System" [ref=e65] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Bakery_Shop_Management_System
          - generic [ref=e67]:
            - generic [ref=e68]: "Admin Panel:"
            - generic [ref=e69]:
              - generic [ref=e70]:
                - generic [ref=e71]: "User Name: admin"
                - generic [ref=e72] [cursor=pointer]: 
              - generic [ref=e73]:
                - generic [ref=e74]: "Password: admin123"
                - generic [ref=e75] [cursor=pointer]: 
        - generic [ref=e76]:
          - link "Beauty Parlour Management System" [ref=e78] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Beauty_Parlour_Management_System
          - generic [ref=e80]:
            - generic [ref=e81]: "Admin Panel:"
            - generic [ref=e82]:
              - generic [ref=e83]:
                - generic [ref=e84]: "User Name: admin"
                - generic [ref=e85] [cursor=pointer]: 
              - generic [ref=e86]:
                - generic [ref=e87]: "Password: Test@123"
                - generic [ref=e88] [cursor=pointer]: 
        - generic [ref=e89]:
          - link "Car Washing Management System" [ref=e91] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Car_Washing_Management_System
          - generic [ref=e93]:
            - generic [ref=e94]: "Admin Panel:"
            - generic [ref=e95]:
              - generic [ref=e96]:
                - generic [ref=e97]: "User Name: admin"
                - generic [ref=e98] [cursor=pointer]: 
              - generic [ref=e99]:
                - generic [ref=e100]: "Password: Test@123"
                - generic [ref=e101] [cursor=pointer]: 
        - generic [ref=e102]:
          - link "Cyber Cafe Management System" [ref=e104] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Cyber_Cafe_Management_System
          - generic [ref=e106]:
            - generic [ref=e107]: "Admin Panel:"
            - generic [ref=e108]:
              - generic [ref=e109]:
                - generic [ref=e110]: "User Name: admin"
                - generic [ref=e111] [cursor=pointer]: 
              - generic [ref=e112]:
                - generic [ref=e113]: "Password: admin"
                - generic [ref=e114] [cursor=pointer]: 
        - generic [ref=e115]:
          - link "GYM Management System" [ref=e117] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/GYM_Management_System
          - generic [ref=e118]:
            - generic [ref=e119]:
              - generic [ref=e120]: "Admin:"
              - generic [ref=e121]:
                - generic [ref=e122]:
                  - generic [ref=e123]: "User Name: admin@gmail.com"
                  - generic [ref=e124] [cursor=pointer]: 
                - generic [ref=e125]:
                  - generic [ref=e126]: "Password: Test@12345"
                  - generic [ref=e127] [cursor=pointer]: 
            - generic [ref=e128]:
              - generic [ref=e129]: "Employer:"
              - generic [ref=e130]:
                - generic [ref=e131]:
                  - generic [ref=e132]: "User Name: john@test.com"
                  - generic [ref=e133] [cursor=pointer]: 
                - generic [ref=e134]:
                  - generic [ref=e135]: "Password: Test@123"
                  - generic [ref=e136] [cursor=pointer]: 
        - generic [ref=e137]:
          - link "Men Salon Management System" [ref=e139] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Men_Salon_Management_System
          - generic [ref=e141]:
            - generic [ref=e142]: "Admin Panel:"
            - generic [ref=e143]:
              - generic [ref=e144]:
                - generic [ref=e145]: "User Name: admin"
                - generic [ref=e146] [cursor=pointer]: 
              - generic [ref=e147]:
                - generic [ref=e148]: "Password: Test@123"
                - generic [ref=e149] [cursor=pointer]: 
        - generic [ref=e150]:
          - link "Online Banquet Booking System" [ref=e152] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Online_Banquet_Booking_System
          - generic [ref=e153]:
            - generic [ref=e154]:
              - generic [ref=e155]: "Admin:"
              - generic [ref=e156]:
                - generic [ref=e157]:
                  - generic [ref=e158]: "User Name: admin"
                  - generic [ref=e159] [cursor=pointer]: 
                - generic [ref=e160]:
                  - generic [ref=e161]: "Password: Test@123"
                  - generic [ref=e162] [cursor=pointer]: 
            - generic [ref=e163]:
              - generic [ref=e164]: "User:"
              - generic [ref=e165]:
                - generic [ref=e166]:
                  - generic [ref=e167]: "User Name: akj@gmail.com"
                  - generic [ref=e168] [cursor=pointer]: 
                - generic [ref=e169]:
                  - generic [ref=e170]: "Password: Test@123"
                  - generic [ref=e171] [cursor=pointer]: 
        - generic [ref=e172]:
          - link "Tailor Management Software" [ref=e174] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Tailor_Management_Software
          - generic [ref=e176]:
            - generic [ref=e177]: "Admin Panel:"
            - generic [ref=e178]:
              - generic [ref=e179]:
                - generic [ref=e180]: "User Name: admin"
                - generic [ref=e181] [cursor=pointer]: 
              - generic [ref=e182]:
                - generic [ref=e183]: "Password: admin"
                - generic [ref=e184] [cursor=pointer]: 
    - generic [ref=e185]:
      - generic [ref=e186]: CRM Build Repository
      - generic [ref=e188]:
        - generic [ref=e189]:
          - link "Client Management System" [ref=e191] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Client_Management_System
          - generic [ref=e193]:
            - generic [ref=e194]: "Admin Panel:"
            - generic [ref=e195]:
              - generic [ref=e196]:
                - generic [ref=e197]: "User Name: admin"
                - generic [ref=e198] [cursor=pointer]: 
              - generic [ref=e199]:
                - generic [ref=e200]: "Password: admin"
                - generic [ref=e201] [cursor=pointer]: 
        - generic [ref=e202]:
          - link "Small CRM" [ref=e204] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Small_CRM
          - generic [ref=e206]:
            - generic [ref=e207]: "Admin Panel:"
            - generic [ref=e208]:
              - generic [ref=e209]:
                - generic [ref=e210]: "User Name: admin"
                - generic [ref=e211] [cursor=pointer]: 
              - generic [ref=e212]:
                - generic [ref=e213]: "Password: admin"
                - generic [ref=e214] [cursor=pointer]: 
    - generic [ref=e215]:
      - generic [ref=e216]: ERP Repository
      - generic [ref=e218]:
        - generic [ref=e219]:
          - link "Electronics Parts Sales and Inventory System" [ref=e221] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Electronics_Parts_Sales_and_Inventory_System
          - generic [ref=e222]:
            - generic [ref=e223]:
              - generic [ref=e224]: "Admin:"
              - generic [ref=e225]:
                - generic [ref=e226]:
                  - generic [ref=e227]: "User Name: admin"
                  - generic [ref=e228] [cursor=pointer]: 
                - generic [ref=e229]:
                  - generic [ref=e230]: "Password: admin"
                  - generic [ref=e231] [cursor=pointer]: 
            - generic [ref=e232]:
              - generic [ref=e233]: "User:"
              - generic [ref=e234]:
                - generic [ref=e235]:
                  - generic [ref=e236]: "User Name: test"
                  - generic [ref=e237] [cursor=pointer]: 
                - generic [ref=e238]:
                  - generic [ref=e239]: "Password: test"
                  - generic [ref=e240] [cursor=pointer]: 
        - generic [ref=e241]:
          - link "POS Inventory" [ref=e243] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/POS_Inventory
          - generic [ref=e245]:
            - generic [ref=e246]: "Admin Panel:"
            - generic [ref=e247]:
              - generic [ref=e248]:
                - generic [ref=e249]: "User Name: admin"
                - generic [ref=e250] [cursor=pointer]: 
              - generic [ref=e251]:
                - generic [ref=e252]: "Password: admin"
                - generic [ref=e253] [cursor=pointer]: 
        - generic [ref=e254]:
          - link "Store Grocery and Sales Inventory System" [ref=e256] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Store_Grocery_and_Sales_Inventory_System
          - generic [ref=e257]:
            - generic [ref=e258]:
              - generic [ref=e259]: "Admin:"
              - generic [ref=e260]:
                - generic [ref=e261]:
                  - generic [ref=e262]: "User Name: admin"
                  - generic [ref=e263] [cursor=pointer]: 
                - generic [ref=e264]:
                  - generic [ref=e265]: "Password: admin123"
                  - generic [ref=e266] [cursor=pointer]: 
            - generic [ref=e267]:
              - generic [ref=e268]: "Cashier:"
              - generic [ref=e269]:
                - generic [ref=e270]:
                  - generic [ref=e271]: "User Name: cashier"
                  - generic [ref=e272] [cursor=pointer]: 
                - generic [ref=e273]:
                  - generic [ref=e274]: "Password: 12345"
                  - generic [ref=e275] [cursor=pointer]: 
        - generic [ref=e276]:
          - link "Supply Management System" [ref=e278] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Supply_Management_System
          - generic [ref=e280]:
            - generic [ref=e281]: "Admin Panel:"
            - generic [ref=e282]:
              - generic [ref=e283]:
                - generic [ref=e284]: "User Name: admin"
                - generic [ref=e285] [cursor=pointer]: 
              - generic [ref=e286]:
                - generic [ref=e287]: "Password: admin123"
                - generic [ref=e288] [cursor=pointer]: 
    - generic [ref=e289]:
      - generic [ref=e290]: E-Commerce Build Repository
      - generic [ref=e292]:
        - generic [ref=e293]:
          - link "Online Book Shop System" [ref=e295] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Online_Book_Shop_System
          - generic [ref=e297]:
            - generic [ref=e298]: "Admin Panel:"
            - generic [ref=e299]:
              - generic [ref=e300]:
                - generic [ref=e301]: "User Name: test"
                - generic [ref=e302] [cursor=pointer]: 
              - generic [ref=e303]:
                - generic [ref=e304]: "Password: test"
                - generic [ref=e305] [cursor=pointer]: 
        - generic [ref=e306]:
          - link "Online Shopping Alphaware" [ref=e308] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Online_Shopping_Alphaware
          - generic [ref=e310]:
            - generic [ref=e311]: "Admin Panel:"
            - generic [ref=e312]:
              - generic [ref=e313]:
                - generic [ref=e314]: "User Name: admin@example.com"
                - generic [ref=e315] [cursor=pointer]: 
              - generic [ref=e316]:
                - generic [ref=e317]: "Password: admin"
                - generic [ref=e318] [cursor=pointer]: 
    - generic [ref=e319]:
      - generic [ref=e320]: Education Build Repository
      - generic [ref=e322]:
        - generic [ref=e323]:
          - link "Advance Library System" [ref=e325] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Advance_Library_System
          - generic [ref=e327]:
            - generic [ref=e328]: "Admin Panel:"
            - generic [ref=e329]:
              - generic [ref=e330]:
                - generic [ref=e331]: "User Name: admin"
                - generic [ref=e332] [cursor=pointer]: 
              - generic [ref=e333]:
                - generic [ref=e334]: "Password: admin"
                - generic [ref=e335] [cursor=pointer]: 
        - generic [ref=e336]:
          - link "Advance Student Enrollment System" [ref=e338] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Advance_Student_Enrollment_System
          - generic [ref=e340]:
            - generic [ref=e341]: "Admin Panel:"
            - generic [ref=e342]:
              - generic [ref=e343]:
                - generic [ref=e344]: "User Name: test12345"
                - generic [ref=e345] [cursor=pointer]: 
              - generic [ref=e346]:
                - generic [ref=e347]: "Password: 123456789"
                - generic [ref=e348] [cursor=pointer]: 
        - generic [ref=e349]:
          - link "Agricultural School Management System" [ref=e351] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Agricultural_School_Management_System
          - generic [ref=e353]:
            - generic [ref=e354]: "Admin Panel:"
            - generic [ref=e355]:
              - generic [ref=e356]:
                - generic [ref=e357]: "User Name: admin"
                - generic [ref=e358] [cursor=pointer]: 
              - generic [ref=e359]:
                - generic [ref=e360]: "Password: admin"
                - generic [ref=e361] [cursor=pointer]: 
        - generic [ref=e362]:
          - link "Library Management System" [ref=e364] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Library_Management_System
          - generic [ref=e366]:
            - generic [ref=e367]: "Admin Panel:"
            - generic [ref=e368]:
              - generic [ref=e369]:
                - generic [ref=e370]: "User Name: nurhodelta"
                - generic [ref=e371] [cursor=pointer]: 
              - generic [ref=e372]:
                - generic [ref=e373]: "Password: password"
                - generic [ref=e374] [cursor=pointer]: 
        - generic [ref=e375]:
          - link "Online Class Scheduling and Examination" [ref=e377] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Online_Class_Scheduling_and_Examination
          - generic [ref=e379]:
            - generic [ref=e380]: "Admin Panel:"
            - generic [ref=e381]:
              - generic [ref=e382]:
                - generic [ref=e383]: "User Name: admin"
                - generic [ref=e384] [cursor=pointer]: 
              - generic [ref=e385]:
                - generic [ref=e386]: "Password: admin"
                - generic [ref=e387] [cursor=pointer]: 
        - generic [ref=e388]:
          - link "Online Course Registration" [ref=e390] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Online_Course_Registartion
          - generic [ref=e391]:
            - generic [ref=e392]:
              - generic [ref=e393]: "Admin Panel:"
              - generic [ref=e394]:
                - generic [ref=e395]:
                  - generic [ref=e396]: "User Name: admin"
                  - generic [ref=e397] [cursor=pointer]: 
                - generic [ref=e398]:
                  - generic [ref=e399]: "Password: Test@123"
                  - generic [ref=e400] [cursor=pointer]: 
            - generic [ref=e401]:
              - generic [ref=e402]: "User Panel:"
              - generic [ref=e403]:
                - generic [ref=e404]:
                  - generic [ref=e405]: "User Name: 10806121"
                  - generic [ref=e406] [cursor=pointer]: 
                - generic [ref=e407]:
                  - generic [ref=e408]: "Password: Test@123"
                  - generic [ref=e409] [cursor=pointer]: 
        - generic [ref=e410]:
          - link "Online Examination System" [ref=e412] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Online_Examination_System
          - generic [ref=e413]:
            - generic [ref=e414]:
              - generic [ref=e415]: "Admin Panel 1:"
              - generic [ref=e416]:
                - generic [ref=e417]:
                  - generic [ref=e418]: "User Name: admin@username"
                  - generic [ref=e419] [cursor=pointer]: 
                - generic [ref=e420]:
                  - generic [ref=e421]: "Password: admin@password"
                  - generic [ref=e422] [cursor=pointer]: 
            - generic [ref=e423]:
              - generic [ref=e424]: "User Panel 2:"
              - generic [ref=e425]:
                - generic [ref=e426]:
                  - generic [ref=e427]: "User Name: jane@gmail.com"
                  - generic [ref=e428] [cursor=pointer]: 
                - generic [ref=e429]:
                  - generic [ref=e430]: "Password: jane"
                  - generic [ref=e431] [cursor=pointer]: 
        - generic [ref=e432]:
          - link "Online Learning Management System" [ref=e434] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Online_Learning_Management_System
          - generic [ref=e436]:
            - generic [ref=e437]: "Admin Panel:"
            - generic [ref=e438]:
              - generic [ref=e439]:
                - generic [ref=e440]: "User Name: admin@example.com"
                - generic [ref=e441] [cursor=pointer]: 
              - generic [ref=e442]:
                - generic [ref=e443]: "Password: admin"
                - generic [ref=e444] [cursor=pointer]: 
        - generic [ref=e445]:
          - link "Online Library Management System" [ref=e447] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Online_Management_Library_System
          - generic [ref=e449]:
            - generic [ref=e450]: "Admin Panel:"
            - generic [ref=e451]:
              - generic [ref=e452]:
                - generic [ref=e453]: "User Name: admin"
                - generic [ref=e454] [cursor=pointer]: 
              - generic [ref=e455]:
                - generic [ref=e456]: "Password: Test@123"
                - generic [ref=e457] [cursor=pointer]: 
        - generic [ref=e458]:
          - link "Online School Fees Payment System" [ref=e460] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Online_School_Fees_Payment_System
          - generic [ref=e462]:
            - generic [ref=e463]: "Admin Panel:"
            - generic [ref=e464]:
              - generic [ref=e465]:
                - generic [ref=e466]: "User Name: admin"
                - generic [ref=e467] [cursor=pointer]: 
              - generic [ref=e468]:
                - generic [ref=e469]: "Password: admin"
                - generic [ref=e470] [cursor=pointer]: 
        - generic [ref=e471]:
          - link "Online School Management System" [ref=e473] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Online_School_Management_System
          - generic [ref=e475]:
            - generic [ref=e476]: "Admin Panel:"
            - generic [ref=e477]:
              - generic [ref=e478]:
                - generic [ref=e479]: "User Name: admin"
                - generic [ref=e480] [cursor=pointer]: 
              - generic [ref=e481]:
                - generic [ref=e482]: "Password: admin"
                - generic [ref=e483] [cursor=pointer]: 
        - generic [ref=e484]:
          - link "Online Student Result System" [ref=e486] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Online_Student_Result_System
          - generic [ref=e488]:
            - generic [ref=e489]: "Admin Panel:"
            - generic [ref=e490]:
              - generic [ref=e491]:
                - generic [ref=e492]: "User Name: admin"
                - generic [ref=e493] [cursor=pointer]: 
              - generic [ref=e494]:
                - generic [ref=e495]: "Password: admin123"
                - generic [ref=e496] [cursor=pointer]: 
        - generic [ref=e497]:
          - link "Pre School Enrollment System" [ref=e499] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Pre_School_Enrollment_System
          - generic [ref=e501]:
            - generic [ref=e502]: "Admin Panel:"
            - generic [ref=e503]:
              - generic [ref=e504]:
                - generic [ref=e505]: "User Name: admin"
                - generic [ref=e506] [cursor=pointer]: 
              - generic [ref=e507]:
                - generic [ref=e508]: "Password: Test@123"
                - generic [ref=e509] [cursor=pointer]: 
        - generic [ref=e510]:
          - link "School Faculty System" [ref=e512] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/School_Faculty_System
          - generic [ref=e514]:
            - generic [ref=e515]: "Admin Panel:"
            - generic [ref=e516]:
              - generic [ref=e517]:
                - generic [ref=e518]: "User Name: admin"
                - generic [ref=e519] [cursor=pointer]: 
              - generic [ref=e520]:
                - generic [ref=e521]: "Password: admin123"
                - generic [ref=e522] [cursor=pointer]: 
        - generic [ref=e523]:
          - link "School Fees Payment Management System" [ref=e525] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/School_Fees_Payment_Management_System
          - generic [ref=e527]:
            - generic [ref=e528]: "Admin Panel:"
            - generic [ref=e529]:
              - generic [ref=e530]:
                - generic [ref=e531]: "User Name: admin"
                - generic [ref=e532] [cursor=pointer]: 
              - generic [ref=e533]:
                - generic [ref=e534]: "Password: admin123"
                - generic [ref=e535] [cursor=pointer]: 
        - generic [ref=e536]:
          - link "School Library System" [ref=e538] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/School_Library_System
          - generic [ref=e540]:
            - generic [ref=e541]: "Admin Panel:"
            - generic [ref=e542]:
              - generic [ref=e543]:
                - generic [ref=e544]: "User Name: admin"
                - generic [ref=e545] [cursor=pointer]: 
              - generic [ref=e546]:
                - generic [ref=e547]: "Password: admin"
                - generic [ref=e548] [cursor=pointer]: 
        - generic [ref=e549]:
          - link "Simple Attendance Record System" [ref=e551] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Simple_Attendance_Record_System
          - generic [ref=e553]:
            - generic [ref=e554]: "Admin Panel:"
            - generic [ref=e555]:
              - generic [ref=e556]:
                - generic [ref=e557]: "User Name: admin"
                - generic [ref=e558] [cursor=pointer]: 
              - generic [ref=e559]:
                - generic [ref=e560]: "Password: admin"
                - generic [ref=e561] [cursor=pointer]: 
        - generic [ref=e562]:
          - link "Simple Hostel Management System" [ref=e564] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Simple_Hostel_Management_System
          - generic [ref=e566]:
            - generic [ref=e567]: "Admin Panel:"
            - generic [ref=e568]:
              - generic [ref=e569]:
                - generic [ref=e570]: "User Name: admin"
                - generic [ref=e571] [cursor=pointer]: 
              - generic [ref=e572]:
                - generic [ref=e573]: "Password: Test@1234"
                - generic [ref=e574] [cursor=pointer]: 
        - generic [ref=e575]:
          - link "Student Grading System" [ref=e577] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Student_Grading_System
          - generic [ref=e579]:
            - generic [ref=e580]: "Admin Panel:"
            - generic [ref=e581]:
              - generic [ref=e582]:
                - generic [ref=e583]: "User Name: admin"
                - generic [ref=e584] [cursor=pointer]: 
              - generic [ref=e585]:
                - generic [ref=e586]: "Password: admin123"
                - generic [ref=e587] [cursor=pointer]: 
        - generic [ref=e588]:
          - link "Student Result Management System" [ref=e590] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Student_Result_Management_System
          - generic [ref=e592]:
            - generic [ref=e593]: "Admin Panel:"
            - generic [ref=e594]:
              - generic [ref=e595]:
                - generic [ref=e596]: "User Name: admin"
                - generic [ref=e597] [cursor=pointer]: 
              - generic [ref=e598]:
                - generic [ref=e599]: "Password: admin"
                - generic [ref=e600] [cursor=pointer]: 
        - generic [ref=e601]:
          - link "Student Scheduling System" [ref=e603] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Student_Scheduling_System
          - generic [ref=e605]:
            - generic [ref=e606]: "Admin Panel:"
            - generic [ref=e607]:
              - generic [ref=e608]:
                - generic [ref=e609]: "User Name: admin@gmail.com"
                - generic [ref=e610] [cursor=pointer]: 
              - generic [ref=e611]:
                - generic [ref=e612]: "Password: admin"
                - generic [ref=e613] [cursor=pointer]: 
        - generic [ref=e614]:
          - link "Student Study Center Management System" [ref=e616] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Student_Study_Center_Management_System
          - generic [ref=e618]:
            - generic [ref=e619]: "Admin Panel:"
            - generic [ref=e620]:
              - generic [ref=e621]:
                - generic [ref=e622]: "User Name: admin"
                - generic [ref=e623] [cursor=pointer]: 
              - generic [ref=e624]:
                - generic [ref=e625]: "Password: Test@123"
                - generic [ref=e626] [cursor=pointer]: 
        - generic [ref=e627]:
          - link "Teachers Record Management System" [ref=e629] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Teachers_Record_Management_System
          - generic [ref=e631]:
            - generic [ref=e632]: "Admin Panel:"
            - generic [ref=e633]:
              - generic [ref=e634]:
                - generic [ref=e635]: "User Name: admin"
                - generic [ref=e636] [cursor=pointer]: 
              - generic [ref=e637]:
                - generic [ref=e638]: "Password: Test@123"
                - generic [ref=e639] [cursor=pointer]: 
    - generic [ref=e640]:
      - generic [ref=e641]: Facilities Management Repository
      - generic [ref=e643]:
        - generic [ref=e644]:
          - link "Apartment Visitor Management System" [ref=e646] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Apartment_Visitor_Management_System
          - generic [ref=e648]:
            - generic [ref=e649]: "Admin Panel:"
            - generic [ref=e650]:
              - generic [ref=e651]:
                - generic [ref=e652]: "User Name: admin"
                - generic [ref=e653] [cursor=pointer]: 
              - generic [ref=e654]:
                - generic [ref=e655]: "Password: Test@123"
                - generic [ref=e656] [cursor=pointer]: 
        - generic [ref=e657]:
          - link "Curfew Pass Management System" [ref=e659] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Curfew_Pass_Management_System
          - generic [ref=e661]:
            - generic [ref=e662]: "Admin:"
            - generic [ref=e663]:
              - generic [ref=e664]:
                - generic [ref=e665]: "User Name: admin"
                - generic [ref=e666] [cursor=pointer]: 
              - generic [ref=e667]:
                - generic [ref=e668]: "Password: Test@123"
                - generic [ref=e669] [cursor=pointer]: 
              - generic [ref=e670]:
                - generic [ref=e671]: "Pass ID: 884595667"
                - generic [ref=e672] [cursor=pointer]: 
        - generic [ref=e673]:
          - link "Online Security Guards Hiring System" [ref=e675] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Online_Security_Guards_Hiring_System
          - generic [ref=e677]:
            - generic [ref=e678]: "Admin Panel:"
            - generic [ref=e679]:
              - generic [ref=e680]:
                - generic [ref=e681]: "User Name: admin"
                - generic [ref=e682] [cursor=pointer]: 
              - generic [ref=e683]:
                - generic [ref=e684]: "Password: Test@123"
                - generic [ref=e685] [cursor=pointer]: 
        - generic [ref=e686]:
          - link "Park Ticketing Management System" [ref=e688] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Park_Ticketing_Management_System
          - generic [ref=e690]:
            - generic [ref=e691]: "Admin Panel:"
            - generic [ref=e692]:
              - generic [ref=e693]:
                - generic [ref=e694]: "User Name: admin"
                - generic [ref=e695] [cursor=pointer]: 
              - generic [ref=e696]:
                - generic [ref=e697]: "Password: Test@123"
                - generic [ref=e698] [cursor=pointer]: 
        - generic [ref=e699]:
          - link "Simple Membership System" [ref=e701] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Simple_Membership_System
          - generic [ref=e703]:
            - generic [ref=e704]: "Admin Panel:"
            - generic [ref=e705]:
              - generic [ref=e706]:
                - generic [ref=e707]: "User Name: admin"
                - generic [ref=e708] [cursor=pointer]: 
              - generic [ref=e709]:
                - generic [ref=e710]: "Password: admin"
                - generic [ref=e711] [cursor=pointer]: 
        - generic [ref=e712]:
          - link "User Management System" [ref=e714] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/User_Management_System
          - generic [ref=e715]:
            - generic [ref=e716]:
              - generic [ref=e717]: "User:"
              - generic [ref=e718]:
                - generic [ref=e719]:
                  - generic [ref=e720]: "User Name: anujk@gmail.com"
                  - generic [ref=e721] [cursor=pointer]: 
                - generic [ref=e722]:
                  - generic [ref=e723]: "Password: Test@123"
                  - generic [ref=e724] [cursor=pointer]: 
            - generic [ref=e725]:
              - generic [ref=e726]: "Admin:"
              - generic [ref=e727]:
                - generic [ref=e728]:
                  - generic [ref=e729]: "User Name: admin"
                  - generic [ref=e730] [cursor=pointer]: 
                - generic [ref=e731]:
                  - generic [ref=e732]: "Password: Test@123"
                  - generic [ref=e733] [cursor=pointer]: 
        - generic [ref=e734]:
          - link "User Registration & Login and User Management System" [ref=e736] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/User_Registration_&_Login_and_User_Management_System/
          - generic [ref=e737]:
            - generic [ref=e738]:
              - generic [ref=e739]: "Admin:"
              - generic [ref=e740]:
                - generic [ref=e741]:
                  - generic [ref=e742]: "User Name: admin"
                  - generic [ref=e743] [cursor=pointer]: 
                - generic [ref=e744]:
                  - generic [ref=e745]: "Password: Test@12345"
                  - generic [ref=e746] [cursor=pointer]: 
            - generic [ref=e747]:
              - generic [ref=e748]: "User:"
              - generic [ref=e749]:
                - generic [ref=e750]:
                  - generic [ref=e751]: "User Name: phpgurukulteam@gmail.com"
                  - generic [ref=e752] [cursor=pointer]: 
                - generic [ref=e753]:
                  - generic [ref=e754]: "Password: Test@123"
                  - generic [ref=e755] [cursor=pointer]: 
        - generic [ref=e756]:
          - link "Vehicle Parking Management System" [ref=e758] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Vehicle_Parking_Management_System
          - generic [ref=e759]:
            - generic [ref=e760]:
              - generic [ref=e761]: "Admin:"
              - generic [ref=e762]:
                - generic [ref=e763]:
                  - generic [ref=e764]: "User Name: admin"
                  - generic [ref=e765] [cursor=pointer]: 
                - generic [ref=e766]:
                  - generic [ref=e767]: "Password: Test@123"
                  - generic [ref=e768] [cursor=pointer]: 
            - generic [ref=e769]:
              - generic [ref=e770]: "User:"
              - generic [ref=e771]:
                - generic [ref=e772]:
                  - generic [ref=e773]: "User Name: 1234567890"
                  - generic [ref=e774] [cursor=pointer]: 
                - generic [ref=e775]:
                  - generic [ref=e776]: "Password: Test@123"
                  - generic [ref=e777] [cursor=pointer]: 
    - generic [ref=e778]: Financial Management ServiceÂ Build Repository
    - generic [ref=e781]:
      - generic [ref=e782]: Food Management Build Repository
      - generic [ref=e784]:
        - generic [ref=e785]:
          - link "Dairy Farm Shop Management System" [ref=e787] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Dairy_Farm_Shop_Management_System
          - generic [ref=e789]:
            - generic [ref=e790]: "Admin Panel:"
            - generic [ref=e791]:
              - generic [ref=e792]:
                - generic [ref=e793]: "User Name: admin"
                - generic [ref=e794] [cursor=pointer]: 
              - generic [ref=e795]:
                - generic [ref=e796]: "Password: Test@123"
                - generic [ref=e797] [cursor=pointer]: 
        - generic [ref=e798]:
          - link "e-Diary Management System" [ref=e800] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/e-Diary_Management_System
          - generic [ref=e802]:
            - generic [ref=e803]: "Admin Panel:"
            - generic [ref=e804]:
              - generic [ref=e805]:
                - generic [ref=e806]: "User Name: Â johndoe@gmail.comÂ or 1221121212"
                - generic [ref=e807] [cursor=pointer]: 
              - generic [ref=e808]:
                - generic [ref=e809]: "Password: Test@123"
                - generic [ref=e810] [cursor=pointer]: 
    - generic [ref=e811]:
      - generic [ref=e812]: HealthCare Build Repository
      - generic [ref=e814]:
        - generic [ref=e815]:
          - link "Blood Bank System" [ref=e817] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Blood_Bank_System
          - generic [ref=e819]:
            - generic [ref=e820]: "Admin Panel:"
            - generic [ref=e821]:
              - generic [ref=e822]:
                - generic [ref=e823]: "User Name: admin"
                - generic [ref=e824] [cursor=pointer]: 
              - generic [ref=e825]:
                - generic [ref=e826]: "Password: admin123"
                - generic [ref=e827] [cursor=pointer]: 
        - generic [ref=e828]:
          - link "BP Monitoring Management System" [ref=e830] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/BP_Monitoring_Management_System
          - generic [ref=e832]:
            - generic [ref=e833]: "Admin Panel:"
            - generic [ref=e834]:
              - generic [ref=e835]:
                - generic [ref=e836]: "User Name: john@test.com"
                - generic [ref=e837] [cursor=pointer]: 
              - generic [ref=e838]:
                - generic [ref=e839]: "Password: Test@123"
                - generic [ref=e840] [cursor=pointer]: 
        - generic [ref=e841]:
          - link "COVID19 Testing Management System" [ref=e843] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/COVID19_Testing_Management_System
          - generic [ref=e845]:
            - generic [ref=e846]: "Admin Panel:"
            - generic [ref=e847]:
              - generic [ref=e848]:
                - generic [ref=e849]: "User Name: admin"
                - generic [ref=e850] [cursor=pointer]: 
              - generic [ref=e851]:
                - generic [ref=e852]: "Password: Test@123"
                - generic [ref=e853] [cursor=pointer]: 
        - generic [ref=e854]:
          - link "Doctor Appointment Management System" [ref=e856] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Doctor_Appointment_Management_System
          - generic [ref=e858]:
            - generic [ref=e859]: "Admin Panel:"
            - generic [ref=e860]:
              - generic [ref=e861]:
                - generic [ref=e862]: "User Name: anu@gmail.com"
                - generic [ref=e863] [cursor=pointer]: 
              - generic [ref=e864]:
                - generic [ref=e865]: "Password: Test@123"
                - generic [ref=e866] [cursor=pointer]: 
        - generic [ref=e867]:
          - link "Doctor Appointment System" [ref=e869] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Doctor_Appointment_System
          - generic [ref=e871]:
            - generic [ref=e872]: "Admin Panel:"
            - generic [ref=e873]:
              - generic [ref=e874]:
                - generic [ref=e875]: "User Name: admin"
                - generic [ref=e876] [cursor=pointer]: 
              - generic [ref=e877]:
                - generic [ref=e878]: "Password: admin"
                - generic [ref=e879] [cursor=pointer]: 
        - generic [ref=e880]:
          - link "Health Care Hospital System" [ref=e882] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Health_Care_Hospital_System
          - generic [ref=e883]:
            - generic [ref=e884]:
              - generic [ref=e885]: "SUPERADMIN:"
              - generic [ref=e886]:
                - generic [ref=e887]:
                  - generic [ref=e888]: "User Name: superadmin"
                  - generic [ref=e889] [cursor=pointer]: 
                - generic [ref=e890]:
                  - generic [ref=e891]: "Password: 123"
                  - generic [ref=e892] [cursor=pointer]: 
            - generic [ref=e893]:
              - generic [ref=e894]: "Admin:"
              - generic [ref=e895]:
                - generic [ref=e896]:
                  - generic [ref=e897]: "User Name: basicadmin"
                  - generic [ref=e898] [cursor=pointer]: 
                - generic [ref=e899]:
                  - generic [ref=e900]: "Password: 123"
                  - generic [ref=e901] [cursor=pointer]: 
        - generic [ref=e902]:
          - link "Hospital Doctor Patient Management System" [active] [ref=e904] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System
          - generic [ref=e905]:
            - generic [ref=e906]:
              - generic [ref=e907]: ADMIN
              - generic [ref=e908]:
                - generic [ref=e909]:
                  - generic [ref=e910]: "User Name: admin"
                  - generic [ref=e911] [cursor=pointer]: 
                - generic [ref=e912]:
                  - generic [ref=e913]: "Password: Test@12345"
                  - generic [ref=e914] [cursor=pointer]: 
            - generic [ref=e915]:
              - generic [ref=e916]: "Doctor:"
              - generic [ref=e917]:
                - generic [ref=e918]:
                  - generic [ref=e919]: "User Name: anujk123@test.com"
                  - generic [ref=e920] [cursor=pointer]: 
                - generic [ref=e921]:
                  - generic [ref=e922]: "Password: Test@123"
                  - generic [ref=e923] [cursor=pointer]: 
            - generic [ref=e924]:
              - generic [ref=e925]: "Patient:"
              - generic [ref=e926]:
                - generic [ref=e927]:
                  - generic [ref=e928]: "User Name: johndoe12@test.com"
                  - generic [ref=e929] [cursor=pointer]: 
                - generic [ref=e930]:
                  - generic [ref=e931]: "Password: Test@123"
                  - generic [ref=e932] [cursor=pointer]: 
        - generic [ref=e933]:
          - link "Online Doctors Management System" [ref=e935] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Online_Doctors_Management_System
          - generic [ref=e936]:
            - generic [ref=e937]:
              - generic [ref=e938]: "Admin Panel:"
              - generic [ref=e939]:
                - generic [ref=e940]:
                  - generic [ref=e941]: "User Name: admin"
                  - generic [ref=e942] [cursor=pointer]: 
                - generic [ref=e943]:
                  - generic [ref=e944]: "Password: admin123"
                  - generic [ref=e945] [cursor=pointer]: 
            - generic [ref=e946]:
              - generic [ref=e947]: "User Panel:"
              - generic [ref=e948]:
                - generic [ref=e949]:
                  - generic [ref=e950]: "User Name: admin1@example.com"
                  - generic [ref=e951] [cursor=pointer]: 
                - generic [ref=e952]:
                  - generic [ref=e953]: "Password: admin"
                  - generic [ref=e954] [cursor=pointer]: 
    - generic [ref=e955]:
      - generic [ref=e956]: Human Resource Management Build Repository
      - generic [ref=e958]:
        - generic [ref=e959]:
          - link "Employee Management System" [ref=e961] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Employee_Management_System/
          - generic [ref=e962]:
            - generic [ref=e963]:
              - generic [ref=e964]: "Admin:"
              - generic [ref=e965]:
                - generic [ref=e966]:
                  - generic [ref=e967]: "User Name: admin@gmail.com"
                  - generic [ref=e968] [cursor=pointer]: 
                - generic [ref=e969]:
                  - generic [ref=e970]: "Password: admin"
                  - generic [ref=e971] [cursor=pointer]: 
            - generic [ref=e972]:
              - generic [ref=e973]: "User:"
              - generic [ref=e974]:
                - generic [ref=e975]:
                  - generic [ref=e976]: "User Name: john@gmail.com"
                  - generic [ref=e977] [cursor=pointer]: 
                - generic [ref=e978]:
                  - generic [ref=e979]: "Password: 1234"
                  - generic [ref=e980] [cursor=pointer]: 
        - generic [ref=e981]:
          - link "Employee Record Management System" [ref=e983] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Employee_Record_Management_System
          - generic [ref=e984]:
            - generic [ref=e985]:
              - generic [ref=e986]: "Admin:"
              - generic [ref=e987]:
                - generic [ref=e988]:
                  - generic [ref=e989]: "User Name: admin"
                  - generic [ref=e990] [cursor=pointer]: 
                - generic [ref=e991]:
                  - generic [ref=e992]: "Password: Test@123"
                  - generic [ref=e993] [cursor=pointer]: 
            - generic [ref=e994]:
              - generic [ref=e995]: "User:"
              - generic [ref=e996]:
                - generic [ref=e997]:
                  - generic [ref=e998]: "User Name: testuser@gmail.com"
                  - generic [ref=e999] [cursor=pointer]: 
                - generic [ref=e1000]:
                  - generic [ref=e1001]: "Password: Test@123"
                  - generic [ref=e1002] [cursor=pointer]: 
        - generic [ref=e1003]:
          - link "Maid Hiring Management System" [ref=e1005] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Maid_Hiring_Management_System
          - generic [ref=e1007]:
            - generic [ref=e1008]: "Admin Panel:"
            - generic [ref=e1009]:
              - generic [ref=e1010]:
                - generic [ref=e1011]: "User Name: admin"
                - generic [ref=e1012] [cursor=pointer]: 
              - generic [ref=e1013]:
                - generic [ref=e1014]: "Password: Test@123"
                - generic [ref=e1015] [cursor=pointer]: 
        - generic [ref=e1016]:
          - link "Payroll and Attendance system" [ref=e1018] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Payroll_and_Attendance_system
          - generic [ref=e1020]:
            - generic [ref=e1021]: "Admin Panel:"
            - generic [ref=e1022]:
              - generic [ref=e1023]:
                - generic [ref=e1024]: "User Name: admin"
                - generic [ref=e1025] [cursor=pointer]: 
              - generic [ref=e1026]:
                - generic [ref=e1027]: "Password: password"
                - generic [ref=e1028] [cursor=pointer]: 
        - generic [ref=e1029]:
          - link "Payroll Management System" [ref=e1031] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Payroll_Management_System
          - generic [ref=e1033]:
            - generic [ref=e1034]: "Admin Panel:"
            - generic [ref=e1035]:
              - generic [ref=e1036]:
                - generic [ref=e1037]: "User Name: admin"
                - generic [ref=e1038] [cursor=pointer]: 
              - generic [ref=e1039]:
                - generic [ref=e1040]: "Password: admin123"
                - generic [ref=e1041] [cursor=pointer]: 
        - generic [ref=e1042]:
          - link "Simple Employee Leave Management System" [ref=e1044] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Simple_Employee_Leave_Management_System
          - generic [ref=e1046]:
            - generic [ref=e1047]: "User/Employee:"
            - generic [ref=e1048]:
              - generic [ref=e1049]:
                - generic [ref=e1050]: "User Name: johnny@gmail.com"
                - generic [ref=e1051] [cursor=pointer]: 
              - generic [ref=e1052]:
                - generic [ref=e1053]: "Password: Test@123"
                - generic [ref=e1054] [cursor=pointer]: 
              - generic [ref=e1055]:
                - generic [ref=e1056]: "Emp ID: EMP10806121"
                - generic [ref=e1057] [cursor=pointer]: 
    - generic [ref=e1058]:
      - generic [ref=e1059]: Entertainment ServiceÂ Build Repository
      - generic [ref=e1061]:
        - generic [ref=e1062]:
          - link "Art Gallery Management System" [ref=e1064] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Art_Gallery_Management_System
          - generic [ref=e1066]:
            - generic [ref=e1067]: "User/Employee:"
            - generic [ref=e1068]:
              - generic [ref=e1069]:
                - generic [ref=e1070]: "User Name: admin"
                - generic [ref=e1071] [cursor=pointer]: 
              - generic [ref=e1072]:
                - generic [ref=e1073]: "Password: Test@123"
                - generic [ref=e1074] [cursor=pointer]: 
        - generic [ref=e1075]:
          - link "Local Services Search Engine Management System" [ref=e1077] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Local_Services_Search_Engine_Management_System
          - generic [ref=e1079]:
            - generic [ref=e1080]: "User/Employee:"
            - generic [ref=e1081]:
              - generic [ref=e1082]:
                - generic [ref=e1083]: "User Name: admin"
                - generic [ref=e1084] [cursor=pointer]: 
              - generic [ref=e1085]:
                - generic [ref=e1086]: "Password: Test@123"
                - generic [ref=e1087] [cursor=pointer]: 
        - generic [ref=e1088]:
          - link "News Portal Project" [ref=e1090] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/News_portal_Project
          - generic [ref=e1091]:
            - generic [ref=e1092]:
              - generic [ref=e1093]: "Admin:"
              - generic [ref=e1094]:
                - generic [ref=e1095]:
                  - generic [ref=e1096]: "Username: admin"
                  - generic [ref=e1097] [cursor=pointer]: 
                - generic [ref=e1098]:
                  - generic [ref=e1099]: "Password: Test@123"
                  - generic [ref=e1100] [cursor=pointer]: 
            - generic [ref=e1101]:
              - generic [ref=e1102]: "Sub-admin:"
              - generic [ref=e1103]:
                - generic [ref=e1104]:
                  - generic [ref=e1105]: "Username: subadmin"
                  - generic [ref=e1106] [cursor=pointer]: 
                - generic [ref=e1107]:
                  - generic [ref=e1108]: "Password: Test@123"
                  - generic [ref=e1109] [cursor=pointer]: 
        - generic [ref=e1110]:
          - link "Online DJ Booking Management System" [ref=e1112] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Online_DJ_Booking_Management_System
          - generic [ref=e1114]:
            - generic [ref=e1115]: "User/Employee:"
            - generic [ref=e1116]:
              - generic [ref=e1117]:
                - generic [ref=e1118]: "User Name: admin"
                - generic [ref=e1119] [cursor=pointer]: 
              - generic [ref=e1120]:
                - generic [ref=e1121]: "Password: Test@123"
                - generic [ref=e1122] [cursor=pointer]: 
    - generic [ref=e1123]:
      - generic [ref=e1124]: Administration ServiceÂ Build Repository
      - generic [ref=e1126]:
        - generic [ref=e1127]:
          - link "Automated Voting" [ref=e1129] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Automated_Voting
          - generic [ref=e1131]:
            - generic [ref=e1132]: "User/Employee:"
            - generic [ref=e1133]:
              - generic [ref=e1134]:
                - generic [ref=e1135]: "User Name: admin"
                - generic [ref=e1136] [cursor=pointer]: 
              - generic [ref=e1137]:
                - generic [ref=e1138]: "Password: admin"
                - generic [ref=e1139] [cursor=pointer]: 
        - generic [ref=e1140]:
          - link "Company Visitors Management System" [ref=e1142] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Company_Visitors_Management_System
          - generic [ref=e1144]:
            - generic [ref=e1145]: "User/Employee:"
            - generic [ref=e1146]:
              - generic [ref=e1147]:
                - generic [ref=e1148]: "User Name: admin"
                - generic [ref=e1149] [cursor=pointer]: 
              - generic [ref=e1150]:
                - generic [ref=e1151]: "Password: Test@123"
                - generic [ref=e1152] [cursor=pointer]: 
        - generic [ref=e1153]:
          - link "Event Management System" [ref=e1155] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Event_Management_System
          - generic [ref=e1157]:
            - generic [ref=e1158]: "User/Employee:"
            - generic [ref=e1159]:
              - generic [ref=e1160]:
                - generic [ref=e1161]: "User Name: admin"
                - generic [ref=e1162] [cursor=pointer]: 
              - generic [ref=e1163]:
                - generic [ref=e1164]: "Password: admin123"
                - generic [ref=e1165] [cursor=pointer]: 
        - generic [ref=e1166]:
          - link "Directory Management System" [ref=e1168] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Directory_Management_System
          - generic [ref=e1170]:
            - generic [ref=e1171]: "User/Employee:"
            - generic [ref=e1172]:
              - generic [ref=e1173]:
                - generic [ref=e1174]: "User Name: admin"
                - generic [ref=e1175] [cursor=pointer]: 
              - generic [ref=e1176]:
                - generic [ref=e1177]: "Password: admin"
                - generic [ref=e1178] [cursor=pointer]: 
        - generic [ref=e1179]:
          - link "Online Polling System" [ref=e1181] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Online_Polling_System
          - generic [ref=e1183]:
            - generic [ref=e1184]: "User/Employee:"
            - generic [ref=e1185]:
              - generic [ref=e1186]:
                - generic [ref=e1187]: "User Name: admin@gmail.com"
                - generic [ref=e1188] [cursor=pointer]: 
              - generic [ref=e1189]:
                - generic [ref=e1190]: "Password: admin"
                - generic [ref=e1191] [cursor=pointer]: 
        - generic [ref=e1192]:
          - link "Online Voting Management System" [ref=e1194] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Online_Voting_Management_System
          - generic [ref=e1196]:
            - generic [ref=e1197]: "User/Employee:"
            - generic [ref=e1198]:
              - generic [ref=e1199]:
                - generic [ref=e1200]: "User Name: Nurhodelta"
                - generic [ref=e1201] [cursor=pointer]: 
              - generic [ref=e1202]:
                - generic [ref=e1203]: "Password: password"
                - generic [ref=e1204] [cursor=pointer]: 
        - generic [ref=e1205]:
          - link "Voting Management System" [ref=e1207] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Voting_Management_System
          - generic [ref=e1209]:
            - generic [ref=e1210]: "User/Employee:"
            - generic [ref=e1211]:
              - generic [ref=e1212]:
                - generic [ref=e1213]: "User Name: admin"
                - generic [ref=e1214] [cursor=pointer]: 
              - generic [ref=e1215]:
                - generic [ref=e1216]: "Password: admin123"
                - generic [ref=e1217] [cursor=pointer]: 
    - generic [ref=e1218]:
      - generic [ref=e1219]: Hospitality ServiceÂ Build Repository
      - generic [ref=e1221]:
        - generic [ref=e1222]:
          - link "Hotel Booking Management System" [ref=e1224] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Hotel_Booking_Management_System
          - generic [ref=e1226]:
            - generic [ref=e1227]: "User/Employee:"
            - generic [ref=e1228]:
              - generic [ref=e1229]:
                - generic [ref=e1230]: "User Name: admin"
                - generic [ref=e1231] [cursor=pointer]: 
              - generic [ref=e1232]:
                - generic [ref=e1233]: "Password: admin123"
                - generic [ref=e1234] [cursor=pointer]: 
        - generic [ref=e1235]:
          - link "Old Age Home Management System" [ref=e1237] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Old_Age_Home_Management_System
          - generic [ref=e1239]:
            - generic [ref=e1240]: "User/Employee:"
            - generic [ref=e1241]:
              - generic [ref=e1242]:
                - generic [ref=e1243]: "User Name: admin"
                - generic [ref=e1244] [cursor=pointer]: 
              - generic [ref=e1245]:
                - generic [ref=e1246]: "Password: Test@123"
                - generic [ref=e1247] [cursor=pointer]: 
        - generic [ref=e1248]:
          - link "Online Flight Booking Management System" [ref=e1250] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Online_Flight_Booking_Management_System
          - generic [ref=e1252]:
            - generic [ref=e1253]: "User/Employee:"
            - generic [ref=e1254]:
              - generic [ref=e1255]:
                - generic [ref=e1256]: "User Name: admin"
                - generic [ref=e1257] [cursor=pointer]: 
              - generic [ref=e1258]:
                - generic [ref=e1259]: "Password: admin123"
                - generic [ref=e1260] [cursor=pointer]: 
        - generic [ref=e1261]:
          - link "Online Hotel Reservation System" [ref=e1263] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Online_Hotel_Reservation_System
          - generic [ref=e1265]:
            - generic [ref=e1266]: "User/Employee:"
            - generic [ref=e1267]:
              - generic [ref=e1268]:
                - generic [ref=e1269]: "User Name: admin"
                - generic [ref=e1270] [cursor=pointer]: 
              - generic [ref=e1271]:
                - generic [ref=e1272]: "Password: admin"
                - generic [ref=e1273] [cursor=pointer]: 
    - generic [ref=e1274]:
      - generic [ref=e1275]: Real Estate ServiceÂ Build Repository
      - generic [ref=e1277]:
        - generic [ref=e1278]:
          - link "House Rental Management System" [ref=e1280] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/House_Rental_Management_System
          - generic [ref=e1282]:
            - generic [ref=e1283]: "User/Employee:"
            - generic [ref=e1284]:
              - generic [ref=e1285]:
                - generic [ref=e1286]: "User Name: admin"
                - generic [ref=e1287] [cursor=pointer]: 
              - generic [ref=e1288]:
                - generic [ref=e1289]: "Password: admin123"
                - generic [ref=e1290] [cursor=pointer]: 
        - generic [ref=e1291]:
          - link "Lot Reservation System" [ref=e1293] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Lot_Reservation_System
          - generic [ref=e1295]:
            - generic [ref=e1296]: "User/Employee:"
            - generic [ref=e1297]:
              - generic [ref=e1298]:
                - generic [ref=e1299]: "User Name: admin"
                - generic [ref=e1300] [cursor=pointer]: 
              - generic [ref=e1301]:
                - generic [ref=e1302]: "Password: admin123"
                - generic [ref=e1303] [cursor=pointer]: 
    - generic [ref=e1304]:
      - generic [ref=e1305]: Complaints & Legal ServiceÂ Build Repository
      - generic [ref=e1308]:
        - link "Crime Complaint Management System" [ref=e1310] [cursor=pointer]:
          - /url: http://49.249.29.4:8081/TestServer/Build/Crime_Complaint_Management_System
        - generic [ref=e1312]:
          - generic [ref=e1313]: "User/Employee:"
          - generic [ref=e1314]:
            - generic [ref=e1315]:
              - generic [ref=e1316]: "User Name: admin"
              - generic [ref=e1317] [cursor=pointer]: 
            - generic [ref=e1318]:
              - generic [ref=e1319]: "Password: admin123"
              - generic [ref=e1320] [cursor=pointer]: 
    - generic [ref=e1321]:
      - generic [ref=e1322]: Public Service Build Repository
      - generic [ref=e1324]:
        - generic [ref=e1325]:
          - link "Online Farm Weather Updates" [ref=e1327] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Online_Farm_Weather_Updates
          - generic [ref=e1329]:
            - generic [ref=e1330]: "User/Employee:"
            - generic [ref=e1331]:
              - generic [ref=e1332]:
                - generic [ref=e1333]: "User Name: admin"
                - generic [ref=e1334] [cursor=pointer]: 
              - generic [ref=e1335]:
                - generic [ref=e1336]: "Password: 12345"
                - generic [ref=e1337] [cursor=pointer]: 
        - generic [ref=e1338]:
          - link "Online Fire Reporting System" [ref=e1340] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Online_Fire_Reporting_System
          - generic [ref=e1342]:
            - generic [ref=e1343]: "User/Employee:"
            - generic [ref=e1344]:
              - generic [ref=e1345]:
                - generic [ref=e1346]: "User Name: admin"
                - generic [ref=e1347] [cursor=pointer]: 
              - generic [ref=e1348]:
                - generic [ref=e1349]: "Password: Test@123"
                - generic [ref=e1350] [cursor=pointer]: 
        - generic [ref=e1351]:
          - link "Online PSA Birth Certificate System" [ref=e1353] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Online_PSA_Birth_Certificate_System
          - generic [ref=e1354]:
            - generic [ref=e1355]:
              - generic [ref=e1356]: "Admin:"
              - generic [ref=e1357]:
                - generic [ref=e1358]:
                  - generic [ref=e1359]: "Username: admin"
                  - generic [ref=e1360] [cursor=pointer]: 
                - generic [ref=e1361]:
                  - generic [ref=e1362]: "Password: Test@123"
                  - generic [ref=e1363] [cursor=pointer]: 
            - generic [ref=e1364]:
              - generic [ref=e1365]: "User:"
              - generic [ref=e1366]:
                - generic [ref=e1367]:
                  - generic [ref=e1368]: "Username: 9632123698"
                  - generic [ref=e1369] [cursor=pointer]: 
                - generic [ref=e1370]:
                  - generic [ref=e1371]: "Password: Test@12345"
                  - generic [ref=e1372] [cursor=pointer]: 
        - generic [ref=e1373]:
          - link "Water Billing System" [ref=e1375] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Water_Billing_System
          - generic [ref=e1377]:
            - generic [ref=e1378]: "User/Employee:"
            - generic [ref=e1379]:
              - generic [ref=e1380]:
                - generic [ref=e1381]: "User Name: admin"
                - generic [ref=e1382] [cursor=pointer]: 
              - generic [ref=e1383]:
                - generic [ref=e1384]: "Password: admin"
                - generic [ref=e1385] [cursor=pointer]: 
    - generic [ref=e1386]:
      - generic [ref=e1387]: Tourism Build Repository
      - generic [ref=e1389]:
        - generic [ref=e1390]:
          - link "Zoo Management System" [ref=e1392] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Zoo_Management_System
          - generic [ref=e1394]:
            - generic [ref=e1395]: "User/Employee:"
            - generic [ref=e1396]:
              - generic [ref=e1397]:
                - generic [ref=e1398]: "User Name: admin"
                - generic [ref=e1399] [cursor=pointer]: 
              - generic [ref=e1400]:
                - generic [ref=e1401]: "Password: Test@123"
                - generic [ref=e1402] [cursor=pointer]: 
        - generic [ref=e1403]:
          - link "Tourism Management System" [ref=e1405] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Tourism_Management_System
          - generic [ref=e1407]:
            - generic [ref=e1408]: "User/Employee:"
            - generic [ref=e1409]:
              - generic [ref=e1410]:
                - generic [ref=e1411]: "User Name: admin"
                - generic [ref=e1412] [cursor=pointer]: 
              - generic [ref=e1413]:
                - generic [ref=e1414]: "Password: admin"
                - generic [ref=e1415] [cursor=pointer]: 
    - generic [ref=e1416]:
      - generic [ref=e1417]: Transportation Build Repository
      - generic [ref=e1419]:
        - generic [ref=e1420]:
          - link "Car Rental Project" [ref=e1422] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Car_Rental_Project
          - generic [ref=e1423]:
            - generic [ref=e1424]:
              - generic [ref=e1425]: "User:"
              - generic [ref=e1426]:
                - generic [ref=e1427]:
                  - generic [ref=e1428]: "Username: test@gmail.com"
                  - generic [ref=e1429] [cursor=pointer]: 
                - generic [ref=e1430]:
                  - generic [ref=e1431]: "Password: Test@123"
                  - generic [ref=e1432] [cursor=pointer]: 
            - generic [ref=e1433]:
              - generic [ref=e1434]: "Admin:"
              - generic [ref=e1435]:
                - generic [ref=e1436]:
                  - generic [ref=e1437]: "Username: admin"
                  - generic [ref=e1438] [cursor=pointer]: 
                - generic [ref=e1439]:
                  - generic [ref=e1440]: "Password: Test@12345"
                  - generic [ref=e1441] [cursor=pointer]: 
        - generic [ref=e1442]:
          - link "Rail Pass Management System" [ref=e1444] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Rail_Pass_Management_System
          - generic [ref=e1446]:
            - generic [ref=e1447]: "User/Employee:"
            - generic [ref=e1448]:
              - generic [ref=e1449]:
                - generic [ref=e1450]: "User Name: admin"
                - generic [ref=e1451] [cursor=pointer]: 
              - generic [ref=e1452]:
                - generic [ref=e1453]: "Password: Test@123"
                - generic [ref=e1454] [cursor=pointer]: 
              - generic [ref=e1455]:
                - generic [ref=e1456]: "Pass No: 305788314"
                - generic [ref=e1457] [cursor=pointer]: 
        - generic [ref=e1458]:
          - link "Train Station Ticketing System" [ref=e1460] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Train_Station_Ticketing_System
          - generic [ref=e1462]:
            - generic [ref=e1463]: "User/Employee:"
            - generic [ref=e1464]:
              - generic [ref=e1465]:
                - generic [ref=e1466]: "User Name: admin"
                - generic [ref=e1467] [cursor=pointer]: 
              - generic [ref=e1468]:
                - generic [ref=e1469]: "Password: admin123"
                - generic [ref=e1470] [cursor=pointer]: 
        - generic [ref=e1471]:
          - link "Online Bike Rental Management System" [ref=e1473] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Online_Bike_Rental_Management_System
          - generic [ref=e1474]:
            - generic [ref=e1475]:
              - generic [ref=e1476]: "User:"
              - generic [ref=e1477]:
                - generic [ref=e1478]:
                  - generic [ref=e1479]: "User Name: test@gmail.com"
                  - generic [ref=e1480] [cursor=pointer]: 
                - generic [ref=e1481]:
                  - generic [ref=e1482]: "Password: Test@12345"
                  - generic [ref=e1483] [cursor=pointer]: 
            - generic [ref=e1484]:
              - generic [ref=e1485]: "Admin:"
              - generic [ref=e1486]:
                - generic [ref=e1487]:
                  - generic [ref=e1488]: "User Name: admin"
                  - generic [ref=e1489] [cursor=pointer]: 
                - generic [ref=e1490]:
                  - generic [ref=e1491]: "Password: Test@12345"
                  - generic [ref=e1492] [cursor=pointer]: 
        - generic [ref=e1493]:
          - link "AutoTaxi Stand Management System" [ref=e1495] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/AutoTaxi_Stand_Management_System
          - generic [ref=e1497]:
            - generic [ref=e1498]: "User/Employee:"
            - generic [ref=e1499]:
              - generic [ref=e1500]:
                - generic [ref=e1501]: "User Name: admin"
                - generic [ref=e1502] [cursor=pointer]: 
              - generic [ref=e1503]:
                - generic [ref=e1504]: "Password: Test@123"
                - generic [ref=e1505] [cursor=pointer]: 
        - generic [ref=e1506]:
          - link "Bus Booking Management System" [ref=e1508] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Bus_Booking_Management_System/admin.php
          - generic [ref=e1510]:
            - generic [ref=e1511]: "User/Employee:"
            - generic [ref=e1512]:
              - generic [ref=e1513]:
                - generic [ref=e1514]: "User Name: admin"
                - generic [ref=e1515] [cursor=pointer]: 
              - generic [ref=e1516]:
                - generic [ref=e1517]: "Password: admin123"
                - generic [ref=e1518] [cursor=pointer]: 
        - generic [ref=e1519]:
          - link "Bus Pass Management System" [ref=e1521] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Bus_Pass_Management_System
          - generic [ref=e1523]:
            - generic [ref=e1524]: "User/Employee:"
            - generic [ref=e1525]:
              - generic [ref=e1526]:
                - generic [ref=e1527]: "User Name: admin"
                - generic [ref=e1528] [cursor=pointer]: 
              - generic [ref=e1529]:
                - generic [ref=e1530]: "Password: Test@123"
                - generic [ref=e1531] [cursor=pointer]: 
        - generic [ref=e1532]:
          - link "Bus Vehicle Management System" [ref=e1534] [cursor=pointer]:
            - /url: http://49.249.29.4:8081/TestServer/Build/Bus_Vehicle_Management_System
          - generic [ref=e1535]:
            - generic [ref=e1536]:
              - generic [ref=e1537]: "User:"
              - generic [ref=e1538]:
                - generic [ref=e1539]:
                  - generic [ref=e1540]: "User Name: test"
                  - generic [ref=e1541] [cursor=pointer]: 
                - generic [ref=e1542]:
                  - generic [ref=e1543]: "Password: test"
                  - generic [ref=e1544] [cursor=pointer]: 
            - generic [ref=e1545]:
              - generic [ref=e1546]: "Admin:"
              - generic [ref=e1547]:
                - generic [ref=e1548]:
                  - generic [ref=e1549]: "User Name: admin"
                  - generic [ref=e1550] [cursor=pointer]: 
                - generic [ref=e1551]:
                  - generic [ref=e1552]: "Password: 1sourcecode"
                  - generic [ref=e1553] [cursor=pointer]: 
    - generic [ref=e1554]:
      - generic [ref=e1555]: Matrimony Service Build Repository
      - generic [ref=e1558]:
        - link "Online Couple Marriage Registration System" [ref=e1560] [cursor=pointer]:
          - /url: http://49.249.29.4:8081/TestServer/Build/Online_Couple_Marriage_Registration_System
        - generic [ref=e1561]:
          - generic [ref=e1562]:
            - generic [ref=e1563]: "User:"
            - generic [ref=e1564]:
              - generic [ref=e1565]:
                - generic [ref=e1566]: "User Name: 1234567890"
                - generic [ref=e1567] [cursor=pointer]: 
              - generic [ref=e1568]:
                - generic [ref=e1569]: "Password: Test@123"
                - generic [ref=e1570] [cursor=pointer]: 
          - generic [ref=e1571]:
            - generic [ref=e1572]: "Admin:"
            - generic [ref=e1573]:
              - generic [ref=e1574]:
                - generic [ref=e1575]: "User Name: admin"
                - generic [ref=e1576] [cursor=pointer]: 
              - generic [ref=e1577]:
                - generic [ref=e1578]: "Password: Test@123"
                - generic [ref=e1579] [cursor=pointer]: 
```

# Test source

```ts
  2   | import path from "node:path";
  3   | import { test, expect } from '../fixtures/hms_login.fixture.js';
  4   | import { fakerdata } from "../utils/FakerData.js";
  5   | 
  6   | import hms from "../POM/01_hms";
  7   | import homePage from "../POM/02_home.page";
  8   | import patientLog from "../POM/03_patient_login.page";
  9   | import appointment from "../POM/04_patient_Appointment.page";
  10  | import patientregister from "../POM/05_patient_registration.page";
  11  | import patient_details_updation from "../POM/06_patient_details_updation";
  12  | import doctorLogin from "../POM/07_doctor_login.page.js";
  13  | import Doctor_Patient from "../POM/08_doctor_patient.page.js";
  14  | 
  15  | const testDataDir = path.resolve(process.cwd(), "test-data");
  16  | const loginDataPath = path.join(testDataDir, "login-data.json");
  17  | const registrationDataPath = path.join(testDataDir, "registration-data.json");
  18  | const patientDataPath = path.join(testDataDir, "patient-data.json");
  19  | const medicalHistoryPath = path.join(testDataDir,"patient-medical-history.json");
  20  | 
  21  | const loginData = JSON.parse(fs.readFileSync(loginDataPath, "utf8"));
  22  | const registrationData = JSON.parse(fs.readFileSync(registrationDataPath, "utf8"));
  23  | const patient_data = JSON.parse(fs.readFileSync(patientDataPath, "utf8"));
  24  | const medhistory = JSON.parse(fs.readFileSync(medicalHistoryPath, "utf8"));
  25  | 
  26  | const validPatient = { email: process.env.PATIENT_1_EMAIL?.trim(), pwd: process.env.PATIENT_1_PASSWORD?.trim() };
  27  | const emailUpdatePatient = loginData.valid.at(2);
  28  | // const emailUpdatePatient = { email: process.env.UPD_PATIENT_EMAIL?.trim(), pwd: process.env.UPD_PATIENT_PASSWORD?.trim() };
  29  | 
  30  | const uniqueEmail2 = () =>`hms_pw_${Date.now()}_${Math.floor(Math.random() * 10000)}@example.com`;
  31  | // const uniquePwd = ()=>`${Date.now()}_${Math.floor(Math.random() * 10000)}`
  32  | 
  33  | const uniqueEmail = fakerdata.getemail()
  34  | const uniquePwd = fakerdata.getpwd()
  35  | const regPName = fakerdata.getname()
  36  | const pdname = fakerdata.getname()
  37  | 
  38  | // --------------------------------------------------
  39  | // REUSABLE HELPERS
  40  | // --------------------------------------------------
  41  | 
  42  | async function openPatientLogin(browser) {  
  43  |     const context = await browser.newContext();
  44  |     const page = await context.newPage();
  45  |     // Test server home page -> HMS home page
  46  |     const hmsPage = new hms(page);
  47  |     const [publicPage] = await Promise.all([
  48  |         page.waitForEvent("popup"),
  49  |         hmsPage.homePage()
  50  |     ]);
  51  |     await publicPage.waitForLoadState("domcontentloaded");
  52  |     // HMS home page -> Patient login page
  53  |     const home = new homePage(publicPage)
  54  |     const [loginPage] = await Promise.all([
  55  |         publicPage.waitForEvent("popup"),
  56  |         home.PatientLogin()
  57  |     ]);
  58  |     await loginPage.waitForLoadState("domcontentloaded");
  59  |     return { context, page: loginPage }; // returns an object containing the context and the login-page tab
  60  | }
  61  | 
  62  | async function openDoctorLogin(browser) {
  63  |     const context = await browser.newContext();
  64  |     const page = await context.newPage();
  65  |     const hmsPage = new hms(page)
  66  |     const [publicPage]= await Promise.all([
  67  |         page.waitForEvent("popup"),
  68  |         hmsPage.homePage()
  69  |     ]);
  70  |     await publicPage.waitForLoadState("domcontentloaded");
  71  |     const home = new homePage(publicPage);
  72  |     const [loginPage] = await Promise.all([
  73  |         publicPage.waitForEvent("popup"),
  74  |         home.DoctorLoginPage()
  75  |     ]);
  76  |     await loginPage.waitForLoadState("domcontentloaded");
  77  |     return { context, page: loginPage };
  78  | }
  79  | 
  80  | async function loginPatient(page, email, password) {
  81  |     const patientLogin = new patientLog(page);
  82  |     await patientLogin.PatientloginProcess(email, password);
  83  |     return patientLogin;
  84  | }
  85  | 
  86  | async function registerNewPatient(page) {
  87  |     const patientRegister = new patientregister(page);
  88  |     await expect(page).toHaveURL(/Hospital_Doctor_Patient_Management_System/);
  89  |     await expect(patientRegister.create_accnt_link).toBeVisible();
  90  |     //const email = uniqueEmail();
  91  |     const dialogPromise = page.waitForEvent("dialog");
  92  | 
  93  |     await patientRegister.registration(
  94  |         regPName,
  95  |         fakerdata.getaddress(),
  96  |         fakerdata.getcity(),
  97  |         uniqueEmail,
  98  |         uniquePwd
  99  |     );
  100 |     const dialog = await dialogPromise;
  101 |     const message = dialog.message();
> 102 |     await dialog.accept();
      |                  ^ Error: dialog.accept: Protocol error (Page.handleJavaScriptDialog): No dialog is showing
  103 |     return {
  104 |         email: uniqueEmail,
  105 |         password: uniquePwd,
  106 |         message,
  107 |         patientRegister,
  108 |         name: regPName
  109 |     };
  110 | }
  111 | 
  112 | 
  113 | //=========================================================================================================================
  114 | //=========================================================================================================================
  115 | 
  116 | 
  117 | test.describe("HMS E2E TESTING ",()=>{
  118 | 
  119 |     test.setTimeout(60000);
  120 | 
  121 |     // --------------------------------------------------
  122 |     // HMS_TS_01: PATIENT REGISTRATION
  123 |     // Functional testing
  124 |     // --------------------------------------------------
  125 | 
  126 |     test("HMS_TS_01 - Register a new patient successfully", async ({ browser }) => {
  127 |         const { context, page } = await openPatientLogin(browser);
  128 |         const result = await registerNewPatient(page);
  129 |         expect(result.message).toBe("Successfully Registered. You can login now");
  130 |         const newUser1 = {
  131 |             email: result.email,
  132 |             pwd: result.password
  133 |         };
  134 |         loginData.valid.push(newUser1);
  135 |         fs.writeFileSync(loginDataPath,JSON.stringify(loginData, null, 4),"utf8");
  136 | 
  137 |         await context.close();
  138 |     })
  139 | 
  140 |     // --------------------------------------------------
  141 |     // HMS_TS_02: REGISTERED PATIENT CAN LOGIN
  142 |     // Integration testing
  143 |     // --------------------------------------------------
  144 | 
  145 |     test("HMS_TS_02 - Register a patient and login with the new credentials", async ({ browser }) => {
  146 | 
  147 |         const { context, page } = await openPatientLogin(browser);
  148 |         const result = await registerNewPatient(page);
  149 |         expect(result.message).toBe("Successfully Registered. You can login now");
  150 | 
  151 |         // Navigate from registration page to login page
  152 |         await result.patientRegister.re_login.click();
  153 |         const patientLogin = await loginPatient(page,result.email,result.password);
  154 |         await expect(patientLogin.heading).toHaveText("User | Dashboard");
  155 | 
  156 |         const newUser2 = {
  157 |             email: result.email,
  158 |             pwd: result.password
  159 |         };
  160 |         loginData.valid.push(newUser2);
  161 |         fs.writeFileSync(loginDataPath,JSON.stringify(loginData, null, 4),"utf8");
  162 | 
  163 |         await context.close();
  164 |     })
  165 | 
  166 |     // --------------------------------------------------
  167 |     // HMS_TS_03: VALID LOGIN AND DASHBOARD
  168 |     // Functional testing
  169 |     // --------------------------------------------------
  170 | 
  171 | 
  172 |     test("HMS_TS_03 - Login as Patient with valid credentials and verify dashboard", async ({browser }) => {
  173 |         const { context, page } = await openPatientLogin(browser);
  174 |         const patientLogin = await loginPatient(page,validPatient.email,validPatient.pwd)
  175 | 
  176 |         await expect(patientLogin.heading).toHaveText("User | Dashboard");
  177 |         await expect(page.getByRole('heading', { name: 'My Profile' })).toBeVisible();
  178 |         await expect(page.getByText("My Appointments", { exact: true })).toBeVisible();
  179 |         await expect(page.getByText("Book My Appointment", { exact: true })).toBeVisible();
  180 | 
  181 |         await context.close();
  182 |     })  
  183 | 
  184 |     // --------------------------------------------------
  185 |     // HMS_TS_04: OPEN EDIT PROFILE
  186 |     // Functional testing
  187 |     // --------------------------------------------------
  188 | 
  189 |     test("HMS_TS_04 - Open Edit Profile and verify page heading", async ({ loggedInPatient  }) => {        
  190 |         const patientLogin = new patientLog(loggedInPatient) 
  191 |         await expect(patientLogin.heading).toHaveText("User | Dashboard");
  192 |         await patientLogin.PatientProfile();
  193 |         await expect(patientLogin.myprofile_title).toHaveText("User | Edit Profile");
  194 |         await expect(loggedInPatient.getByRole('heading', { name: 'Edit Profile', exact: true })).toBeVisible();
  195 |     })
  196 | 
  197 |     // --------------------------------------------------
  198 |     // HMS_TS_05: BOOK AN APPOINTMENT
  199 |     // Integration testing
  200 |     // --------------------------------------------------
  201 |     
  202 |     test("HMS_TS_05 - Book an appointment successfully", async ({ loggedInPatient }) => {
```