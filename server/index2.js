//log maintain
const http=require("http")
const fs=require("fs")
const url=require("url")

const myServer=http.createServer((req , res)=>{
    const log = `${Date.now()} : ${req.method} ${req.url} new request received \n`

    if(req.url === '/favicon.ico'){
        return res.end();
    }
    const myurl=url.parse(req.url,true)
    console.log(myurl)

    

    fs.appendFile("log.txt", log , (err, data)=>{
        switch(myurl.pathname){
            case '/':
                if(req.method === 'GET'){
                    res.end("HomePage")
                }
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
                break;
            case '/signup':
                if(req.method==='GET') res.end("this is an form component of html")
                if(req.method==="POST"){
                    //DB QUERY
                    res.end("success")
                }
                break;
            default:
                res.end("404 not found")

        }
    })
})

myServer.listen(8000,()=>{
    console.log("server started");
})