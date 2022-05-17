const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.write('<p> Hello Server</p>');
    res.end('<p> Hello RyeoRyeo</p>');
}).listen(8080);

server.on('listening',()=>{
    console.log('8080 포트에서 서버 대기중입니다.');
})
server.on('error',(error)=> {
    console.log(error);
})

// 리슨을 하는 경우에는 터미널 하나를 잡아먹어 다른 동작을 할 수 없게 된다.

const server1 = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.write('<p> Hello Server</p>');
    res.end('<p> Hello RyeoRyeo</p>');
}).listen(8081);

// 이렇게 하면 동시에 두 개는 가능하나 이런 경우는 많이 없다.