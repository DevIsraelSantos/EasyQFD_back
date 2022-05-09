const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Model } = require('sequelize');
const { DataTypes } = require('sequelize')

class User extends Model {

  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.VIRTUAL,
      senha_hash: DataTypes.STRING
    },
      {
        sequelize,
        hooks: {
          beforeSave: async (user) => {
            user.senha_hash = await bcrypt.hash(user.senha, 8);
          }
        }
      },

    )
  }
};

User.prototype.checkSenha = function(senha){
  return bcrypt.compare(senha, this.senha_hash)
}

User.prototype.generateToken = function(){
  return jwt.sign({id:this.id}, process.env.APP_KEY )
}

module.exports = User;