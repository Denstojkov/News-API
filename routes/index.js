const express = require("express");
const { model } = require("mongoose");
const { request } = require("express");
let router = express.Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('560993ce6d0c4888afea6c6f59739272');
const fetch = require('node-fetch');





router.get("/",(req,res) => {
    newsapi.v2.topHeadlines({
        sources: 'bbc-news,the-verge',
        language: 'en',
        pageSize: 12
        
      }).then(response => {

        let data = response.articles;
        console.log(data);
        res.render("index",{data:data})
      });
      
})

module.exports = router;

