/// <reference types="cypress" />
describe("Login, Switching to elements (tabs) visible in overview page - using alias, Logout", () => {
  
  //Login to E-Brief via Kiam
  beforeEach(() => {
    

    cy.session('todos', () => {
      cy.loginToEBrief1();
    });

  }); 
      it('Switch to Personal data', () => {
        cy.visit("https://www.e-brief.at/fe_t/deliveries")
        cy.get(".user-title").click();
        cy.wait(2000);
        cy.get('[color="primary"] > .button').click()
       // cy.wait(2000);

      //switch to elements using alias
      // Validate number pof links
      // cy.get('.mat-tab-links>a').as('numberOfElements')
      //   cy.get('@numberOfElements').should('have.length',7)
      //   cy.wait(2000) 
      // //Switch to Zusammenfassung tab
      //   cy.get('.mat-tab-links>a').eq(0).invoke('text').as('settingsOptions')
      //   cy.get('@settingsOptions').should('include',' Zusammenfassung')
      //   cy.get('.mat-tab-links>a').eq(0).click()//<-Klikni n aprvi el u nizu, pousaj??? 
      //   cy.wait(2000) 
      // //Switch to Persönlich tab
      //   cy.get('.mat-tab-links>a').eq(1).invoke('text').as('settingsOptions')
      //   cy.get('@settingsOptions').should('include',' Persönlich')
      //   cy.get('.mat-tab-links>a').eq(1).click()



        // cy.wait(2000)
        // cy.get('[href="/fe_t/settings/password"]').click()
        // cy.wait(2000)
        // cy.get('[href="/fe_t/settings/address"]').click()
        // cy.wait(2000)
        // cy.get('[href="/fe_t/settings/labels"]').click()
        // cy.wait(2000)
        // cy.get('[href="/fe_t/settings/security"]').click()
        // cy.wait(2000)
        // cy.get('.mat-tab-links > [href="/fe_t/settings/activation"]').click()
        // cy.wait(2000)
      });

      // // Validate number of links visible in overview page
      // it('Validate number of links visible in overview page', () => {
      //   cy.visit('https://www.e-brief.at/fe_t/settings/overview')
      //   cy.get('.mat-tab-links>a').as('numberOfElements')
      //   cy.get('@numberOfElements').should('have.length',7)
      //   cy.wait(2000) 
      // });

      //WORK IN PROGRESS
      // Validate number of links visible in overview page 2 
      // it('Validate number of links visible in overview page', () => {
      //   var number = 0;
      //   cy.visit('https://www.e-brief.at/fe_t/settings/overview')
      //   cy.get('.mat-tab-links>a').as('numberOfElements')
      //   cy.get('@numberOfElements').each(($el) => {
      //     //cy.log($el.text());
      //     if($el != null){
      //       number = number + 1;
      //     }
      //     cy.log("current number" + number)
      //   });

      //   cy.get('@numberOfElements').should('have.length',number)
      //   cy.wait(2000) 
      // });


  //     cy.get('.listings-grid')
  // .find('.listing')
  // .then(listing => {
  //   const listingCount = Cypress.$(listing).length;
  //   expect(listing).to.have.length(listingCount);
  // });
  
  
  //Validate number of links visible in overview page dynamic result
      it('Count and validate number of links visible in overview page dynamic result', () => {
        cy.visit('https://www.e-brief.at/fe_t/settings/overview')
        cy.get('.mat-tab-links')
        .find('a')
        .then(a => {
          const listingCount = Cypress.$(a).length;
          expect(a).to.have.length(listingCount);
        });
      });


      //Switch to Zusammenfassung tab
      it('Switch to Zusammenfassung tab', () => {
        cy.visit('https://www.e-brief.at/fe_t/settings/overview')
        cy.get('.mat-tab-links>a').eq(0).invoke('text').as('settingsOptions')
        cy.get('@settingsOptions').should('include',' Zusammenfassung')
        cy.get('.mat-tab-links>a').eq(0).click()//<-Klikni n aprvi el u nizu, pousaj??? 
        //cy.wait(2000)
      });
        
      //Switch to Persönlich tab
      it('Switch to Persönlich tab', () => {
        cy.visit('https://www.e-brief.at/fe_t/settings/overview')
        cy.get('.mat-tab-links>a').eq(1).invoke('text').as('settingsOptions')
        cy.get('@settingsOptions').should('include',' Persönlich')
        cy.get('.mat-tab-links>a').eq(1).click()
        //cy.wait(2000)
      });

      //Switch to  Passwort  tab
      it('Switch to Passwort tab', () => {
        cy.visit('https://www.e-brief.at/fe_t/settings/personal')
        cy.get('.mat-tab-links>a').eq(2).invoke('text').as('settingsOptions')
        cy.get('@settingsOptions').should('include',' Passwort ')//Validate tab title
        cy.get('.mat-tab-links>a').eq(2).click()
        //cy.wait(2000)
      });
      
      //Logout  & Clear saved session
      it("Logout & Clear saved session", function () {
        cy.visit('https://www.e-brief.at/fe_t/settings/password') 
        cy.get(".user-title").click();
        cy.wait(1000);
        cy.get('[color="primary-reverse"] > .button').click();
        Cypress.session.clearAllSavedSessions();//Clear saved session
        cy.url().should("include", "https://www.e-brief.at/fe_t"); // => validate url after logout
      }); //end it  
});
