const express=require("express")
const mail_app=express.Router();
const expressasynchandler=require("express-async-handler")

const emailFun=require("../Controller/mail_controller.js")
mail_app.post("/send-email",expressasynchandler(emailFun));

module.exports=mail_app;
