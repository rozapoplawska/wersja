/// <reference types="cypress" />

Cypress.Commands.add("wejscie_z_urzedu", () => {
  cy.visit("/");
  cy.url().should("contain", goldap[1].fraze);
  cy.get(':nth-child(5) > .show-all-div > .show-all-incat-btn > span').as('z_urzedu');
  cy.get('@z_urzedu').click();
});

import goldap from "../../fixtures/goldap.json";
describe("goldap 02", () => {
    it("wejscie_w_zakladke_z_urzedu", () => {
      cy.wejscie_z_urzedu();
      cy.url().should("contain", "www.goldap.pl/pl/229/0/z-urzedu.html?cid=13");
    });
  });