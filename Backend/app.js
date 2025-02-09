const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors=require('cors');
const connectDB=require('./db/db');


dotenv.config();
app.use(cors());
connectDB();

app.get('/',(req,res)=>{
    res.send('hello World')
})


module.exports=app;

