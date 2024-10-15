const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
   
    title: {type :String },
    type :{type : String},
    brand: {type :String },
    price: {type :String },
    rating: {type :String },
    Url: {type :String },
    categoryId:{type: mongoose.Schema.Types.ObjectId,ref :'catigory'},
})

module.exports =mongoose.model("Item" , itemSchema);
