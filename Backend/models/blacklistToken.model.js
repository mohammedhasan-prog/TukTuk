const mongoose=require('mongoose');


const blacklistTokenSchema=new mongoose.Schema({
    token:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:86400
    }
},{timestamps:true});
const blackListTokenModel=mongoose.model('BlacklistToken',blacklistTokenSchema);
module.exports=blackListTokenModel