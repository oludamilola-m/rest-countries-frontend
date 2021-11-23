describe("viewing country details", () => {
  it("displays country", () => {
    cy.server(); //cypress server
    //configure fake Api endpoint
    cy.route({
      url: "https://restcountries.com/v2/alpha/AFG",
      method: "GET",
      response: {
        name: "Afghanistan",
        topLevelDomain: [".af"],
        alpha3Code: "AFG",
        capital: "Kabul",
        region: "Asia",
        subregion: "Southern Asia",
        population: 27657145,
        borders: ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
        nativeName: "افغانستان",

        currencies: [
          {
            name: "Afghan afghani",
          },
        ],
        languages: [
          {
            name: "Pashto",
          },
          {
            name: "Uzbek",
          },
          {
            name: "Turkmen",
          },
        ],

        flag: "https://restcountries.eu/data/afg.svg",
      },

      status: 200,
    });

    cy.visit("/AFG");
    cy.get(".country__flag")
      .invoke("attr", "src")
      .should("eq", "https://restcountries.eu/data/afg.svg");
    cy.get(".country__info__item")
      .eq(1)
      .should("contain", "Afghanistan")
      .and("contain", "Native name:  افغانستان")
      .and("contain", "Population:  27,657,145")
      .and("contain", "Region:  Asia")
      .and("contain", "Capital:  Kabul")
      .and("contain", "Languages: Pashto, Uzbek, Turkmen");
  });
});
