const jwt=require("jsonwebtoken");
const User =require("../models/User.model.js");

const secureRoute=async (req,res,next)=>{
    try{
const token=req.cookies.jwt;
if(!token){
    return res.status(401).json({error:"No tojen, authorization denied"})
}
const decoded=jwt.varify(token,process.env.JWT_TOKEN)
   if (!decoded){
    return res.status(401).json({error:"Invalid token"})
   }
         const user =await User.find(decoded.userId).select("password");
         if(!user){
                return res.status(401).json({error:"No user found"})

         }
         req.user=user;
         next()
} catch(error){
        console.log("error in secureRoute:",error)
        res.status(500).json({error:"internal server error"})
    }
}

module.exports=secureRoute;