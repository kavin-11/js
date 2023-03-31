const http= require('http');
url= require('url');
http.createServer((req,res)=>{
    
    console.log(req.url);
    var w= url.parse(req.url,true).query;
    console.log(w);
    console.log(w.t1);
    console.log(w.t2);
    var a = Number(w.t1);
    var b = Number(w.t2);
    var area = a*b;
    res.write("Area of the rectangle is "+area);
    res.end();
}).listen(8080);