const User = require('../models/User')

let message = '';
class AuthController {


    async store(req, res) {

        const { email, senha } = req.body;

        const user = await User.findOne({where: {email}});

        if(!user){
            return res.status(401).json({message: 'User not found'})
        }
        
        if(!(await user.checkSenha(senha))){
            return res.status(401).json({message: 'Incorrect password'})
        }

        return res.status(200).json({
            user, 
            token: user.generateToken()
        });
    }

    async create(req, res) {

        try{
            return res.status(200).json({message})
        }catch (erro){
            return res.status(400).json({erro})
        }
    }

}
module.exports = new AuthController();