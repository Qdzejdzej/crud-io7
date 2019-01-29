const express         = require('express');
const app             = express();
const productsRoutes  = express.Router();

let Product = require('./model/Product');

productsRoutes.route('/product').get(function(req, res) {
  Product.find(function (err, products){
    res.status(200).json(products);
  })
});

productsRoutes.route('/product/:id').get(function(req, res) {
  Product.findById(req.params.id, function (err, product){
    res.status(200).json(product);
  })
});

productsRoutes.route('/product/update/:id').put(function(req, res) {
  Product.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.status(200).json({
      status: 200,
      message: 'Product updated!'
    });
  })
});

productsRoutes.route('/product/delete/:id').delete(function(req, res) {
  Product.findByIdAndRemove(req.params.id).then(() => {
    res.status(200).json({
      status: 200,
      message: 'Product removed!'
    });
  })
});

productsRoutes.route('/product/add').post(function(req, res) {
  let product = new Product(req.body);
  product.save().then(() => {
    res.status(200).json({
      status: 200,
      message: 'Product added!'
    });
  })
});

module.exports = productsRoutes;
