/// <reference types='cypress' />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first() //escolhendo o primeiro item da lista
            //.last() //escolhendo o último item da lista
            //.eq(3) //escolher pelo item da lista, lembrando que a contagem começa com 0,1,2
            .contains('Ariel Roll Sleeve Sweatshirt') //escolher pelo nome do produto
            .click()
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
    var quantidade = 3 

        cy.get('[class="product-block grid"]')
            .contains('Arcadio Gym Short').click()
        cy.get('.button-variable-item-36').click()
        cy.get('.button-variable-item-Blue').click()
        //cy.get('.plus').click() //botão + na quantidade,então serão adicionados 2 itens
        cy.get('.input-text').clear().type(quantidade) //selecionando numero da quantidade e inserindo a quantidade desejada para o teste
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Arcadio Gym Short” foram adicionados no seu carrinho.')

    });
});