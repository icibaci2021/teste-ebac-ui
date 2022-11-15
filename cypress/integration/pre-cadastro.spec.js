///<reference types="cypress" />
var faker = require('faker-br');

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/edit-account/')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        let nomeFaker = faker.name.firstName() // se eu colocar a variável de email antes da variável de nome não vai funcionar usar o primeiro nome igual ao email.
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker)

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain.text', 'Detalhes da conta modificados com sucesso.')
    });
});