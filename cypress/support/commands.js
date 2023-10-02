Cypress.Commands.add("visitPagesInLoop", (urls) => {
  urls.forEach((url) => {
    cy.visit(url);
    // Add your test assertions or actions for each page here
  });
});
