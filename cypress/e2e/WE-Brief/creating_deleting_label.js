/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Login, Crete_delivery-Upload_doc(pdf), Logout", () => {
  beforeEach(() => {
    cy.session('demo', () => {
      cy.loginToEBrief();
    });
  }); 
///eeee
 it('Switch to Labels page, from left sidebar, creating_deleting_label', () => {
  cy.visit('https://www.e-brief.at/fe_t/deliveries')
  cy.get('[routerlink="/settings/labels"] > #undefined > .mat-button-wrapper > .button-content-wrap').click()
  cy.url().should('include','/settings/labels')
  cy.get('.mat-tab-links>a').eq(4).invoke('text').as('pageTitle')
    cy.get('@pageTitle').should('include','Labels')
   // cy.get('.settings-section-title').contains(' Persönliche Labels ').should('have.css', 'color').and('eq', '#0078c8)')
   // cy.get('.mat-tab-links>a').eq(4).should('have.css', 'color').and('eq', '#0078c8)')
   //Create new custom label
   cy.get('.button').click() 
   cy.get('.dialog-title').should('have.text', 'Label erstellen')
   
   cy.get(':nth-child(1) > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('New Custom Label')
   cy.get(':nth-child(2) > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()
   cy.get('#mat-option-2 > .mat-option-text').click()
   cy.get('sc-button.ng-star-inserted > .button').click()
   cy.wait(3000);
   //cy.get('.mat-simple-snackbar').should('have.text', 'Label gespeichert')//Successfully created label - messaage
   //Delete latest created label
   cy.get(':nth-child(4) > .mat-list-item-content > .mat-list-text > .mat-line > .label-list-item-wrap > .label-action-bar > [aria-describedby="cdk-describedby-message-23"] > #undefined > .mat-button-wrapper').click()
   cy.get('.mat-dialog-actions > [color="primary"] > .button').click()
   cy.wait(2000);
 });

  //Alert-Cancel delete Label
  // it('Alert-Cancel delete Label', () => {
  //   cy.visit('/settings/labels')
  //   cy.get(':nth-child(1) > .documents-cell > .full-cell-text-content').trigger('mouseover')
  //   //cy.get('.popover').should('be.visible')
  // });

    
  //Logout  & Clear saved session
  it("Logout & Clear saved session", function () {
    cy.visit("https://www.e-brief.at/fe_t/deliveries") 
    cy.get(".user-title").click();
    cy.wait(3000);
    cy.get('[color="primary-reverse"] > .button').click();
    Cypress.session.clearAllSavedSessions();//Clear saved session
    cy.url().should("include", "https://www.e-brief.at/fe_t"); // => validate url after logout
  }); //end it
});



// /// <reference types="cypress" />
// /// <reference types="cypress-xpath" />

// describe("Login/Logout to kiam base scenario", () => {
// before(() => {
//   cy.loginToEBrief1()
// });
//   //Switch to KIAM
//   it('upload doc', function(){
//       cy.get('[iconafter="custom:post-icon-upload"] > #toolbar-toggle_upload').click()
//       cy.upload_attachment()
//       cy.wait(2000)
//       //cy.get('.list-item-status>.success').should('have.text', 'Dokument erfolgreich hochgeladen: ')
//       cy.wait(2000)
//       cy.contains(" Speichern ").click({ force: true });
      
//       //Logout
//       cy.get('.user-title').click()
//       cy.wait(3000)
//       cy.get('[color="primary-reverse"] > .button').click()
//       cy.url().should("include", "https://www.e-brief.at/fe_t"); // => true
//     })//end it 
    
// });
    

