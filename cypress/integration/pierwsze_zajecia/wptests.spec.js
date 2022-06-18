/// <reference types="cypress" />

describe("wp testy", () => {
    it("test 2", () => {
      cy.visit("www.wp.pl");
      cy.url().should("contain", "www.wp.pl");
      cy.get('body > div> div > div > div > div > button:nth-child(2)').click();
    });
  });

