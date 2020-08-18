const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const Cart = new Schema({
    product: [{ type: Schema.Types.ObjectId, ref: 'Products' }],
    qty: Number

});
 
 
module.exports = mongoose.model('Cart', Cart);