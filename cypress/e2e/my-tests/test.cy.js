describe("App Component", () => {
  it('should render the text "Movie Lab"', () => {
    // Visit the app
    cy.visit("http://localhost:5173");

    // Check that "Hello" is rendered
    cy.contains("Movie Lab");
  });
});
