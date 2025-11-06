/*Ejercicio 1: Custom commands*/

describe('Formulario de registro', ()=>{

    beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser') 
    })
    it('Completa todos los campos y presiona Registrar', ()=>{
        cy.pasosRegistro()

    })
})