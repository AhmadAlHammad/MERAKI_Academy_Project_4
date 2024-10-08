const mongoose = require("mongoose");

const cartSchema = new mongoose({
    title  : {type :String },
    price    : {type :String },
    rate   : {type :String },
    describtion: {type :String },
   
})

module.exports = mongoose.model("Cart" , cartSchema);
