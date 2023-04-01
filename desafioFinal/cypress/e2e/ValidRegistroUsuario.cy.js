describe('Validações de registro de usuário', () => {

    beforeEach('Visita o site', () => {
        cy.visit("https://alura-fotos.herokuapp.com/#/home")    
    })

    it('Verifica mensagens de validação de obrigatoriedade em cada campo', () => {
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

    //Verificações do campo de email

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

    //Verificações do campo de nome completo

    it('Verifica mínimo de carcteres em nome completo', () => {
        cy.contains('a', 'Register now').
        click()

        cy.get('input[formcontrolname="fullName"]').
        type('t')

        cy.get('input[formcontrolname="email"]').
        click()

        cy.contains('ap-vmessage', 'Mininum length is 2').
        should('be.visible')

    })

    it('Verifica máximo de carcteres em nome completo', () => {
        cy.contains('a', 'Register now').
        click()

        cy.get('input[formcontrolname="fullName"]').
        type('NGoBlUTOrcUSHOuLtzarZoNDORyOtoCkUTonSiVoW')

        cy.get('input[formcontrolname="email"]').
        click()

        cy.contains('ap-vmessage', 'Maximun length is 40').
        should('be.visible')

    })

    //verificações do campo de userName

    it('Verifica mínimo de carcteres em nome de usuário', () => {
        cy.contains('a', 'Register now').
        click()

        cy.get('input[formcontrolname="userName"]').
        type('t')

        cy.get('input[formcontrolname="email"]').
        click()

        cy.contains('ap-vmessage', 'Mininum length is 2').
        should('be.visible')

    })

    it('Verifica máximo de carcteres em nome de usuário', () => {
        cy.contains('a', 'Register now').
        click()

        cy.get('input[formcontrolname="userName"]').
        type('NGoBlUTOrcUSHOuLtzarZoNDORyOtoCk')

        cy.get('input[formcontrolname="email"]').
        click()

        cy.contains('ap-vmessage', 'Maximun length is 30').
        should('be.visible')

    })

    it('Verifica se aviso de UpperCase está visível', () => {
        cy.contains('a', 'Register now').
        click()

        cy.get('input[formcontrolname="userName"]').
        type('NGNGNG')

        cy.get('input[formcontrolname="email"]').
        click()

        cy.contains('ap-vmessage', 'Must be lower case').
        should('be.visible')

    })

    //Verificações do campo de password

    it('Verifica mínimo de carcteres para criação da senha', () => {
        cy.contains('a', 'Register now').
        click()

        cy.get('input[formcontrolname="password"]').
        type('t')

        cy.get('input[formcontrolname="email"]').
        click()

        cy.contains('ap-vmessage', 'Mininum length is 8').
        should('be.visible')

    })

    it('Verifica máximo de carcteres para criação da senha', () => {
        cy.contains('a', 'Register now').
        click()

        cy.get('input[formcontrolname="password"]').
        type('ttttttttttttttttttt')

        cy.get('input[formcontrolname="email"]').
        click()

        cy.contains('ap-vmessage', 'Maximun length is 18').
        should('be.visible')

    })

})