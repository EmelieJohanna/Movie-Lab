describe("Homepage Pagination", () => {
  it("should navigate to next and previous pages", () => {
    cy.visit("https://movie-lab-ruddy.vercel.app");

    // Ensure on first page
    cy.url().should("eq", "https://movie-lab-ruddy.vercel.app/");

    // Click Next
    cy.get("button").contains("Next").click({ force: true });
    cy.get(".movie-card").should("have.length.greaterThan", 0);

    // Click Previous
    cy.get("button").contains("Previous").click({ force: true });
    cy.url().should("eq", "https://movie-lab-ruddy.vercel.app/");
    cy.get(".movie-card").should("have.length.greaterThan", 0);
  });
});
