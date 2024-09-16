/// <reference types="cypress" />

describe('Amazon', () => {
  beforeEach('Visitar site', () => {
    cy.visit('https://www.amazon.com.br/')
  })

  it('Pesquisando, adiciona, verifica', () => {
    cy.get('#nav-search').type('Xbox Series S')
    cy.get('#nav-search-submit-button').click()
    cy.get('[data-asin="B0C7VK8CT4"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > [data-cy="asin-faceout-container"] > .a-spacing-base > [data-cy="image-container"] > .rush-component > .a-link-normal > .a-section > .s-image').click()
    cy.get('#add-to-cart-button').click()
    cy.get('#nav-cart').click()
    cy.get('#sc-subtotal-label-buybox.a-size-medium.sc-number-of-items')
      .should('be.visible')
    cy.get('.a-size-medium.a-color-base.sc-price.sc-white-space-nowrap')
      .should('be.visible')
    cy.contains('R$ 3.079,00')
      .should('be.visible')
  })


})