describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get('.headerTitle').contains('main');
  });
});
