
//  it('google' , ()=>{
//     cy.visit('https://www.google.com/')
//     cy.get('#APjFqb').type('Automation step by step{enter}')
//  })



 it('assertion demo' , ()=>{
   cy.visit('https://example.cypress.io/')
   cy.contains('get').click()
   cy.get('#query-btn')
      .should('contain', 'Button')
      .and('have.class', 'query-btn')
      .and('be.visible')


      expect(true).to.be.true

      assert.strictEqual(5,5 , 'Not Equal')
 })