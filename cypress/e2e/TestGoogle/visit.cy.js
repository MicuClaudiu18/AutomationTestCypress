describe ('Site Google.com' , () => {
    //Visit the page
    it ('Functioneaza cu o cautare basic' , () =>  {
        cy.visit('https://www.google.com/');
        cy.get('#L2AGLb').click();
        cy.get('.gLFyf').type('vlog de it')
        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
        cy.get('#result-stats').should('exist')
    })
})