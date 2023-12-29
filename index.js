const express=require('express');
const app=express();
app.use(express.json());
const PORT=9000

app.all('/',(req,res)=>{
    try{
        res.status(200).send({
            message:"add data",
        })
        
    }catch(error){
        res.status(500).send({
            message:"server eroor",
            error:error.message
        })
    }
})
app.listen(PORT,()=>console.log(`APP LISTEN ${PORT}`))