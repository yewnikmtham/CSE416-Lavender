const express = require("express");
const router = express.Router();
const { Users } = require ("../models");


router.get("/", (req, res) =>{
    res.send("Hello users");
});

module.exports = router;