let http = require('http');
let fs = require('fs');
let _ = require('lodash')
let server = http.createServer((req, res)=>{
    // console.log(req.url, req.method);
   const num = _.random(0, 10)
   console.log(num)
    //writing response
 res.setHeader('Content-Type', 'text/html');
 
 let path = './views/';
 switch(req.url){
     case '/' : 
        path += 'index.html';
        res.statusCode = 200;
        break;
     case '/about' : 
        path += 'about.html';
        res.statusCode = 200;
        break;
     case '/about-me' : 
        res.statusCode = 301;
        res.setHeader('Location', '/about');
        res.end();
        break;        
     default:
         path += '404.html' 
         res.statusCode = 400;



 }

   fs.readFile(path, (err, data)=>{
       if(!err){
           res.write(data);
           res.end() //res.end(data)
       }else{
           console.log(err);
           res.end();
       }
   })

})

server.listen(3000, 'localhost', ()=>{
    console.log("listening for request on port 3000")
})