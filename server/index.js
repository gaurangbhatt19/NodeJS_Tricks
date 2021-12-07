const express=require('express');
const app=express();

const serveIndex=require("serve-index");
app.use("/ftp",express.static("public/ftp"),serveIndex("public/ftp",{icons:true}))

app.listen(3333)