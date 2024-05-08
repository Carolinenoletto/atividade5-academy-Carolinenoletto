describe('Cadastro de usuário', () => {
 it('Não deve ser possível cadastrar um usuário com e-mail já utilizado no cadastro de outro usuário', () => {
    cy.request('POST', 'https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/novo/'), (req) => {
      req.reply({
        statusCode: 422,
        body: {
          error: "User already exists"
        }
      })
    });
  })
  
