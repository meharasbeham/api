const mongoose=require('mongoose')
const schema=mongoose.schema
let categoryschema=schema({
    studentname:{
        type:string
    },
    mentorname:{
        type:string
    },
    collection:'categories'
});
module.exports=mongoose.module('categoryschema',categoryschema)