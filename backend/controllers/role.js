const express = require("express");
const roleModel = require("../models/roleSchema");

const createRole = (req, res) => {
  const { role, permissions } = req.body;

  const roleuser = new roleModel({ role, permissions })
    .save()
    .then((response) => {
      res
        .status(200)
        .json({ sucsess: true, message: "Role  Created ", role: response });
    })
    .catch((err) => {
      res.status(500).json("cant add role for user");
    });
};
module.exports = createRole;
