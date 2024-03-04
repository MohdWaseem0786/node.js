//log maintain
const http=require("http")
const express=require("express")

const app = express()//instance banaya

app.get("/",(req,res)=>{
    return res.send("Homepage")
})

app.get("/about", (req,res)=>{
    return res.send(" that is about page " + " hayy " + req.query.myname + " my id is " + req.query.userId)  
})


const myServer= http.createServer(app)

app.listen(8000,()=>{console.log("server started")})

