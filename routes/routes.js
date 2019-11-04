const express = require("express");

const { Mensajes } = require("../models");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/form", async (req, res) => {
  try {
    console.log(req.body);

    const data = await Mensajes.create(req.body);
    console.log(data);
    res.json({
      data: data.dataValues,
      mensaje: "mensaje enviado con exito"
    });
  } catch (error) {
    throw error;
  }
});
module.exports = router;
