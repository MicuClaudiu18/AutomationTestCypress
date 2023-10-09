describe('Linkedin access' , () => {
    it ('LoginLinkedin pass' , () => {
        // Case 1 to login on Linkedin platform
        cy.visit('https://linkedin.com')
        cy.get('[action-type="ACCEPT"]').click()
        cy.get('.nav__button-secondary')
        .contains('Sign in')
        .should('be.visible')
        .click()
        cy.get('#username').type('test@test.ro')
        cy.get('#password').type('123')
        cy.get('.login__form_action_container ')
        .contains('Sign in')
        .should('be.visible')
        .click()
        cy.get('#ember14').should('exist')
    })
})