const User = require("../models/User");


exports.UpdateAddress = async(req,res)=>{
   try{
      const userId = req.user.id;
      const {Address} = req.body;

      if(!userId){
         return res.status(400).json({
            success:false,
            message:"User not found, go login and try again",
         })
      }

      if(!Address){
        return res.status(400).json({
            success:false,
            message:"Address is not found"
        })
      }

      const update = await User.findByIdAndUpdate(userId,
        {
           Address:Address,
        },{new:true}
      )

      return res.status(200).json({
        sucess:true,
        message:"Updation of address is successfull ",
        data:update
      })
   }
   catch(error){
    console.log(error);
    return res.status(500).json({
        success:false,
        message:"Some thing wrong while updation",
        error:error.message
    });

   }
}

exports.changePassword = async (req, res) => {
    try {
        const userId = req.user.id;
        const { newPassword } = req.body;

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "User not found, please log in again",
            });
        }

        if (!newPassword) {
            return res.status(400).json({
                success: false,
                message: "New password is required",
            });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update the user's password in the database
        await User.findByIdAndUpdate(userId, { Password: hashedPassword }, { new: true });

        return res.status(200).json({
            success: true,
            message: "Password updated successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error updating password",
            error: error.message,
        });
    }
};