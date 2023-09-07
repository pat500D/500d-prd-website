/// <reference types = "cypress" />

const pos = ['head-of-sales', 'operations-director', 'marketing-director', 'motion-graphics', 'ui-ux-designer']

describe('Careers page - Visual test snapshot', () => {

    beforeEach(() => {
        cy.visit('/careers/')
        cy.getCookies() 
    })

    it('1. Check careers initial snapshot', () => {
        cy.get('body.post-type-archive-careers').should('exist')
        cy.percySnapshot('careers-initial')
    });

    it('2. Check CTA redirections', () => {
        cy.get('div[data-id="b324785"]').find('a') // View open positions
            .invoke('attr', 'href').should('contains', '#open-positions')
        cy.get('div[data-id="1db4c28"]').scrollIntoView() // Open positions section
        
        // check each open position links
        cy.get('div[data-listing-id="463"]').find('a').each((item, index) => {
            cy.wrap(item).invoke('attr', 'href').should('include', pos[index])
        })

    });

    it('3. Check that testimonial slider updates by clicking arrow btn', () => {
        cy.get('div.elementor-element-3e16c72').scrollIntoView().should('exist')
        cy.get('div[data-elementor-id="455"]').should('exist').and('have.length', 4)

        //move between slides
        for (let n = 0; n < 3; n++) {
            cy.get('div.next-arrow')
                .click()
            cy.wait(3000)
            cy.percySnapshot('careers-testimonial-update' + n, {scope: 'div[data-elementor-id="455"]'})
        }

        // assert testimonial moves to last slide
        cy.get('div[data-id="f30bfc2"]').eq(3)
            .should('include.text', 'Sheena Villeta')
            .and('be.visible') 
    });


})