/// <reference types = "cypress" />

describe('Homepage - Visual test snapshot', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.getCookies() 
    });

    it('1. Check homepage initial snapshot', () => {
        cy.get('body.home.page-template-default').should('exist')
        cy.percySnapshot('homepage-initial')
    })

    it('2. Check that video plays', () => {
        cy.get('video.elementor-video').should('have.attr', 'autoplay') // hero video
        cy.checkVideoPlay('div[data-id="348a0ae"] video') // FDM
        cy.checkVideoPlay('div[data-id="c96870c"] video') // Trendpop
        cy.checkVideoPlay('div[data-id="3f39829"] video') // BetterHelp
        cy.checkVideoPlay('div[data-id="729857d"] video') // EveryTable
    });

    it('3. Check that testimonial slider updates by clicking arrow btn', () => {
        cy.get('div[data-id="67116304"]').scrollIntoView().should('exist')
        cy.get('div[data-id="641f7bc"]').should('exist').and('have.length', 3)
        for (let n = 0; n < 2; n++) { // click arrow btn
          cy.get('div.next-arrow')
            .click()
          cy.percySnapshot('homepage-testimonial-update' + n, {scope: 'div[data-id="67116304"]'})
        }

        // assert testimonial moves to last slide
        cy.get('div[data-id="15a5d49"]').eq(2)
            .should('include.text', 'Fresh Del Monte') 
            .and('be.visible')
    });

    it('4. Check CTA redirections', () => {
        cy.get('div[data-id="1867978"]').find('a') // See more work
            .invoke('attr', 'href').should('contains', '/work')
        cy.get('div[data-id="fc8052d"]').find('a') // Get in touch
            .invoke('attr', 'href').should('contains', '/contact-us')   
    });
})