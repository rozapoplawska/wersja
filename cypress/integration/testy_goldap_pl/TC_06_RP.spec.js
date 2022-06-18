/// <reference types="cypress" />
Cypress.Commands.add("wejscie_goldap", () => {
    cy.visit("/");
    cy.url().should("contain", goldap[1].fraze);
  });
  import goldap from "../../fixtures/goldap.json";
describe("goldap 06", () => {
    it("wejscie_w_zakladke_sport", () => {
      cy.wejscie_goldap();
      cy.get(':nth-child(13) > .show-all-div > .show-all-incat-btn > span').as('sport');
      cy.get('@sport').click();
      cy.url().should("contain", "https://www.goldap.pl/pl/229/0/sport.html?cid=15");
    });
  });
  