/// <reference types="cypress" />
Cypress.Commands.add("wejscie_sport", () => {
    cy.visit("/");
    cy.url().should("contain", goldap[1].fraze);
    cy.get(':nth-child(13) > .show-all-div > .show-all-incat-btn > span').as('sport');
    cy.get('@sport').click();
    cy.url().should("contain", "https://www.goldap.pl/pl/229/0/sport.html?cid=15");
  });
  import goldap from "../../fixtures/goldap.json";

describe("goldap 08", () => {
    it("przejscie_na_strone_aktualnosci_z_zakladki_sport", () => {
      cy.wejscie_sport();
      cy.get('#breadcrumb > :nth-child(2) > a').as('aktualnosci');
      cy.get('@aktualnosci').click();
      cy.url().should("contain", "https://www.goldap.pl/pl/229/0/aktualnosci.html");
    });
  });
 