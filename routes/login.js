const express = require("express");
const { model } = require("mongoose");
 const passport = require("passport");
const passportLocal = require("passport-local");
let router = express.Router();
const fetch = require('node-fetch');

router.post("/", passport.authenticate("local", {
    successRedirect: "/index",
    failureRedirect: "/unknown"
}), function (req, res) {
	 app.locals.currentUser = req.user;
	console.log(req.user);
	
});


module.exports = router