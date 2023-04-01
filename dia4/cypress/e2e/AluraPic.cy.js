describe('Registro de usuário', () => {

    beforeEach('Visita o site', () => {
        cy.visit("https://alura-fotos.herokuapp.com/#/home")    
    })


    it('Verifica mensagens de valisação', () => {
        cy.contains('a', 'Register now').
        click()

        cy.contains('button', 'Register').
        click()

        cy.contains('ap-vmessage', 'Email is required').
        should('be.visible')

        cy.contains('button', 'Register').
        click()

        cy.contains('ap-vmessage', 'Full name is required').
        should('be.visible')
        cy.contains('ap-vmessage', 'User name is required').
        should('be.visible')
        cy.contains('ap-vmessage', 'Password is required').
        should('be.visible')
    })

    it('Verifica mensagem de email inválido', () => {
        cy.contains('a', 'Register now').
        click()

        cy.contains('button', 'Register').
        click()

        cy.contains('ap-vmessage', 'Email is required').
        should('be.visible')

        cy.get('input[formcontrolname="email"]').
        type('testeteste')

        cy.contains('ap-vmessage', 'Invalid e-mail').
        should('be.visible')

    })

    it.only('Verifica mínimo de carcteres em nome de usuário', () => {
        cy.contains('a', 'Register now').
        click()

        cy.get('input[formcontrolname="fullName"]').
        type('t')

        cy.get('input[formcontrolname="email"]').
        click()

        cy.contains('ap-vmessage', 'Mininum length is 2').
        should('be.visible')


    })


})