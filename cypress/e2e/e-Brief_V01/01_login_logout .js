/// <reference types="Cypress" />
describe("Login/Logout to ebrief base scenario", () => {
  
  //Login via Kiam, Logout
  it("Login, Logout", function () {
    cy
      .loginToEBrief()//Login to E-brief - using custom commands
      //Optional
      .wait(2000)
      .get('.content-table-wrap').scrollTo("bottom", { duration: 500 })
      .get('.content-table-wrap').scrollTo("top", { duration: 500 })
      //Logout
      .get(".user-title").click()
      .get('[color="primary-reverse"] > .button').click()//Click on Logout button
      .url().should("include", "/fe_t"); // Validate url 
  }); //end it
});
