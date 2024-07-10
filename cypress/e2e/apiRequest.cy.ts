describe("API Testing", () => {
  it("should successfully retrieve user data", () => {
    cy.request("GET", "http://localhost:3000/api/todos").then((response) => {
      expect(response.status).to.equal(200);
    });
    cy.request("GET", "http://localhost:3000/api/comments").then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
