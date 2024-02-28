//log maintain
const http=require("http")
const fs=require("fs")
const url=require("url")

const myServer=http.createServer((req , res)=>{
    const log = `${Date.now()} : ${req.url} new request received \n`

    const myurl=url.parse(req.url,true)
    console.log(myurl)

    fs.appendFile("log.txt", log , (err, data)=>{
        switch(myurl.pathname){
            case '/':
                res.end("HomePage")
                break;
            case '/about':
                const username=myurl.query.myname
                res.end(`hii ${username}`)
                break;
            case '/contact':
                res.end("9584769852")
                break;
            case '/search':
                const search=myurl.query.search_query
                res.end("here are your results" + search)
            default:
                res.end("404 not found")

        }
    })
})

myServer.listen(8000,()=>{
    console.log("server started");
})