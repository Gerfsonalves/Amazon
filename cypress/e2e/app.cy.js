/// <reference types="cypress" />

describe('Amazon', () => {
  beforeEach('Visitar site', () => {
    cy.visit('https://www.amazon.com.br/')
  })

  it('Login inválido', () => {
    cy.get('#nav-link-accountList-nav-line-1').click()
    cy.get('#ap_email').type('Teste@gmail.com')
    cy.get('.a-button-inner > #continue').click()
    cy.get('#ap_password').type('12345678')
    cy.get('#signInSubmit').click()
  })

  it('Cadastro de usuário', () => {
    cy.get('#nav-link-accountList-nav-line-1').click()
    cy.get('#createAccountSubmit').click()
    cy.get('#ap_customer_name').type('José')
    cy.get('#ap_email').type('josetestecypresspautomate@gmail.com')
    cy.get('#ap_password').type('123654')
    cy.get('#ap_password_check').type('123654')
    cy.get('#continue').click()

    // Inserir código recebido no email
    //cy.get('#cvf-input-code').type('Teste')
    // cy.get('#cvf-submit-otp-button > .a-button-inner > .a-button-input').click()
    // Erro após prosseguir com o código de confirmação do email "Falso"
    //cy.get('.cvf-widget-alert-id-cvf-invalid-code > .a-box-inner > .a-alert-content > .a-section').should('be.visible')
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