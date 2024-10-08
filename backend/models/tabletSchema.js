const mongoose = require("mongoose");
const tabletSchema = new mongoose.Schema({
    title : {type : String},
    url:{type:String},
    modelNumber : {type : String},
    brand  : {type : String},
    capacity : {type : String},
    color  : {type : String},
    rate:{type : String},
    price:{type :String}
    
})
module.exports = mongoose.model("tablet" , tabletSchema);