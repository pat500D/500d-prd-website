/// <reference types = "cypress" />

describe('Work > BetterHelp page - Visual test snapshot', () => {

    beforeEach(() => {
        cy.visit('/work/betterhelp/')
        cy.getCookies() 
      });

    it('1. Check initial layout and snapshot', () => {
        cy.get('body.work-template-default').should('exist')
        cy.percySnapshot('betterhelp-work-page_initial')
    });

    it('2. Check that video autoplays', () => {
        cy.get('div.e-hosted-video').find('video').scrollIntoView()
            .should('have.attr', 'autoplay')
    });

});