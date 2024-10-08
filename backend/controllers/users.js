const express = require('express');
const userModel = require('../models/userSchema');
const bcrypt = require("bcrypt");
const jwt  =require('jsonwebtoken')

const SECRET = process.env.SECRET;
const EXP_TIME = process.env.EXP_TIME;
const register = (req,res )=>{
    const {firstName,lastName,email,mobilePhone,password,country,role} = req.body;

    const user = new userModel({firstName,lastName,email,mobilePhone,password,country,role});


    user.save().then((response) =>{
        res.status(200).json({sucsess: true, message: "Account created", auther: response });
    }).catch((err) =>{
        
        console.log(err);
        
        res.status(500).json({ sucsess: false, message: "The email already exists" })
    })
}

//Login user 


const loginUser =  async (req,res)=>{
    console.log("Login");
    const {email,password} = req.body;
   
    try {
        const user = await userModel.findOne({email});
        console.log("email",email);
        console.log("pass",password);
        
        
                if(user){
                    console.log("user found");
                    
            const hashing = user.password;

            const passIseq =await bcrypt.compare(password,hashing);

            if(passIseq){
                const payload ={
                    user_Id : user.user_id,
                    country : "jordan",
                    role : "ADMIN",
                    permissions : ["Delete Item"]
                }
                const options={
                    expiresIn :EXP_TIME
                }
                const token = jwt.sign(payload,SECRET,options);
                res.status(200).json({ success: true, message: "Login Successfully", token: token})
            }
        }
        else{
            res.status(401).json({success: false, message:"The email doesn’t exist or the password you’ve enter incorrect" });

        }
        
    } 
    catch (err) {
        console.log(err);
    
    res.status(500).json(err);
    }

   
    
}
module.exports = {register,loginUser};