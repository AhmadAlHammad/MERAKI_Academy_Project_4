const mongoose = require ("mongoose");

const laptopSchema = new mongoose.Schema({
    title  : {type : String} ,
    url:{type:String},
    brand : {type : String},
    capacity : {type : String},
    ram : {type : String},
    screenSize : {type : String},
    rate:{type : String},
    price:{type :String}
})
module.exports = mongoose.model("Labtob" , laptopSchema);