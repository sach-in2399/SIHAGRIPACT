const User = require("../models/User");
const NegotiateForm = require("../models/NegotiateForm");

exports.createNegotiateForm = async(req,res)=>{
    try{
         const {CropType , InitialPriceOffered , CounterOffer} = req.body;
         const userId = req.user.id;
         const user = await User.findById(userId);
         const Username = user.Username;
         if(!Username){
           return res.status(400).json({
            success:false,
            message:"User not found"
           });
         }

         if(!CropType ||!InitialPriceOffered ||!CounterOffer ){
           return res.status(400).json({
            success:false,
            message:"Fill all fields"
           });
         }

         const negotiateform = await NegotiateForm.create({
            Username:Username,
            CropType,
            InitialPriceOffered,
            CounterOffer,
            // Comments
         })

         const updateUser = await User.findByIdAndUpdate(userId,
            {
                $push:{
                    NegotiateForm:negotiateform._id,
                },
            },{new:true}
         );
         console.log("UpdateUserDetails" , updateUser);

         return res.status(200).json({
            success:true,
            message:"Creation of negotiative form is successfull",
            data:negotiateform
         });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Some error while creation of negotiative form",
            error:error.message
        });

    }
};

exports.deleteNegotiateForm = async(req,res)=>{
    try{
        const userId = req.user.id;
        const NegotiateFormId = req.body;
        if(!NegotiateFormId){
         return res.status(400).json({
            success:false,
            message:"Unable to find form Id",
         });
        }

        await NegotiateForm.findByIdAndDelete(NegotiateFormId);

        const updateUser = await User.updateMany({_id:userId},
            {
                $pull:{
                    NegotiateForm:NegotiateFormId,
                }
            },{new:true}
        );
    }
    catch(error){
        console.log(error);
      return res.status(500).json({
        success:false,
        message:"Some error while deletion in NergotiateForm",
        error:error.message,
      })
    }
}

exports.showAllNegotiateForm = async(req,res)=>{
    try{
        const userId = req.user.id;
        if(!userId){
          return res.status(400).json({
            success:false,
            message:"userID not found",
          });
        }

        const details = await User.findById(userId).populate("NegotiateForm");
        return res.status(200).json({
            success:true,
            message:"Fetching all form are successfull",
            data:details
        });
    }
    catch(error){
      console.log(error);
      return res.statu(500).json({
        success:false,
        message:"Some error while fetching data"
      });
    }
}
