const mongoose = require("mongoose");
require("dotenv").config();

const UserSchema = new mongoose.Schema({
    Username:{
      type:String,
      required:true,
      unique:true
    },
    Email:{
     type:String,
     required:true
    },
    PhoneNumber:{
      type:Number,
      required:true
    },
    Password:{
        type:String,
    },
    ConfirmPassword:{
        type:String
    },
    ContractsForm:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"CreateContract"
        }
    ],
    NegotiateForm:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"NegotiateForm"
        }
    ]
});

module.exports = mongoose.model("User" , UserSchema);
