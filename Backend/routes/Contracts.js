const express = require("express");
const Router = express.Router();

const {createContracts,deleteContracts,showAllContracts} = require("../controllers/Contracts");
const {auth} = require("../middlewares/auth");

Router.post("/createContracts" , auth ,createContracts);
Router.delete("/deleteContracts" , auth , deleteContracts);
Router.get("/showAllContracts" , auth , showAllContracts);

module.exports = Router;