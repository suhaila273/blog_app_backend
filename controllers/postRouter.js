const express=require("express")

const router=express.Router()

const postModel=require("../models/postModel")

router.post("/addpost",async(req,res)=>{
    let data=req.body
    let post=new postModel(data)
    let result=await post.save()
    res.json({
            status:"success"
        })
})

//TO get the userid as its name we have to populate the collections
//in populate we will specify which content we need from the signup collection eg:name
//-_id so that it wont display

router.get("/viewall",async(req,res)=>{
    let result=await postModel.find()
    .populate("userId","name mobile address  -_id" )
    .exec()
    res.json(result)
})

module.exports=router