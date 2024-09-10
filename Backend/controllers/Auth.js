const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

exports.signup = async(req,res)=>{
    try{
        const {Username , Email, PhoneNumber, Password, ConfirmPassword } = req.body;
        if(!Username || !Email ||!PhoneNumber ||!Password 
                                              ||!ConfirmPassword
        ){
          return res.status(400).json({
            success:false,
            message:"All fields required"
          });
        }

        if(Password !== ConfirmPassword){
          return res.status(400).json({
            success:false,
            message:"Confirm Password is not match"
          });
        }
         
        const existingUser  = await User.findOne({Username});
        if(existingUser){
          return res.status(400).json({
            success:false,
            message:"User already exist",
          });
        }
       
        const hashedPassword = await bcrypt.hash(Password,10);

        const UserDetails = await User.create({
           Username,
           Email,
           Password:hashedPassword,
           PhoneNumber 
        });

        return res.status(200).json({
            success:true,
            message:"User signedUp successfully",
            data:UserDetails
        });
    }
    catch(error){
        console.log(error);
      return res.status(500).json({
        success:false,
        message:"Some error while signedUp",
        error:error.message
      })
    }
};

exports.signin = async(req,res)=>{
    try{
      const {Username , Password} = req.body;

      // console.log("what is the username",Username);
      // console.log("what is the password",Password);

      if(!Username || !Password){
         return res.status(400).json({
            success:false,
            message:"All fields are mandotary",
         });
      }

      const user = await User.findOne({Username});
      if(!user){
        return res.status(400).json({
            success:false,
            message:"Farmer not registered to us, go first signup",
            // error:error.message,
        });
      }

      if(await bcrypt.compare(Password, user.Password)){
           const payload = {
            Email:user.Email,
            Username:user.Username,
            id:user._id
           }

           const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"2h"});
           user.token = token;
           user.Password = undefined;

           console.log("Sign in token",token);

        //    create cookie
        const options = {
            expires:new Date(Date.now()+3*24*60*60*1000),
            httpOnly:true
      }

      res.cookie("token" , token , options).status(200).json({
        success:true,
        message:"User logged in successfully",
        token,
        user
      });

    
    }
   }
   catch(error){
    console.log(error);
    return res.status(500).json({
    success:false,
    message:"Farmer failed to signin, try again later",
    error:error.message
     });
    }
};