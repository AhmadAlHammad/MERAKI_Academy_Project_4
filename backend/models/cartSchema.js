const mongoose = require("mongoose");


const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items:{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
      
    
      });
  
  module.exports = mongoose.model('Cart', cartSchema);