describe ('Different examples of automation testing' , () => {
    
    it ('Verify if the url contains something' , () =>{
    //Verify if the url contains something
        cy.visit('https://www.dancefm.ro/stiri')
        cy.get('.gdpr-button')
        .contains('Da, accept')
        .should('be.visible')
        .click()
        cy.url().should('include' , '/stiri') // Verify the url
    })

    it('Delay testing' , () => {
    //Delay testing
        cy.visit('https://www.google.com');
        cy.get('#L2AGLb').click()
        cy.wait(10000) // Wait for 10 seconds
        cy.get('#APjFqb').type('Wait for 10 seconds')
    })

    it('Select an atribut to be visible' , () => {
        // Select an atribut
        cy.visit('https://www.google.com');
        cy.get('#L2AGLb').click()
        cy.get('[alt="Google"]').should('be.visible') // Selector atribut alt + assertion with visible

    })

    it('Make a screeenshot on the main page' , () => {
        // Screenshot on a page
        cy.visit('https://www.google.com')
        cy.get('#L2AGLb').click()
        cy.screenshot() // Make a screenshot in a default folder
    })

    it('Verify a values from input' , () => {
        // Verify the input + creat a const
        cy.visit('https://www.google.com');
        cy.get('#L2AGLb').click()
        const googleSearch = cy.get('.gLFyf') // A const

        googleSearch.type('128')    
        googleSearch.should('have.value' , '128') // An assertion who contains the text
    })

    it('Verify another values from a input' , () => {
        // Verify a class of another input
        cy.visit('https://www.libris.ro/')
        cy.wait(10000)
        cy.get('.modal-content > .close').click()
        cy.contains('[type="button"]', "Accepta" ).click()
        cy.get('#autoCompleteButton').should('have.class' , 'onSearchClick') //To verify if a class exist for the button
})

})