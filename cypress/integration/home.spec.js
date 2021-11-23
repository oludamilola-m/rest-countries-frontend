/// <reference types="cypress" />

describe("The Home page", () => {
  it("succesfully load", () => {
    cy.server(); //cypress server
    //configure fake Api endpoint
    cy.route({
      url: "https://restcountries.com/v2/all",
      method: "GET",
      response: [
        {
          name: "Afghanistan",
          alpha3Code: "AFG",
          capital: "Kabul",
          region: "Asia",
          population: 27657145,
          flag: "https://restcountries.eu/data/afg.svg",
        },
        {
          name: "Åland Islands",
          alpha3Code: "ALA",
          capital: "Mariehamn",
          region: "Europe",
          population: 28875,
          flag: "https://restcountries.eu/data/ala.svg",
        },
      ],
      status: 200,
    });

    cy.visit("/");
    cy.contains("Where in the world?");

    cy.get(".country").should("have.length", 2);
    cy.get(".country").first().should("contain", "Afghanistan");
    cy.get(".country").eq(1).should("contain", "Åland Islands");

    cy.get(".country").first().click();
    cy.url().should("eq", "http://localhost:3000/AFG");
  });
});
