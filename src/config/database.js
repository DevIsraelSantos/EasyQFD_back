require('dotenv').config({
  //database
  path: process.env.NODE_TEST ? '.env.test' : '.env'
})

const path = require('path');

module.exports = {


  dialect: 'sqlite',
  storage: path.resolve('src', 'database', process.env.DB_FILE + '.sqlite3'),
  define: {
    //created_at and update_at
    timestamps: true,

    //Nome de tabelas: snake case
    underscored: true,

    //campos de tabela em snake case
    underscoredAll: true,
  },
  // disable logging; default: console.log
  logging: false,

  //Desabilita um warning
  operatorsAliases:1,


}