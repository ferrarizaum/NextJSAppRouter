// No imports needed for Cypress functions
describe("API Request Test", () => {
  it("successfully makes a request to the API", () => {
    cy.intercept("GET", "/api/todos").as("getTodos");
    cy.visit("http://localhost:3000/todos");
    cy.wait("@getTodos").its("response.statusCode").should("eq", 200);
  });
});
