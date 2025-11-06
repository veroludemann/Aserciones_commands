/*Ejercicio 4: Test para DNI ya registrado*/
describe('Test para DNI ya registrado', () => {
    beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
    })

    it('Completa todos los campos y presiona Registrar', () => {
    cy.pasosRegistroExito()
    
    cy.get('[data-cy="btn-registrarse"]').click()
    cy.wait(2000)
    /*asercion validar url del login*/
    cy.url().should('eq', 'https://ticketazo.com.ar/auth/login')
    })
})