const mongoose = require("mongoose");
const catigorySchema = new mongoose.Schema({
   
    title: {type :String },
    brand: {type :String },
    price: {type :String },
    rating: {type :String },
    Url: {type :String },
})

module.exports =mongoose.model("catigory" , catigorySchema);
