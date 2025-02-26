const userModel=require('../models/user.model');
const userService=require('../services/user.service');
const {validationResult}=require('express-validator');
const blackListTokenModel=require('../models/blacklistToken.model');
const { set } = require('../app');

module.exports.registerUser=async (req,res,next)=>{
  const errors=validationResult(req);
  if(!errors.isEmpty){
    return res.status(400).json({errors:errors.array()})
  }

  const {fullname,email,password}=req.body;
  const isUserExist=await userModel.findOne({email});
  if(isUserExist){
    return res.status(400).json({message:'User already exists'});
  }
   
  const hashPassword=await userModel.hashPassword(password,11);

  const user=await userService.createUser({
    firstname:fullname?.firstname,
    lastname:fullname?.lastname,
    email,
    password:hashPassword
  })

  const token= user.generateAuthToken();
  res.cookie('token',token,{httpOnly:true});

  res.status(201).json({token,user});
}

module.exports.loginUser=async (req,res,next)=>{

  const errors=validationResult(req);
  if(!errors.isEmpty){
    return res.status(400).json({errors:errors.array()})
  }

  const {email,password}=req.body;

  const user=await userModel.findOne({email}).select('+password');
  if(!user){
return  res.status(401).json({message:'Invalid email and password'});
  }
  const isMatch=await user.comparePassword(password);

  if(!isMatch){
    return res.status(401).json({message:'Invalid email and password'});
  }

  res.cookie('token',user.generateAuthToken(),{httpOnly:true});
  res.status(200).json({token:user.generateAuthToken(),user});




}

module.exports.getUserProfile=async (req,res,next)=>{
  res.status(200).json({user:req.user});
}

module.exports.logoutUser=async (req,res,next)=>{   
  res.clearCookie('token');
  const token=req.cookies.token || req.headers.authorization.split(' ')[1];
await blackListTokenModel.create({token});

  res.status(200).json({message:'Logged out successfully'});
}