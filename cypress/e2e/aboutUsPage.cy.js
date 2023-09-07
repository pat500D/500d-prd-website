/// <reference types = "cypress" />

describe('About us page - Visual test snapshot', () => {

    beforeEach(() => {
        cy.visit('/about/')
        cy.getCookies() 
    });

    it('1. Check about us initial snapshot', () => {
        cy.get('body.page-template-default').should('exist')
        cy.percySnapshot('about-us-initial')
    })

    it('2. Check "Our values" accordion opens and shows up details', () => {
        cy.get('div[data-id="7ce9908"]').scrollIntoView().should('exist')
        cy.get('div.elementor-toggle-item h2').as('accordion').each((item) => {
            cy.wrap(item).invoke('attr', 'aria-expanded')
                .should('eq', 'false')
            })
        for (let n = 0; n < 4; n++) { // click arrow btn
            cy.get('@accordion').eq(n).click({timeout: 5000})
                .invoke('attr', 'aria-expanded')
                .should('eq', 'true')
            cy.percySnapshot('our-values-testimonial-update' + n, {scope: 'div[data-id="7ce9908"]'})
        }
    });

    it('3. Check CTA redirections', () => {
        cy.get('div[data-id="a861df7"]').find('a') // Learn more about life at 500 Designs
            .invoke('attr', 'href').should('contains', '/careers')
        cy.get('div[data-id="22a868db"]').find('a') // Get in touch
            .invoke('attr', 'href').should('contains', '/contact-us')   
    });
})