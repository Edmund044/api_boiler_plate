const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());


module.exports(app);