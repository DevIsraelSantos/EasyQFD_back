
const authMiddlewares = require('./app/middleware/auth')
const routes = require('express').Router();
const AuthController = require('./app/controllers/AuthController');

 //Definição das rotas

routes.post('/auth', AuthController.store)
routes.post('/auth/new', AuthController.create)


//Aplica validação de token
routes.use(authMiddlewares)

routes.post('/home', (req, res) => {
    res.status(200).send();
})

 //Retorna as rotas
 module.exports = routes;