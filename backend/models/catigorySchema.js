const mongoose = require("mongoose");
const catigorySchema = new mongoose.Schema({
   
    title: {type :String },
    
})

module.exports =mongoose.model("catigory" , catigorySchema);
