describe('template spec', () => {
  it('passes', () => {
    cy.visit('/about');
    cy.get('.headerTitle').contains('about');
  });
});
