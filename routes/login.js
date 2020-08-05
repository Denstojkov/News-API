const express = require("express");
const { model } = require("mongoose");
const { request } = require("express");
let router = express.Router();
const fetch = require('node-fetch');


router.get("/", (req,res) =>{
		   res.render("login");
		   })

module.exports = router