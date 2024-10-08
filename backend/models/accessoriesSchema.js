const mongoose = require("mongoose");

const accessoriesSchema = new mongoose.Schema({
    title : {type : String},
    url:{type : String},
    modelNumber : {type : String},
    brand  : {type : String},
    type  : {type : String},
    color  : {type : String},
    rate:{type : String},
    price:{type :String}
})

module.exports = mongoose.model("accessories" , accessoriesSchema);