// const fs = require('fs');
// fs.writeFileSync("hello.js","lerning continued")


//first mathod of import the file
// const { addfn, subfn } = require("./math");


// const math = require("./math")

// console.log(math.addfn(6,9));
// console.log(math.subfn(6,2));

// console.log(addfn(5,5));
// console.log(subfn(9,4));



//2nd mathod of import-------------- 
// const math =require("./math")

// console.log(math.add(9,6));
// console.log(math.sub(9,6));


//3--create a server-----------

// const http = require("http");

// http.createServer((req , res)=>{
//     res.write("hello This is waseem");
//     res.end
// }).listen(4500);

// console.log("hiii");
// console.log("hello");



///file structuring using crud operations-----------

const fs = require("fs")

//sync file create method
// fs.writeFileSync("./test.txt", "hello mitronnn!!!!")
// //async file create method
// fs.writeFile("./test2.txt", "hello guys", (err)=>{})

//sync method to read file
// const res=fs.readFileSync("Contect.txt" , "utf-8")

// console.log(res);

//async method to read file
// fs.readFile("./Contect.txt","utf-8",(err,res)=>{
//     if(err){console.log("contect not found", err)}
//     else{console.log(res);}
// })


//append file sync method

// fs.appendFileSync("./test.txt","\nhiii from ct\n")

//appen file using async

fs.appendFileSync("./test2.txt", new Date().getDate().toLocaleString());

fs.appendFileSync("./test2.txt",`\n ${Date.now()} login kdflskls`)





