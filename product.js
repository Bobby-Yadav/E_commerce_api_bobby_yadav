const mongoose = require('mongoose');

//creating the product schema
const productSchema = new mongoose.Schema({
  name: String,
  quantity: Number
}, {
  versionKey: false
});

//creating a new model called "product"
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
