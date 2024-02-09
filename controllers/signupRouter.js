const express = require("express")

const router=express.Router()
const signupModel =require("../models/signupModel")

const bcrypt=require("bcryptjs")

hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/add",async(req,res)=>{
   // let data=req.body
   
    let {data}={"data":req.body}
    let password=req.body.password
    /*hashPasswordGenerator(password).then(
        (hashedPassword)=>{
            console.log(hashedPassword)
            data.password=hashedPassword
            console.log(data)
            let signup=new signupModel(data)
    let result = signup.save()
    res.json(
        {status:"success"}
    )
        }

    )*/
    const hashedPassword=await hashPasswordGenerator(password)
    data.password=hashedPassword
    let signup=new signupModel(data)
    let result=await signup.save()
    res.json({
        status:"success"
    })
})

router.post("/login",async(req,res)=>{
    let input=req.body
    let email=req.body.email
    let data=await signupModel.findOne({"email":email})
    if(!data){
        return res.json(
            {
                status:"invalid email id"
            }
        )
    }
    console.log(data)
    let dbPassword=data.password
    let inputPassword=req.body.password
    console.log(dbPassword)
    console.log(inputPassword)
    const match=await bcrypt.compare(inputPassword,dbPassword)
    if(!match)
    {
        return res.json(
            {
                status : "incorrect password"
            }
        )
    }
    res.json({
        status : "success"
    })
})


module.exports=router
