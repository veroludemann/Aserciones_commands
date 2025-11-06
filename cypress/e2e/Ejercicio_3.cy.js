/*Ejercicio 3: Test para DNI ya registrado*/
describe('Test para DNI ya registrado', () => {
    beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
    })

    it('Completa todos los campos y presiona Registrar', () => {
    cy.pasosRegistro()
    
    cy.log('Enviar formulario')
    cy.get('[data-cy="btn-registrarse"]').click()
    /*asercion dni registrado*/
    cy.contains('Ya existe un usuario registrado con ese DNI').should('be.visible')
    })
})