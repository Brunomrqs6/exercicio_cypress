/// <reference types="cypress" />

describe('Testes para a agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Deve adicionar um contato', () => {
        cy.get('[type="text"]').type('Bruno Marques')
        cy.get('[type="email"]').type('brunomrqs@gmail.com')
        cy.get('[type="tel"]').type('61 12345678')
        cy.get('.adicionar').click()
    })

    it('Deve editar o contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('Bruno 2')
        cy.get('[type="email"]').clear().type('Bruno 2@gmail.com')
        cy.get('[type="tel"]').clear().type('12 1234567')
        cy.get('.alterar').click()
    })

    it('Deve remover o contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
})