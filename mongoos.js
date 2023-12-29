const express=require('express')
const mongoose=require('mongoose')
const app=express()
mongoose.connect('mongodb://localhost:27017/mydb')
app.listen(PORT,(res)=>{
    console.log('start 9000')
});
module.exports=mongoose.module('categoryschema',categoryschem);