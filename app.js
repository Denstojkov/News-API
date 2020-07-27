const express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
ejs = require("ejs"),
methodOvveride = require("method-override");
const index = require("./routes/index")
router = express.Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('560993ce6d0c4888afea6c6f59739272');

app.use(express.static(__dirname + "/public/"));
app.use("/index", index);
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/myapp", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.get("/", (req,res) => {
    res.redirect("/index");
})

app.listen(3000, function () {
    console.log("Server on 3000");
  });