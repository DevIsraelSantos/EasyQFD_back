module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.VIRTUAL,
      senha_hash: DataTypes.STRING
    }
      );

  return User;
};