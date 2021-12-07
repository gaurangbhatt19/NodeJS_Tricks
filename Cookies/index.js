const express= require("express")
const cookie_parser=require("cookie-parser")

const app= express()

app.use(cookie_parser())
app.get("/",(req,res)=>{
    res.send("NodeJS")
})

app.get("/cookies",(req,res)=>{
    // res.setHeader("set-cookie",'nodejs_cookie=cookie')
    res.cookie("nodejs","cookie",{
        // expires:new Date("25 November 2021"),
        // httpOnly:true,
        secure:true,
        domain:localhost
    })
    res.cookie("foo","bar",{
        maxAge: 10000
    })
   
    res.send("Nodejs Cookie")

    
})

app.get("/get_cookie",(req,res)=>{
    console.log(req.cookies) 
    // res.clearCookie("foo")
    res.send(req.cookies)
})
app.listen(3333)