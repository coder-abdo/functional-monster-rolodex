describe('E2E spec', () => {
  it('should vist home page', () => {
    cy.visit('http://localhost:5173/')
    cy.get('h1').contains('monster rolodex')
    cy.get('input').should('be.visible')
    cy.get('[data-testid="monsters-container"]').should('be.visible')
    cy.get('[data-testid="monsters-container"]').children().should('have.length', 10)
    cy.get('[data-testid="monsters-container"]').children().first().should('contain', 'Leanne Graham')
    cy.get('input').type('Leanne')
    cy.get('[data-testid="monsters-container"]').children().should('have.length', 1)

  })
})
