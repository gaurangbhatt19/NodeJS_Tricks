const express=require("express")

const compression=require("compression")

const app= express()

app.use(compression({
    level: 6,
    threshold: 50 * 1000,
    filter: (req,res)=>{
        
    }
}))

app.get("/",(req,res)=>{
    res.send("NodeJS Code".repeat(100000))
})

app.listen(3030)