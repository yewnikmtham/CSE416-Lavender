const express = require("express");
const router = express.Router();
const { Platforms } = require ("../models");


router.get("/", (req, res) =>{
    res.send("Hello platforms");
});

module.exports = router;