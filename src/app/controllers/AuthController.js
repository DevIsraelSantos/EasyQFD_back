const User = require('../models/User')
const { isNull } = require('./funcoes')

let message = '';
class AuthController {


    async store(req, res) {

        const { email, senha } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ message: 'User not found' })
        }

        if (!(await user.checkSenha(senha))) {
            return res.status(401).json({ message: 'Incorrect password' })
        }

        return res.status(200).json({
            user,
            token: user.generateToken()
        });
    }

    async create(req, res) {

        try {

            //Get Params of Body
            const { email, senha } = req.body;
            if (isNull(email)) {
                return res.status(401).json({ erro: 'Necessario email e senha' })
            }
            if (isNull(senha)) {
                return res.status(401).json({ erro: 'Necessario email e senha' })
            }

            //Valida emai já cadastrado
            const users = await User.findAll({ where: { email } })
            if (users.length != 0) {
                return res.status(401).json({ erro: 'Email já possue conta' })
            }
            
            const user = await User.create({email, senha});
            if(user.erro){
                return res.status(401).json({ erro: user.erro})
            }
            
            return res.status(200).json({ message:'sucesso', user:user.dataValues.id })
        } catch (erro) {
            console.log({ erro })
            return res.status(400).json({ erro })
        }
    }

}
module.exports = new AuthController();