const AuthController = require('./app/controllers/AuthController');

 const routes = require('express').Router();

 //Definição das rotas

routes.post('/auth', AuthController.store)

 //Retorna as rotas
 module.exports = routes;