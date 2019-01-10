const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
  name: {
    type: String
  }
},{
    collection: 'product'
});

module.exports = mongoose.model('Product', Product);
