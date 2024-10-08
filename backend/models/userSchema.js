
const bcrypt = require("bcrypt");

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firstName :{type : String },
    lastName : {type : String },
    email:{type : String , unique : true , required: true},
        mobilePhone : {type : String },
        password :{type : String ,required: true},
    country : {type : String }, 
    role  :{type : mongoose.Schema.Types.ObjectId , ref : "Role"} 

})
 userSchema.pre("save",async function(){
    this.email = this.email.toLowerCase();
    console.log(this.password);
    
    this.password = await bcrypt.hash(this.password, 10);
 })
module.exports = mongoose.model("User",userSchema) 