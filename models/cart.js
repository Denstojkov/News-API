const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const Cart = new Schema({
    product: [{ type: Schema.Types.ObjectId, ref: 'Story' }],
    qty: Number

});
 
 
module.exports = mongoose.model('Cart', Cart);