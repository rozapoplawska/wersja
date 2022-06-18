/// <reference types="cypress" />

Cypress.Commands.add("lazy", () => {
  cy.log("I'm lazy");
});
// Cypress.Commands.add('closePopUp',()=>{
//     cy.url().should("contain", "https://www.google.com/");
//     cy.get("#L2AGLb > .QS5gu").click().should("not.be.visible");
// })

Cypress.Commands.add('closePopUp',()=>{
    cy.get('body').then(($body)=>{
        if ($body.find("#L2AGLb > .QS5gu").length > 0){
            cy.get("#L2AGLb > .QS5gu").then(($button)=>{
                if($button.is(':visible')){
                    cy.wrap($button).click();
                }
            })
        }
    })
    
})

Cypress.Commands.add('checkElementVisibility',
{ prevSubject: 'element'},
(subject) =>{
    return cy.wrap(subject).should('be.visible');
}
)

context("Custom commands", () => {
  describe("Tests with commands", () => {
    beforeEach(() => {
    cy.viewport(1920, 1080);
      cy.visit("www.google.com");
      cy.closePopUp();
    });
    it("test1", () => {
        // cy.closePopUp();
        cy.get('.gLFyf').checkElementVisibility().type('text');
      cy.lazy();
    });
  });
});
