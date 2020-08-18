const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const Products = new Schema({
    name: String,
    price: String,
    description: String
});
 
 
module.exports = mongoose.model('Products', Products);