/// <reference types = "cypress" />

describe('Work > PLS page - Visual test snapshot', () => {

    beforeEach(() => {
        cy.visit('/work/platform-life-sciences/')
        cy.getCookies() 
      });

    it('1. Check initial layout and snapshot', () => {
        cy.get('body.work-template-default').should('exist')
        cy.percySnapshot('pls-work-page_initial')
    });

    it('2. Check that video autoplays', () => {
        cy.get('div.e-hosted-video').find('video').scrollIntoView()
            .should('have.attr', 'autoplay')
    });

});