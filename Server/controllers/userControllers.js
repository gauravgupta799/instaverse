import mongoose from "mongoose";
import UserModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const secretKey = "gaurav786";

const signup = async (req, res) => {
    const {username, email, password, confirmPassword} = req.body;
    try {
        const odlUser = await UserModel.findOne({email});
        if(odlUser){
            res.status(403).json({message:"Email already exists."});
        }else{
            if(password !== confirmPassword){
                res.status(403).json({message:"Password or Confirm Password didn't match."})
            }else{
                const hashPassword = await bcrypt.hash(password, 12);
                const result = await UserModel.create({username, email, password:hashPassword});
                const token = jwt.sign({email:result.email, id: result._id}, secretKey, {expiresIn:'12h'});
                res.status(200).json({result, token, message:"User registered successfully!"});
            }
        }
    }catch (error) {
        res.status(500).json({message: error.message});
    }
}

// salt - Level of difficulty to hash the password

const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const oldUser = await UserModel.findOne({email})
        if(!oldUser) {
            return res.status(400).json({message:"Email doesn't exist."})
        }
        const isPasswordValid = await bcrypt.compare(password, oldUser.password)
        !isPasswordValid && res.status(400).json({message:"Invalid email or password."});
        const token = jwt.sign({ email:oldUser, id:oldUser._id }, secretKey, { expiresIn:'12h'});
        res.status(200).json({result: oldUser, token, message:"Logged in successfully!"})
    }catch (error) {
        res.status(500).json({message:"Something went wrong. Please try again!"})   
    }
}

export {signup, login }