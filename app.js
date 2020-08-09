const express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
ejs = require("ejs"),
passport = require("passport"),
passportLocalMongoose = require("passport-local-mongoose"),
passportLocal = require("passport-local"),
methodOvveride = require("method-override");
const index = require("./routes/index");
const webshop = require("./routes/webshop");
const userCP = require("./routes/userCP");
const register = require("./routes/register");
const login = require("./routes/login");
const fetch = require('node-fetch');
const User = require('./models/user');
router = express.Router();
expressSession = require("express-session")({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

app.locals.currentUser;

mongoose.connect("mongodb://localhost:27017/myapp", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});





app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })) ;
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(express.static(__dirname + "/public/"));



app.use("/index",index);
app.use("/webshop", webshop);
app.use("/userCP", userCP);
app.use("/register", register);
app.use("/login", login);
app.set("view engine", "ejs");


app.get("/", (req,res) => {
 res.redirect("/index");
})

// TEST


app.listen(3000, function () {
    console.log("Server on 3000");
  });