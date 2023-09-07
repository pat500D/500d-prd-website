/// <reference types = "cypress" />

describe('Services page - Visual test snapshot', () => {

    beforeEach(() => {
        cy.visit('/services/')
        cy.getCookies() 
    });

    it('1. Check Services page initial snapshot', () => {
        cy.get('body.page-template-default').should('exist')
        cy.percySnapshot('services-page-initial')
    });

    it('2. Check that testimonial slider updates by clicking arrow btn', () => {
        cy.get('div[data-id="d559b25"]').scrollIntoView().should('exist')
        cy.get('div[data-id="dab29b1"]').should('exist').and('have.length', 3)
            
        // click arrow btn
        for (let n = 0; n < 2; n++) { 
            cy.get('div.next-arrow', {timeout: 10000})
                .click()
            cy.percySnapshot('services-testimonial-update' + n, {scope: 'div[data-id="d559b25"]'})
            }

        // assert testimonial moves to last slide
        cy.get('div[data-id="15a5d49"]').eq(2)
            .should('include.text', 'Fresh Del Monte') 
    });
});