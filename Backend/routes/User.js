const express = require("express");
const Router = express.Router();

const {signup , signin,logout} = require("../controllers/Auth");
const {auth} = require("../middlewares/auth");

Router.post("/signup",signup);
Router.post("/signin",signin);
Router.get("/logout" ,auth, logout);

module.exports = Router;    