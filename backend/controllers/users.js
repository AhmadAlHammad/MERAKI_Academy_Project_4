const express = require("express");
const userModel = require("../models/userSchema");
const cartModel = require("../models/cartSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;
const EXP_TIME = process.env.EXP_TIME;
const register = (req, res) => {
  const { firstName, lastName, email, mobilePhone, password, country, role } =
    req.body;

  const user = new userModel({
    firstName,
    lastName,
    email,
    mobilePhone,
    password,
    country,
    role,
  });

  user
    .save()
    .then((response) => {
   
      console.log(response._id);
      const newCart = new cartModel({ userId: response._id });
      newCart
        .save()
        .then((result) => {
          res
          .status(200)
          .json({ sucsess: true, message: "Account created", user: response });
        })
        .catch((err) => {
          console.log(err);

          res.status(500).json({ sucsess: false, message: "Cant create Cart" });
        });
    })
    .catch((err) => {
      console.log(err);

      res
        .status(500)
        .json({ sucsess: false, message: "The email already exists" });
    });
};

//Login user

const loginUser = async (req, res) => {
  console.log("Login");
  const { email, password } = req.body;

  try {
    const user = await userModel
      .findOne({ email })
      .populate("role", "-_id -__v");
    console.log("email", email);
    console.log("pass", password);

    if (user) {
      console.log("user found");

      const hashing = user.password;

      const passIseq = await bcrypt.compare(password, hashing);

      if (passIseq) {
        const payload = {
          user_Id: user.user_id,
          country: "jordan",
          role: "ADMIN",
          permissions: ["AddTocart"],
        };
        const options = {
          expiresIn: EXP_TIME,
        };
        const token = jwt.sign(payload, SECRET, options);
        res
          .status(200)
          .json({ success: true, message: "Login Successfully", token: token });
      }
    } else {
      res
        .status(401)
        .json({ success: false, message: "The email or password is Wrong" });
    }
  } catch (err) {
    console.log(err);

    res.status(500).json(err);
  }
};

const getuserById = (req, res) => {
  const { id } = req.params;
  employeeModel
    .findById(id, "-__v")
    .populate("role", "-__v -_id ")
    .then((result) => {
      if (!result) {
        res.status(404).json({
          status: false,
          message: "user not found",
        });
      } else {
        res.status(200).json({
          success: true,
          message: `The user with the id :${id}`,
          employee: result,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({ sucess: false, message: error.message });
    });
};

module.exports = { register, loginUser, getuserById };
