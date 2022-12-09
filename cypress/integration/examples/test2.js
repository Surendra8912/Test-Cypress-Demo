///reference types="cypress" />
describe('My second suite', function()
{
it('My second case',function(){
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.get('.product').should('have.length',5)
cy.get('.product:visible').should('have.length',4)
cy.get('.products').find('.product')
}
)
}

)

