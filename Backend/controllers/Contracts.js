const User = require("../models/User");
const Contracts = require("../models/Contracts");

exports.createContracts = async(req,res)=>{
    try{
      const {CropType , Quantity, DeliveryDate ,PricePerKg,TermsAndConditions } = req.body;
      const userId = req.user.id;
      if(!userId){
         return res.status(400).json({
            success:false,
            message:"FarmerId not found",
         });
      }
      const user = await User.findById(userId);
      const Username = user.Username;

      if(!Username){
         return res.status(400).json({
            success:false,
            message:"Farmer Username not found"
         });
      }
      
      if(!CropType ||!Quantity ||!DeliveryDate ||!PricePerKg ||!TermsAndConditions){
           return res.status(500).json({
            success:false,
            message:"All fields are mandatory"
           });
      }

      const contract = await Contracts.create({
        Username:Username,
        CropType,
        Quantity,
        DeliveryDate,
        PricePerKg,
        TermsAndConditions
      });

      const updateUser = await User.findByIdAndUpdate(userId,
         {
            $push:{
                ContractsForm:contract._id,
            }
         },{new:true}
      );

      return res.status(200).json({
        success:true,
        message:"Creation of contract is successfull",
        data:contract
      })
    }
    catch(error){
      console.log(error);
      return res.status(500).json({
        success:false,
        message:"Some error while creating Contract",
        error:error.message
      });
    }
};

exports.deleteContracts = async(req,res)=>{
    try{
       const {contractId} = req.body;
       const userId = req.user.id;
       if(!contractId){
          return res.status(400).json({
            success:false,
            message:"ContractId not found",
          });
       }
       
       await Contracts.findByIdAndDelete(contractId);

       await User.updateMany({_id:userId},
        {
            $pull:{
                ContractsForm:contractId
            }
        },{new:true}
       );
       
       return res.status(200).json({
        success:true,
        message:"Deletion of contract is successfull"
       });
    }
    catch(error){
      console.log(error);
      return res.status(500).json({
        success:false,
        message:"Some error while deletion of Contracted form",
        error:error.message
      });
    }
};

exports.showAllContracts = async(req,res)=>{
    try{
        const userId = req.user.id;
        if(!userId){
          return res.status(400).json({
            success:false,
            message:"User Id not found",
          });
        }
        const userDetails = await User.findById(userId).populate("ContractsForm");
        // const contractsId = userDetails.ContractsForm;

        return res.status(200).json({
            success:true,
            message:"Fetching of Contracts are successfull",
            data:userDetails
        });
    }
    catch(error){
      console.log(error);
      return res.status(500).json({
        success:false,
        message:"Some error while fetching data",
        error:error.message
      });
    }
}