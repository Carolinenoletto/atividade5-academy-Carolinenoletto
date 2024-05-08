
describe('Listagem de usuários ', () => {
  it('Deve ser possível mostrar todos  os usuários cadastrados', () => {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/')
    cy.request('GET', 'api/v1/users')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.lengthOf.at.least(1);
      })
  })
  
  
   
  })

