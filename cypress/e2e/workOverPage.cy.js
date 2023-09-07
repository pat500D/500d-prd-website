/// <reference types = "cypress" />

describe('Work Overview page - Visual test snapshot', () => {

    beforeEach(() => {
        cy.visit('/work/')
        cy.getCookies() 
      });

    it('1. Check work overview page initial snapshot', () => {
        cy.get('body.elementor-page-106').should('exist') // whole page
        cy.percySnapshot('work-overview-page_initial')
    });

    it('2. Check that video plays on hover state', () => {
        cy.checkVideoPlay('div[data-id="0204839"] video') // FDM
        cy.checkVideoPlay('div[data-id="bc8f172"] video') // Trendpop
        cy.checkVideoPlay('div[data-id="6659d84"] video') // BetterHelp
        cy.checkVideoPlay('div[data-id="be56469"] video') // EveryTable
    });

    it('3. Check that PLS does not have video autoplay', () => {
        cy.get('div[data-id="8df44c9"]').as('pls-img') // PLS image
            .scrollIntoView()
            .should('be.visible')
        cy.get('@pls-img').should('not.have.attr', 'video')
           
    });

    it('4. Check each featured work has correct link redirection', () => {
        cy.checkRedirection('a[data-id="d93de28"]', 'work/fresh-del-monte/') // FDM
        cy.checkRedirection('a[data-id="fee7e69"]', 'work/trendpop/') // Trendpop
        cy.checkRedirection('a[data-id="477a7e5"]', 'work/betterhelp/') // BetterHelp
        cy.checkRedirection('a[data-id="fb9f5d0"]', 'work/everytable/') // EveryTable
        cy.checkRedirection('div[data-id="8df44c9"] a', 'work/platform-life-science') // PLS
    });
});