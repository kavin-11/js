http = require('http');
url = require('url');
querystring = require('querystring');
var qs,name,email;
http.createServer(function (req,res){
    var data1 = '';
    req.on('data',function(chunk){
        console.log(chunk);
        data1 += chunk;
        console.log("Data is string format"+data1);
    });
    req.on('end',function (){
        qs = querystring.parse(data1);
        console.log(qs);
        name = qs['username'];
        email = qs['email'];
        res.write('Hello'+name+'your mail id'+email);
        res.end();
    });
}).listen(8055);
console.log('Server started..');