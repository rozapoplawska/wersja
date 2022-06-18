/// <reference types="cypress" />
  
  Cypress.Commands.add("wejscie_goldap", () => {
    cy.visit("/");
    cy.url().should("contain", goldap[1].fraze);
  });
    import goldap from "../../fixtures/goldap.json";
    describe("goldap 01", () => {
      it("wejscie_w_zakładke_kultura", () => {
        cy.wejscie_goldap();
        cy.get(':nth-child(9) > .show-all-div > .show-all-incat-btn > span').as('kultura');
        cy.get('@kultura').click();
        cy.url().should("contain", "https://www.goldap.pl/pl/229/0/kultura.html?cid=14");
      });
    });