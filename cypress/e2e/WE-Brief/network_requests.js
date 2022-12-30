/// <reference types="Cypress" />

describe("Network Requests", () => {
  // beforeEach(() => {
  //   cy.visit('/');
  //   cy.url().should("include", "https://www.e-brief.at/fe_t"); // => validate url
  //   cy.get('#onetrust-accept-btn-handler').click();//remove cookie bar
  //   cy.wait(1000);
  // });

    beforeEach(() => {
      cy.loginToEBrief();
    }); 
  it("Get Request", () => {
    //Listening any GET request which contain login (and have status 200)
    cy.intercept({
      method: "GET",
      url: "**/login*"
    }).as("getLogin");

    cy.get('button[type="submit"]').contains('Jetzt Anmelden').click();//Click on Login button
    cy.wait("@getLogin").its("response.statusCode").should("eq", 200);//Validate response (from the network request), when user clicks on Login button
  }); 

  it.only("Get Request1", () => {
    //Listening any GET request which contain login (and have status 200)
    cy.intercept({
      method: "GET",
      url: "**/login*"
    }).as("getLogin");

    cy.get('button[type="submit"]').contains('Jetzt Anmelden').click();//Click on Login button
    cy.wait("@getLogin").its("response.statusCode").should("eq", 200);//Validate response (from the network request), when user clicks on Login button
    // cy.request("POST", "https://www.e-brief.at/backend_t/rest/v2/users/kiam/login/code", userCredentials)
    //     .its('headers').then(headers => {
    //       const token = "";
    //       cy.get("headers['X-Auth-Token-Update']").type(token);
    //       console.log(token);
    //       //cy.wrap(token).as("userToken")
    //     })

        cy.request({
          method: 'POST',
          url: 'https://www.e-brief.at/backend_t/rest/v2/users/kiam/login/code'
        }).then((res) => {
          const token = "";
          cy.get("res.headers['X-Auth-Token-Update']").type(token);
          console.log(token);
        });   
  }); 
});


     



