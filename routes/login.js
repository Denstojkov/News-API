const express = require("express");
const { model } = require("mongoose");
 const passport = require("passport");
const passportLocal = require("passport-local");
let router = express.Router();
const fetch = require('node-fetch');

router.post("/", passport.authenticate("local", {
    failureRedirect: "/unknown"
}), function (req, res) {
    req.app.locals.currentUser = req.user.username;
    console.log(req.app.locals.currentUser);
    res.redirect("back");

});


module.exports = router