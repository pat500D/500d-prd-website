/// <reference types = "cypress" />

describe('Contact us page - Visual test snapshot', () => {

    beforeEach(() => {
        cy.visit('/contact-us/')
        cy.getCookies() 
    });

    it('1. Check Contact us page initial snapshot', () => {
        cy.get('body.page-template-default').should('exist')
        cy.percySnapshot('contact-us-initial')
    });

    it('2. Check that mailto functionality is present', () => {
        cy.get('div[data-id="73f9cb8"]').find('a')
            .invoke('attr', 'href').should('contain', 'mailto:hello@500designs.com')
    });

    it('3. Check form submission and redirection to thank you page', () => {
        cy.fixture('formData').then((data) => {
            cy.get('#form-field-message').type(data.name) // full name
            cy.get('#form-field-field_ee5245b').type(data.email) // email address
            cy.get('#form-field-field_a1fdf22').type(data.business) // business name

            // click all checkbox
            for (let n = 0; n < 10; n++) { 
                cy.get('span.elementor-field-option').eq(n)
                  .click('left')
            }

            cy.get('#form-field-field_2dc5d14').type(data.budget) // budget
            cy.get('#form-field-field_607aea3').type(data.comment) // comment
            cy.percySnapshot('form-with-inputs')
            cy.get('button[type="submit"]').click() // Submit btn

            //check form submission is successfull
            cy.url().should('contain', 'contact-us/?submitted=1')
            cy.get('div.elementor-widget-container').find('p')
              .should('contain', 'Nice! We’ll be in touch soon.')
        })
    });
});