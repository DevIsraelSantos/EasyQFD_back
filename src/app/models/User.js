const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = Sequelize.define('User', {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING 
    });

    return User;

}