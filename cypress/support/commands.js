Cypress.Commands.add("login", (fileData) => {
  cy.fixture(fileData).then((data) => {
    cy.get("#objects_container").find("a").eq(1).click();
    cy.get("input[name='email']").type(data.username);
    cy.get("input[name='pass']").type(data.password);
    cy.get("input[name='login']").click();
    cy.contains("Tin nhắn").click();
    cy.contains("Đth Vân").click();
    cy.get("#composerInput").type(data.content);
    cy.get("input[name='send']").click();
  });
});
