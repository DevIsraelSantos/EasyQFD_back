const { Sequelize } = require("sequelize");
const config = require("../../config/database");

const User = require("./User");
const connection = new Sequelize(config);

//Models
User.init(connection);


module.exports = connection;
