
const authMiddlewares = require('./app/middleware/auth')
const routes = require('express').Router();
const AuthController = require('./app/controllers/AuthController');

 //Definição das rotas
 routes.get('/', (req, res) => {
     res.status(200).send('online');
 })

routes.post('/auth', AuthController.store)
routes.post('/auth/new', AuthController.create)


//Aplica validação de token
routes.use(authMiddlewares)


 //Retorna as rotas
 module.exports = routes;