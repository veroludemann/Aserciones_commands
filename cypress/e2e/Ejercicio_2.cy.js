/*Ejercicio 2: Test para email ya registrado*/
describe('Asercion email ya registrado', () => {
    beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
    })

    it('Completa todos los campos y presiona Registrar', () => {
    cy.registroHastaCorreo()
    cy.get('[data-cy="input-password"]').clear().type('P@ssw0rd123')
    cy.get('[data-cy="input-repetir-password"]').clear().type('P@ssw0rd123')
    cy.log('Enviar formulario')
    cy.get('[data-cy="btn-registrarse"]').click()
    /*asercion correo registrado*/
    cy.contains('Ya existe un usuario registrado con ese correo electrónico').should('be.visible')
    })
})