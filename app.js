const express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
ejs = require("ejs"),
passport = require("passport"),
passportLocalMongoose = require("passport-local-mongoose"),
passportLocal = require("passport-local"),
expressSession = require("express-session")({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}),
methodOvveride = require("method-override");
const index = require("./routes/index");
const webshop = require("./routes/webshop");
const userCP = require("./routes/userCP")
router = express.Router();
const fetch = require('node-fetch');
const User = require('./models/user');


app.use(express.static(__dirname + "/public/"));
app.use("/index", index);
app.use("/webshop", webshop);
app.use("/userCP", userCP);
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/myapp", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.get("/", (req,res) => {
    res.redirect("/index");
})

// TEST


app.listen(3000, function () {
    console.log("Server on 3000");
  });