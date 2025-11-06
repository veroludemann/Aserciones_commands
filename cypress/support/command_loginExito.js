Cypress.Commands.add('pasosRegistroExito', () => {
    cy.log('Ingresando nombres, apellidos, celular y dni')
    cy.get('[data-cy="input-nombres"]').clear().type('Vero')
    cy.get('[data-cy="input-apellido"]').clear().type('QA')
    cy.get('[data-cy="input-telefono"]').clear().type('3511234568')
    cy.get('[data-cy="input-dni"]').clear().type('33222411')

    cy.log('Seleccionar provincia y localidad')
    cy.get('[data-cy="select-provincia"]').clear().type('Córdoba')
    cy.get('ul > li > span').contains('Córdoba').click()
    cy.get('[data-cy="select-localidad"]').clear().type('Córdoba')
    cy.get('ul > li > span').contains('Córdoba').click()


    cy.log('Ingresando fecha de nacimiento')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="day"]').clear().type('15')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="month"]').clear().type('08')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="year"]').clear().type('1995')


    cy.log('Ingresando mail y confirmación')
    cy.get('[data-cy="input-email"]').clear().type('test.qa_vero@mailinator.com')
    cy.get('[data-cy="input-confirmar-email"]').clear().type('test.qa_vero@mailinator.com')

    cy.log('Ingresando contraseña y confirmación')
    cy.get('[data-cy="input-password"]').clear().type('Vero12345!')
    cy.get('[data-cy="input-repetir-password"]').clear().type('Vero12345!')


    cy.log('Enviar formulario')
    // cy.get('[data-cy="btn-registrarse"]').click().wait(2000)

})

