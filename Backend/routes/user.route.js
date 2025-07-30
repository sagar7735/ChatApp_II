const express=require("express");
const router=express.Router();
const {signup,login,logout, allUser}=require("../controller/user.controller");
const secureRoute = require("../middleware/secureRoute");
//const {login}=require("../controller/user.controller")
router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)
router.get("/allUsers", allUser)

module.exports=router