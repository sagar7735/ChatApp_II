

const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const createTokenSaveCookie = require("../jwt/genearateToken");

const router = express.Router();

// Signup Route
const signup = async (req, res) => {
    try {
        const { fullname, email, password, confirmpassword } = req.body;

        if (!fullname || !email || !password || !confirmpassword) {
            return res.status(400).json({ error: "All fields are required" });
        }

        if (password !== confirmpassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ fullname, email, password: hashedPassword });
        await newUser.save();

        createTokenSaveCookie(newUser._id, res); // set token as cookie

        res.status(201).json({
            message: "User created successfully",
            newUser: {
                _id: newUser._id,
                email: newUser.email,
                fullname: newUser.fullname,
            },
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};

// Login Route
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        const foundUser = await User.findOne({ email });
        if (!foundUser) {
            return res.status(404).json({ error: "User not found" });
        }

        const match = await bcrypt.compare(password, foundUser.password);
        if (!match) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        createTokenSaveCookie(foundUser._id, res); // set token as cookie

        res.status(200).json({
            message: "Login successful",
            newUser: {
                _id: foundUser._id,
                email: foundUser.email,
                fullname: foundUser.fullname,
            },
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};

// Logout Route
const logout = async (req, res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({ message: "User logged out successfully" });
        // window.location.reload
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};


const allUser= async (req,res)=>{
    try{
        const loggedInUser=req.user._id;
         const filterUser=await User.find({_id:{$ne:loggedInUser}}).select("password")
 res.status(200).json({
message:"All users",
filterUser,
 })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message:"Users not geting"
        })
    }


}

module.exports = { signup, login, logout,allUser };


