/// <reference types = "cypress" />

describe('Work > FDM page - Visual test snapshot', () => {

    beforeEach(() => {
        cy.visit('/work/fresh-del-monte/')
        cy.getCookies() 
      });

    it('1. Check initial layout and snapshot', () => {
        cy.get('body.work-template-default').should('exist')
        cy.percySnapshot('fdm-work-page_initial')
    });

    it('2. Check that video autoplays', () => {
        cy.get('div.e-hosted-video').find('video').scrollIntoView()
            .should('have.attr', 'autoplay')
    });

});