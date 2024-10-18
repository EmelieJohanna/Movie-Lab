describe("Search Movie", () => {
  it("should search for a movie and display results", () => {
    cy.visit("https://movie-lab-ruddy.vercel.app");
    cy.get('input[placeholder="Search for a movie"]').type("Inception{enter}");
    cy.url().should("include", "/search?query=Inception");
    cy.get(".movie-card").should("have.length.greaterThan", 0);
  });
});
