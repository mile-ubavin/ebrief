// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//******************************  E-Brief / K I A M  ********************************/

//Custom commands: Take a data from json file
// Cypress.Commands.add("take_credentials_from_json", () => {
//   cy.fixture("ebrief.json").as("example_kiam");
//   cy.get("@example_kiam").then((usersJson) => {
//     cy.loginToEbrief(usersJson.username_kiam, usersJson.password_kiam);
//     cy.get("#signInName").type(usersJson.username_kiam);
//     cy.get("#password").type(usersJson.password_kiam);
//     cy.wait(3000);
//     cy.get(".buttons").click();
//   });
// });

// //Custom commands: Take a data from json file and login to E-Brief via Kiam
// Cypress.Commands.add("loginToEbrief", () => {
//   //cy.origin("https://kiamabn.b2clogin.com/kiamabn.onmicrosoft.com/oauth2/v2.0/", ()=>{
//   //Setup valid un/pw
//   //cy.url().should("include", "https://kiamabn.b2clogin.com/kiamabn.onmicrosoft.com"); // => true
//   cy.fixture("ebrief.json").as("example_kiam");
//   cy.get("@example_kiam").then((usersJson) => {
//     //  cy.loginToEbrief(usersJson.username_kiam, usersJson.password_kiam);
//     cy.get("#signInName").type(usersJson.username_kiam);
//     cy.get("#password").type(usersJson.password_kiam);
//     cy.get("#showPassword").click();
//     cy.wait(3000);
//     cy.get(".buttons").click();
//   });
//   // })
// });

// //Custom commands Origin
// Cypress.Commands.add("loginSession", (example_kiam, password_kiam) => {
//   cy.session([example_kiam, password_kiam], () => {
//     cy.visit("https://www.e-brief.at/fe_t"),
//       //cy.url().should("include", "/fe_t"); // => validate url
//       cy.get("#onetrust-accept-btn-handler").click({ force: true });
//     cy.wait(3000);
//     cy.get(".login-form > sc-button > .button").click();
//     cy.origin(
//       "https://kiamabn.b2clogin.com/kiamabn.onmicrosoft.com/oauth2/v2.0/",
//       { args: [example_kiam, password_kiam] },
//       ([example_kiam, password_kiam]) => {
//         cy.fixture("ebrief.json").as("example_kiam");
//         cy.get("@example_kiam").then((usersJson) => {
//           //  cy.loginToEbrief(usersJson.username_kiam, usersJson.password_kiam);
//           cy.get("#signInName").type(usersJson.username_kiam);
//           cy.get("#password").type(usersJson.password_kiam);
//           cy.get("#showPassword").click();
//           cy.wait(3000);
//           cy.get(".buttons").click();
//         });
//       }
//     );
//   });
// }); //end

import 'cypress-file-upload';
import "cypress-keycloak-commands";


//Custom commands: Take a data from json file and login to E-Brief via Kiam
// Cypress.Commands.add("loginToEBrief_1", () => {
//     cy.visit("https://www.e-brief.at/fe_t");
//     cy.url().should("include", "https://www.e-brief.at/fe_t"); // => true
//     cy.wait(1000);
//     cy.get("#onetrust-accept-btn-handler").click({ force: true });//remove cookie
//     cy.wait(1000);
//     cy.get(".login-form > sc-button > .button").click();
//     cy.origin("https://kiamabn.b2clogin.com/kiamabn.onmicrosoft.com/oauth2/v2.0/",() => {
//         cy.url().should("include","https://kiamabn.b2clogin.com/kiamabn.onmicrosoft.com"); // => true
//      //import credentials from json
//         cy.fixture("ebrief.json").as("example_kiam");
//         cy.get("@example_kiam").then((usersJson) => {
//             cy.get("#signInName").type(usersJson.username_kiam);
//             cy.get("#password").type(usersJson.password_kiam);
//             cy.wait(1000);
//             cy.get('#showPassword').click()
//             cy.wait(1000);
//             cy.get(".buttons").click();
//         });
//     }
//   ); //end origin
//   cy.url().should("include", "https://www.e-brief.at/fe_t/deliveries"); // => validate ebrief url (/deliveries page)
//   cy.wait(1000);
// }); //end

// Upload Attachment
Cypress.Commands.add("upload_attachment", function () {
    cy.fixture("Test.pdf", "binary")
     .then(Cypress.Blob.binaryStringToBlob)
     .then((fileContent) => {
     cy.get('form.ng-untouched > .ng-untouched').attachFile({
      fileContent,
      filePath: "Test.pdf",
      fileName: "Test.pdf",
       });
    });
 });

//Gmail
// Cypress.Commands.add("Gmail", () => {
//     const { defineConfig } = require("cypress");
//     const gmailTester = require("gmail-tester");
//     const path = require("path");
    
//     module.exports = defineConfig({
//       e2e: {
//         setupNodeEvents(on, config) {
//           on("task", {
//             "gmail:get-messages": async (args) => {
//               const messages = await gmailTester.get_messages(
//                 path.resolve(fixture, "credentials.json"),
//                 path.resolve(fixture, "token.json"),
//                 args.options
//               );
//               return messages;
//             },
//           });
//         },
//       },
//     });
// })


//Custom commands: Taken data from json file and login to E-Brief 
Cypress.Commands.add("loginToEBrief", () => {
    cy.visit("/");//Taken from base url
    cy.url().should("include", "https://www.e-brief.at/fe_t"); //Validating url on the dashboard page
    cy.wait(1000);
    cy.get("#onetrust-accept-btn-handler").click();//Remove Cookie bar
    cy.wait(1000);
    cy.get('button[type="submit"]').should('be.visible').and('be.enabled');//3 Buttons should be visible and enabled in the landing page (Validation) - optional
    cy.get('button[type="submit"]').contains('Jetzt Anmelden').click();
//Redirection to Kiam login page
    cy.url().should("include","https://kiamabn.b2clogin.com/kiamabn.onmicrosoft.com"); //Validating Kiam url 
//Import credentials (un/pw) from 'ebrief.json' file
    cy.fixture("ebrief.json").as("example_kiam");
    cy.get("@example_kiam").then((usersJson) => {
        cy.get("#signInName").type(usersJson.username_kiam);
        cy.get("#password").type(usersJson.password_kiam);
        cy.wait(1000);
        cy.get('#showPassword').click();//Show/Hide pass
        cy.wait(1000);
        cy.get('#next').click();//Login to E-Brief
    }
  ); 
  cy.url().should("include", "https://www.e-brief.at/fe_t/deliveries"); // => validate ebrief url (/deliveries page)
  cy.wait(1000);
}); //end

