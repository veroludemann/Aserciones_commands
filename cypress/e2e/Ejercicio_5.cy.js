/*Ejercicio 5: Validación de requisitos de contraseña*/
describe('Test para Validación de requisitos de contraseña', () => {
    beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
    })

    it('Completa todos los campos y presiona Registrar', () => {
    cy.registroHastaCorreo()
    cy.get('[data-cy="input-password"]').clear().type('123')
    cy.get('[data-cy="input-repetir-password"]').clear().type('123')
    cy.get('[data-cy="btn-registrarse"]').click()
    /*asercion validar requisitos contraseña*/
    cy.contains('La contraseña debe tener al menos 6 caracteres').should('be.visible')
    })
})