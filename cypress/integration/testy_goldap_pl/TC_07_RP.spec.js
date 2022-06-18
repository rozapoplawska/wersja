/// <reference types="cypress" />
Cypress.Commands.add("wejscie_sport", () => {
    cy.visit("/");
    cy.url().should("contain", goldap[1].fraze);
    cy.get(':nth-child(13) > .show-all-div > .show-all-incat-btn > span').as('sport');
    cy.get('@sport').click();
    cy.url().should("contain", "https://www.goldap.pl/pl/229/0/sport.html?cid=15");
  });
  import goldap from "../../fixtures/goldap.json";

describe("goldap 07", () => {
    it("wejscie_w_zakldke_sport_i_przejscie_na_druga_strone", () => {
      cy.wejscie_sport();
      cy.get('[href="/pl/229/0/aktualnosci.html?page=2"]').as('2_strona');
      cy.get('@2_strona').click();
      cy.url().should("contain", "goldap.pl/pl/229/0/aktualnosci.html?page=2");
    });
  });