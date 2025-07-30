// import express from "express";
// import dotenv from "dotenv";

const express = require("express");
const cookieParser=require("cookie-parser")
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cors=require("cors")
const User = require("./models/User.model.js")
const userRoutes = require("./routes/user.route.js");
dotenv.config()
const app = express();
app.use(express.json())
//app.use(cors())
app.use(cookieParser)

app.use(cors({
  origin: "http://localhost:5173", // exact origin of your Vite dev server
  credentials: true
}));
const PORT = process.env.PORT || 4001;

try {
    mongoose.connect(process.env.Db)
    console.log("Db Connected")

} catch (error) {
    console.log(error

    )
}


// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

app.use("/user",userRoutes)
// app.use("/login",userRoutes)











app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})




//  const express = require("express");
//  const app=express()
// const port=5001;

// app.listen(port,()=>{
//     console.log("server is listening")
// })

// app.get("/user",(req,res)=>{
//     res.send("skjdn")
// })



