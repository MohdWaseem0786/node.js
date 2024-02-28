const http=require("http")

const myServer=http.createServer((req,res)=>{
    console.log("new request received");
    res.end("hello from the server")
})

myServer.listen(9000,()=>{
    console.log("server started");
})