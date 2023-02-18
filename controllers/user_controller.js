import User from "../model/User.js";
export const getAllUser=async(req,res,next)=>{
    let users;
    try{
        users=await User.find();

    }catch(err){
        const error=new Error("Something went wrong");
        return next(error);
    }
    if(!users){
        return res.status(404).json({
            message:"No user found"
        });
    }
    return res.status(200).json({users});
}