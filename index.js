const express=require("express")
const app=express();

app.use(express.json)
app.use(cors())

const mail_app=require("./API/mail-api.js")
app.use('/email-api',mail_app);

app.use((err,req,res,next)=>{
    res.send({message:"error occured",payload:err})
})

app.listen(3000,()=>console.log("mailer service is running on port 3000"));