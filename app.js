const express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
ejs = require("ejs"),
methodOvveride = require("method-override");
const index = require("./routes/index");
const webshop = require("./routes/webshop");
router = express.Router();
const fetch = require('node-fetch');


app.use(express.static(__dirname + "/public/"));
app.use("/index", index);
app.use("/webshop", webshop);
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/myapp", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.get("/", (req,res) => {
    res.redirect("/index");
})

app.get("/", (req,res) => {
    res.redirect("/webshop");
})

app.listen(3000, function () {
    console.log("Server on 3000");
  });