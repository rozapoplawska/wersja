/// <reference types="cypress" />
Cypress.Commands.add("wejscie_goldap", () => {
  cy.visit("/");
  cy.url().should("contain", goldap[1].fraze);
});
import goldap from "../../fixtures/goldap.json";
  describe("goldap 04", () => {
    it("wejscie_w_zakldke_szkoly", () => {
      cy.wejscie_goldap();
      cy.get(':nth-child(17) > .show-all-div > .show-all-incat-btn > span').as('szkoly');
      cy.get('@szkoly').click();
      cy.url().should("contain", "https://www.goldap.pl/pl/229/0/szkoly.html?cid=16");
    });
  });
  

  