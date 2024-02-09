const express = require("express")

const router=express.Router()


const signupModel =require("../models/signupModel")

router.post("/add",async(req,res)=>{
    let data=req.body
    let signup=new signupModel(data)
    let result =await signup.save()
    res.json(
        {status:"success"}
    )
})


module.exports=router
