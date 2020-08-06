const express = require("express");
const mongoose = require("mongoose");
 const passport = require("passport");
const passportLocal = require("passport-local");
const bodyParser = require('body-parser');
let router = express.Router();
const fetch = require('node-fetch');
let User = require("../models/user");


router.get("/", (req,res) =>{
	res.render("register");
})

router.post("/", (req,res) =>{
		let newUser = new User({
			 id: mongoose.Types.ObjectId(),
			username: req.body.username,
			email: req.body.email,
			passReqToCallback:true
		});
	console.log(newUser);
	User.register(newUser, req.body.password,function(err,user){
		if(err){
			console.log(err)
			res.redirect("back");
		}else{
			console.log(user);
			res.redirect("back");
		}
	})
		   })

module.exports = router