const express = require("express");
const Router = express.Router();

const{UpdateAddress , changePassword} = require("../controllers/updateInfo");
const{auth} = require("../middlewares/auth");

Router.post("/updateAddress" ,auth, UpdateAddress);
Router.post("/changePassword" ,auth, changePassword);
// Router.post("/changePassword" , auth , changePassword);

module.exports = Router;