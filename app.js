const express= require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const signupRoute=require("./controllers/signupRouter")
const postRoute=require("./controllers/postRouter")

const app=express()

app.use(express.json())
app.use(cors())

//connecting to monngodb
mongoose.connect("mongodb+srv://suhaila:suhaila273@cluster0.azy349s.mongodb.net/blogDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)


app.use("/api/signup",signupRoute)

app.use("/api/post",postRoute)

app.listen(3001,()=>{
    console.log("server running")
})