const express         = require('express');
const app             = express();
const productsRoutes  = express.Router();

let Product = require('./model/Product');

productsRoutes.route('/').get(function(req, res) {
  Product.find(function (err, product){
    res.json(product);
  })
});


productsRoutes.route('/add').post(function(req, res) {
  let product = new Product(req.body);
  product.save().then(() => {
    res.status(200).json('product added');
  })
});

module.exports = productsRoutes;
