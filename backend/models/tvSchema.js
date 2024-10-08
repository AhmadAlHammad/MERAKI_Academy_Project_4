const mongoose = require("mongoose");

const tvSchema = new mongoose.Schema({
    title :{type:String},
    url:{type:String},
    modelNumber: {type : String },
    brand : {type : String },
    screenSize: {type : String },
    HDMI: {type : String },
    Usb : {type : String },
    rate:{type : String},
    price:{type :String}
})

module.exports = mongoose.model("Tv" , tvSchema)