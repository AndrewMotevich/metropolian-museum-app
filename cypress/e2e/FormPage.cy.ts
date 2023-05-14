describe('template spec', () => {
  it('passes', () => {
    cy.visit('/forms');
    cy.get('.headerTitle').contains('forms');
  });
});
