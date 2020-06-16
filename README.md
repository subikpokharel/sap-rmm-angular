# sap-rmm-angular
Running Angular Project as a Spring Boot application

Steps to Configure and Run this project:
Step 1: Download or clone the project from this repository.
Step 2: Unzip the downloded folder (if downloaded the zip version)
Step 3: Make sure you have java and maven installed in your system.
Step 4: Navigate into the project directory through command prompt / terminal.
Step 5: Run the following command - "mvn spring-boot:run".
Step 6: On successfully executing Step 5, the application should be up and running on http://localhost:4200 

If you fail to execute STEP 5 from above, please follow the following steps (in context of Eclipse IDE)

Step 5: Go to your IDE and open the project directory.
Step 6: Right click on your project folder and select RUN AS -> Run COnfiguration.
Step 7: Scroll to Maven Build -> Right click -> New configuration
Step 8: Select Base directory as the location where the project is stored.
Step 9: Enter Goals: "spring-boot:run"
Step 10: Apply the changes and select Run.