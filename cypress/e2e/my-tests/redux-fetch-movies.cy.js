// not in ise

// describe("Redux Movies Fetching Test", () => {
//   beforeEach(() => {
//     cy.intercept("GET", "https://api.themoviedb.org/3/genre/movie/list*", {
//       statusCode: 200,
//       body: {
//         genres: [
//           { id: 1, name: "Comedy" },
//           { id: 2, name: "Drama" },
//           { id: 3, name: "Action" },
//         ],
//       },
//     }).as("fetchMovies");

//     cy.visit("/");
//   });
//   it("should make an API request to the fetch movies when app loads", () => {
//     cy.wait("@fetchMovies").then((interception) => {
//       expect(interception.response.statusCode).to.equal(200);
//     });
//   });
// });
