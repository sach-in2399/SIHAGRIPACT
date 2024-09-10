const mongoose = require("mongoose");
require("dotenv").config();

const NegotiateFormSchema = new mongoose.Schema({
    Username:{
        type:String,
    },
    CropType:{
        type:String,
    },
    InitialPriceOffered:{
        type:Number,
    },
    CounterOffer:{
        type:Number,
    },
    Comments:{
        type:String,
    }

});

module.exports = mongoose.model("NegotiateForm" , NegotiateFormSchema);