describe('Buscar curso alura', () => {

    beforeEach('Visita o site', ()=> {
        cy.visit('https://www.alura.com.br/planos-cursos-online')
    })

    it('Busca um curso na barra de busca alura', () => {

        //Digita a busca na barra de buscas
        cy.get('#header-barraBusca-form-campoBusca').
        type('teste');

        //Clica no botão submit
        cy.get('.header-barraBusca-form-submit').
        click();

        /* cy.get(':nth-child(1) > .busca-resultado-link > .busca-resultado-container > .busca-resultado-nome').
        should("have.text", "Formação Autenticação, testes e segurança em Node.js") */
        cy.get('h4.busca-resultado-nome').
        should('contain', 'Formação Autenticação, testes e segurança em Node.js')
    })
    
    
    it.only('Busca um curso de python na barra de busca alura', () => {

        //Digita a busca na barra de buscas
        cy.get('#header-barraBusca-form-campoBusca').
        type('python');

        //Clica no botão submit
        cy.get('.header-barraBusca-form-submit').
        click();

        //Verifica se há o curso
        cy.get('h4.busca-resultado-nome').
        should('contain', 'Artigo Python datetime: Como faço para definir data e hora em Python?')
        
    })
})