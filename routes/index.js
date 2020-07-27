const express = require("express");
const { model } = require("mongoose");
let router = express.Router();

router.get("/",(req,res) => {
    res.render("index",{
        response:response
    });
});

module.exports = router;

