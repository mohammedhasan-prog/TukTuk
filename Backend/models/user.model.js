const mongoose = require("mongoose");
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');





const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
       required: true,
      minlength: [3, "Minimum 3 characters required"]
    },
    lastname: {
      type: String,
    },
  },

  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Minimum 5 characters required"],
  },

  password: {
    type: String,
    required: true,
    select:false
  },
  socketId: {
    type: String,
    default: "",
  },
});


userSchema.methods.generateAuthToken=function(){
    const user=this;
    const token=jwt.sign({_id:user._id},process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword=async function(enteredPassword){
    const user=this;
    return await bcrypt.compare(enteredPassword,user.password);
}


userSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,12);
}

const userModel=mongoose.model('user',userSchema);

module.exports=userModel;
