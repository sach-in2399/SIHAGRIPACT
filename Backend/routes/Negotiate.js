const express = require("express");
const Router = express.Router();

const {createNegotiateForm,deleteNegotiateForm,showAllNegotiateForm} = require("../controllers/NegotiateForm");
const {auth} = require("../middlewares/auth");

Router.post("/createNegotiateForm",auth,createNegotiateForm);
Router.delete("/deleteNegotiateForm",auth,deleteNegotiateForm);
Router.get("/showAllNegotiateForm" ,auth,showAllNegotiateForm);

module.exports = Router;