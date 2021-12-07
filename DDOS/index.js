const express= require('express');
const app=express();
const limitter= require('express-rate-limit')
const rateLimitter=limitter({
    windowMs:2000,
    max:2
})

app.use(limitter({
    windowMs: 5000,
    max: 5,
    message:{
        code: 429,
        message:"Request Limit 2 requests in 2 sec"
    }
}))

app.get("/",(req,res)=>{
res.send("Home");
})


app.get("/login",rateLimitter,(req,res)=>{
    res.send("Login")
})

app.listen(3333)