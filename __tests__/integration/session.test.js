const request = require('supertest');
const app = require('../../src/app')
const { faker } = require('@faker-js/faker');

const truncate = require('../utils/truncate')

const User = require('../../src/app/models/User')

const userDefault = {
    email: faker.internet.email(), 
    senha: faker.internet.password()
}


describe('Integration/Session: Testes de Cadastro', () => {

    beforeEach(async () => await truncate())
    
    //Teste padrão
    it('Deve retornar 200 para user cadastrado', async () => {

        //Post
        const response = await request(app)
            .post('/auth/new')
            .send({
                email: userDefault.email,
                senha: userDefault.senha
            })

        expect(response.status).toBe(200);

    });
    
    it('Deve retornar user:<id> do usuario cdastrado', async () => {

        //Post
        const response = await request(app)
            .post('/auth/new')
            .send({
                email: userDefault.email,
                senha: userDefault.senha
            })

        expect(response.body).toHaveProperty('user');

    });

    //Validando email
    it('Deve retornar 401 para email não enviado', async () => {

        //Post
        const response = await request(app)
            .post('/auth/new')
            .send({
                senha: userDefault.senha
            })

        expect(response.status).toBe(401);

    });

    it('Deve retornar 401 para email já cadastrado', async () => {

        const user = await User.create(userDefault);

        //Post
        const response = await request(app)
            .post('/auth/new')
            .send({
                email: userDefault.email,
                senha: userDefault.senha
            })

        expect(response.status).toBe(401);

    });

    //Validando Senha
    it('Deve retornar 401 para senha não enviado', async () => {

        //Post
        const response = await request(app)
            .post('/auth/new')
            .send({
                senha: userDefault.email
            })

        expect(response.status).toBe(401);

    });

});

/*
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

    it('Deve retornar 401 para email que não existe', async () => {

        //Post
        const response = await request(app)
            .post('/auth')
            .send({
                email: userDefault.email,
                senha: userDefault.senha
            })

        expect(response.status).toBe(401);

    });

    it('Deve retornar 401 para senha incorreta', async () => {

        // Cadastra usuario
        let user = await User.create(userDefault);

        //Post
        const response = await request(app)
            .post('/auth')
            .send({
                email: userDefault.email,
                senha: userDefault.senha + '1'
            })

        expect(response.status).toBe(401);

    });

    it('Deve receber um token de acesso', async () => {

        // Cadastra usuario
        let user = await User.create(userDefault);

        //Post
        const response = await request(app)
            .post('/auth')
            .send({
                email: userDefault.email,
                senha: userDefault.senha
            })

            expect(response.body).toHaveProperty('token');

    })

    it('Deve poder acessar rotas privadas com auth', async () => {
        // Cadastra usuario
        let user = await User.create(userDefault);

        //Post
        const response = await request(app)
            .post('/home')
            .set('Authorization', `Bearer ${user.generateToken()}`)

            expect(response.status).toBe(200); 
    })

    it('Não deve poder acessar rotas privadas sem token', async () => {
        // Cadastra usuario
        let user = await User.create(userDefault);

        //Post
        const response = await request(app)
            .post('/home')
   
            expect(response.status).toBe(401); 
    })

    it('Não deve poder acessar rotas privadas com token invalido', async () => {
        // Cadastra usuario
        let user = await User.create(userDefault);

        //Post
        const response = await request(app)
            .post('/home')
            .set('Authorization', `Bearer ${user.generateToken()}1`)

            expect(response.status).toBe(401); 
    })
});

*/