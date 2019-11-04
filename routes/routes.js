const express = require("express");

const { Mensajes } = require("../models");
const validateForm = require("../services/validateForm");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/form", async (req, res) => {
  try {
    const validate = validateForm(req.body);

    if (validate.length > 0) {
      res.status(400).json({
        status: "error",
        data: validate
      });

    } else {
      const data = await Mensajes.create(req.body);
      res.status(201).json({
        status: "ok",
        data: data.dataValues
      });

    }
  } catch (error) {
    throw error;
  }
});
module.exports = router;
