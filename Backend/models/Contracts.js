const mongoose = require("mongoose");
require("dotenv").config();

const ContractSchema = new mongoose.Schema({
    Username:{
        type:String,
    },
   CropType:{
     type:String,
    //  required:true
   },
   Quantity:{
    type:Number,
    required:true
   },
   DeliveryDate:{
    type:Date,
    default:Date.now()
   },
   PricePerKg:{
    type:Number,
    required:true,
   },
   TermsAndConditions:{
    type:String,
   }

});

module.exports = mongoose.model("CreateContract" , ContractSchema);