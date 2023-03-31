describe('Buscar curso alura', () => {

    beforeEach('Visita o site', ()=> {
        cy.visit('https://www.alura.com.br/planos-cursos-online')
    })

    it('Busca um curso na barra de busca alura', () => {
        cy.get('#header-barraBusca-form-campoBusca').
        type('teste');

        cy.get('.header-barraBusca-form-submit').
        click();
    })
    
})