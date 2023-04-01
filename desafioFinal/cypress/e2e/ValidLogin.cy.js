describe('Preenche de forma incorreta e correta os campos de login', () => {

    beforeEach('Visita o site', () => {
        cy.visit("https://alura-fotos.herokuapp.com/#/home")    
    })

    it('exibe mensagem de nome de usuário incorreto ao preencher o campo de usuário ou senha incorretamente', () => {
        cy.get('input[formcontrolname="userName"]').
        type('teste')

        cy.get('input[formcontrolname="password"]').
        type('teste1243')

        cy.get('.btn').
        click()

        cy.on('window:alert', (t) => {
            expect(t).to.contains('Invalid user name or password')
        })

    })

    it('Tenta clicar em login sem ter preenchido campo de usuário ou senha', () => {
        cy.get('input[formcontrolname="userName"]').
        type('tester')

        cy.get('.btn').
        should('be.disabled')

        cy.get('input[formcontrolname="userName"]').
        clear()

        cy.get('input[formcontrolname="password"]').
        type('teste1243')

        cy.get('.btn').
        should('be.disabled')

    })


    it('Preenche os campos de usuário e senha corretamente',() => {
        cy.get('input[formcontrolname="userName"]').
        type('tester')

        cy.get('input[formcontrolname="password"]').
        type('teste123')

        cy.get('.btn').
        click()

        cy.contains('a','Logout').
        should('be.visible')
    })
        
})