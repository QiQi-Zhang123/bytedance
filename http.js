const http = require('http')
const fs = require('fs')
http.createServer((request,res) => {
    let {url, method} = request
    if(url ==='/'&&method==="GET"){
        fs.readFile('index.html',(err,data) => {
            if(err){
                res.writeHead(500,{
                    'Content-Type':'text/plain;charset = utf8'
                })
                res.end('500错误')
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type','text/plain;charset = utf8')
            res.end(data)
        })
    }else if(url === '/users' && method === 'GET'){
        res.writeHead(200,{
            'Content-Type':'text/plain;charset = utf8'
        })
        res.end(JSON.stringify({name : 'tom'}))
    }
    else if(method === 'GET' && headers.accept.indexOf('image/*') !== -1){
        fs.createReadStream('.'+url).pipe(response)
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-Type','text/plain;charset = utf8')
    }
    // console.log('a request',)
    //best or nothing
    // console.log('hi node')
})
    .listen(3030,() => {
        console.log('start listen')
    })

