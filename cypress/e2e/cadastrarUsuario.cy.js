import { faker } from '@faker-js/faker';

describe('Cadastro de usuário', () => {
    it('Deve ser possível preencher o formulário de novo cadastro', () => {
      cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/')
      cy.contains('a', 'Novo').click();
      cy.get('input#name.nameInput').type("Maria Paula")
      cy.get('input#email.sc-dLMFU').type("mariapaulasouza@example.com")
      cy.get('div.sc-dAlyuH').click()
      
    })
  
    it('Não deve ser possível cadastrar com email inválido', () => {
      cy.intercept('POST', '/users', (req) => {
        req.reply({
          statusCode: 400,
          body:{
            error: "Email inválido"
          }
        })
  
        cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/')
        cy.contains('a', 'Novo').click();
        cy.get('input#name.nameInput').type("Maria Jose")
        cy.get('input#email.sc-dLMFU').type("mariajose43@123")
        cy.get('div.sc-dAlyuH').click()
        cy.wait(1000) 
        cy.contains('Email inválido').should('exist')
      })
    })
   
    it('Não deve ser possível atualizar o nome para mais de 100 caracteres', () => {
      cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/')
      cy.contains('a', 'Novo').click()
      const longName = faker.lorem.words(50)
      cy.get('input#name.nameInput').type(longName)
      cy.get('input#email.sc-dLMFU').type("mariapaulasouza@example.com")
      cy.get('div.sc-dAlyuH').click()
  })
  
  it('Não deve ser possível atualizar um e-mail que tenha mais de 60 caracteres', () => {
    cy.intercept('POST', '/users', (req) => {
      req.reply({
        statusCode: 400
      });
    });
  
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/')
    cy.contains('a', 'Novo').click()
    const longEmail = faker.internet.email().substr(0, 61) + '@example.com'
    cy.get('input#name.nameInput').type('Maria Paula');
    cy.get('input#email.sc-dLMFU').type(longEmail)
    cy.get('div.sc-dAlyuH').click()
    cy.contains('Formato de e-mail inválido').should('be.visible')
   })
  });

  



  
  
  







