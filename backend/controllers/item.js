const express = require("express");

const itemModel = require('../models/itemSchema');

const catigory = (req, res) => {
  itemModel.find() 
        .then((response) => {
            res.status(200).json({
                success: true,
                data: {
                    response, 
                },
            });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ success: false, message: "Error fetching data from models" });
        });
};

    const getCatigoryById = (req, res) => {
        let id = req.params.id;
        itemModel
          .findById(id)
          .populate("title", " title -_id")
          .exec()
          .then((reponse) => {
            if (!reponse) {
              return res.status(404).json({
                success: false,
                message: `The article with id => ${id} not found`,
              });
            }
            res.status(200).json({
              success: true,
              message: `The item ${id} `,
              item: reponse,
            });
          })
          .catch((err) => {
            console.log(err);
            
            res.status(500).json({
              success: false,
              message: `Server Error`,
              err: err.message,
            });
          });
      };
const addProduct = (req, res) => {
  const { title,id,brand, price, rating, Url } = req.body;

  const newProduct = new itemModel({title, id ,brand, price, rating, Url  });
 


  newProduct
    .save()
    .then((product) => {
      res.status(201).json({
        success: true,
        data: {
          product,
        },
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ success: false, message: "Error saving product" });
    });
};

module.exports = { catigory, addProduct ,getCatigoryById};
