/// <reference types="cypress" />
Cypress.Commands.add("wejscie_z_urzedu", () => {
  cy.visit("/");
  cy.url().should("contain", goldap[1].fraze);
  cy.get(':nth-child(5) > .show-all-div > .show-all-incat-btn > span').as('z_urzedu');
  cy.get('@z_urzedu').click();
});

import goldap from "../../fixtures/goldap.json";
describe("goldap 03", () => {
    it("przejscie_na_strone_startowa_za_pomoca_przycisku_domek", () => {
      cy.wejscie_z_urzedu();
      cy.get('#breadcrumb > :nth-child(1) > a > .fa').as('domek');
      cy.get('@domek').click();
      cy.url().should("contain", goldap[1].fraze)
    });
  });

  