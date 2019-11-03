const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render('index');
});

router.post("/form", (req, res) => {
  res.json({
    data: req.body
  });
});
module.exports = router;
