/// <reference types="cypress" />
import searchFraze from "../../fixtures/searchFraze.json";

context("testy wejsc na strone", () => {
  describe("Landing page tests", () => {
    it("test 1", () => {
      cy.visit("/");
      cy.url().should("contain", "https://www.google.com/");
      cy.get("#L2AGLb > .QS5gu").click().should("not.be.visible");
      cy.get(".dbsFrd").should("not.be.visible");
    });
    // it.only('test landing on search',()=>{
    //   cy.visit('/search?q=Wiki');
    //   cy.url().should('contain', 'Wiki');
    // })
    it.only("test landing on search", () => {
      cy.visit("/search?q=Wiki");
      cy.url().should("contain", "Wiki");
    });
  });
  describe("google testy", () => {
    beforeEach("Enter google page and confirm policy", () => {
      cy.visit("www.google.com");
      cy.url().should("contain", "https://www.google.com/");
      cy.get("#L2AGLb > .QS5gu").click().should("not.be.visible");
      cy.get(".dbsFrd").should("not.be.visible");
      cy.fixture("searchFraze.json").as("frazesByAlias");
    });
    it("search for Wikipedia and click search from dropdown", () => {
      cy.get(".gLFyf").clear().type("wikipedia");
      cy.get(".CqAVzb > center > .gNO89b").click();
    });
    it("search for Wikipedia and click search from mainpage", () => {
      cy.get(".gLFyf").clear().type("wikipedia");
      cy.get(".lnXdpd").click();
      cy.get(".FPdoLc > center > .gNO89b").click();
    });
    it("search for Wikipedia and click first dropdown result", () => {
      cy.get(".gLFyf").clear().type("wikipedia").wait(3000);
      cy.get(":nth-child(1) > .eIPGRd > .pcTkSc > .wM6W7d > span").click();
      // cy.get('.LLD4me').click();
      // cy.get('.FPdoLc > center > .gNO89b').click();
    });
    it("search for Wikipedia and click first dropdown result by eq", () => {
      cy.get(".gLFyf").clear().type("wikipedia").wait(3000);
      cy.get(".wM6W7d > span").eq(0).click();
      // cy.get(':nth-child(1) > .eIPGRd > .pcTkSc > .wM6W7d > span').click();
      // cy.get('.LLD4me').click();
      // cy.get('.FPdoLc > center > .gNO89b').click();
    });
    it("Search fraze from fraze fixtures", function () {
      cy.log(searchFraze[0].fraze);
      cy.get(".gLFyf")
        .clear()
        .type(searchFraze[0].fraze)
        .should("have.value", searchFraze[0].fraze);
      cy.get(".gLFyf")
        .clear()
        .type(searchFraze[1].fraze)
        .should("have.value", searchFraze[1].fraze);
    });
    it("Search fraze from fraze fixtures function", function () {
      // cy.log('test');
      cy.get(".gLFyf").as("input");
      cy.log(this.frazesByAlias[0].fraze);
      cy.get("@input")
        .clear()
        .type(this.frazesByAlias[0].fraze)
        .should("have.value", searchFraze[0].fraze);
      cy.get("@input")
        .clear()
        .type(this.frazesByAlias[1].fraze)
        .should("have.value", searchFraze[1].fraze);
    });

    it("Search fraze from fraze fixtures function", function () {
      // cy.log('test');
      cy.get(".gLFyf").as("input");
      cy.log(this.frazesByAlias[0].fraze);
      cy.get("@input")
        .clear()
        .type(this.frazesByAlias[0].fraze)
        .type("{enter}");
      cy.url().should("contain", this.frazesByAlias[0].fraze);
    });
    it.only("Search fraze by then", () => {
      cy.get(".gLFyf").as('input');
      cy.fixture("searchFraze").then((frazes) => {
        cy.get("@input").type(frazes[0].fraze);
      }).clear();
      cy.fixture("searchFraze").as("fraz");
      cy.get("@input").clear();
      cy.get("@fraz").then((frazes) => {
        cy.get("@input").type(frazes[1].fraze);
      });
    });
  });
});
