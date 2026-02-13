const sendEmail=require("../mailer.js")
let emailFun=async (req,res)=>{
    // console.log(req.body)
    sendEmail(req.body.data)
    res.send({message:"mail sent"})
}

module.exports=emailFun;