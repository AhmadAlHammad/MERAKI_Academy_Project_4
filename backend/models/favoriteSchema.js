const mongoose = require("mongoose");

const favoriteSchema  = new mongoose({
    title : {type : String},
    price : {type : String},
    rete  : {type : String},
    describtion: {type : String},

})

module.exports =mongoose.model("Favorite " , favoriteSchema);
