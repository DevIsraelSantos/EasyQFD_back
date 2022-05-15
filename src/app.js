require('dotenv').config({
    //database
    path: process.env.NODE_TEST ? '.env.test' : '.env'
  })

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const connection =  require('./app/models/index')

class AppController{

    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();

    }

    middlewares(){

        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({
          extended: true
        }));
        this.express.use(cors());
        this.express.use(morgan('dev'));
    }

    routes(){
        this.express.use(require('./routes'));
    }

}

module.exports = new AppController().express