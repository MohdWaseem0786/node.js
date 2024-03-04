const express = require("express")
const users=require("./MOCK_DATA.json")
const fs=require("fs")
const app=express()//instance8
const PORT=8000


app.use(express.urlencoded({extended:false}))

app.get("/users",(req,res)=>{
    const html = `
    <ul>
    ${users.map((users)=>`<li>${users.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);

})

//rest api
app.get("/api/users",(req,res)=>{
    return res.json(users)
})

app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id === id)
    res.json(user);
})

app.post("/api/users",(req,res)=>{
    const body=req.body;
    // console.log("Body see data aa gya",body)
    users.push({...body, id:users.length+1})//body ka data frontend se backend me push 
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({status:"success", id:users.length})
    })
    
})

app.patch((req,res)=>{
    return res.json({status : "pending"})
})

app.delete((req,res)=>{
    return res.json({status : "pending"})
})


// app.route("/api/users/:id",()=>{
//     const id = Number(req.params.id);
//     const user = users.find((user)=>user.id === id)
//     res.json(user);
// }).patch((req,res)=>{
//     return res.json({status : pending})
// }).delete((req,res)=>{
//     return res.json({status : pending})
// })



app.listen(PORT,()=>{
    console.log("server started");
})