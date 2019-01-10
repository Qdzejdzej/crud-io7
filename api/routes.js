const express         = require('express');
const app             = express();
const productsRoutes  = express.Router();

let Product = require('./model/Product');

productsRoutes.route('/').get(function (req, res) {
    res.json('get products');
  });


module.exports = productsRoutes;
