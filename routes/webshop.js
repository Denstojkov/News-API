const express = require("express");
const { model } = require("mongoose");
const { request } = require("express");
let router = express.Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('560993ce6d0c4888afea6c6f59739272');
const fetch = require('node-fetch');





router.get("/",(req,res) => {
	res.render("webshop");
})

module.exports = router;
