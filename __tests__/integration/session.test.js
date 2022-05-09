const request = require('supertest');
const app = require('../../src/app')

const truncate = require('../utils/truncate')

const { User } = require('../../src/app/models')

const userDefault = {
    nome: 'Israel',
    email: 'email@gmail.com', 
    senha_hash: '123456789'
}

describe('Integration/Session: Testes de Autenticação', () => {

    beforeEach(async () => await truncate())

    it('Deve retornar 200 para credencial correta', async () => {

        //Cadastra usuario
        let user = await User.create(userDefault);

        //Post
        const response = await request(app)
            .post('/auth')
            .send({
                email: userDefault.email,
                senha: userDefault.senha
            })

        expect(response.status).toBe(200);

    });

});

