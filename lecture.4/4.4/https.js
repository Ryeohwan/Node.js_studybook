const https = require('https');
const fs = require('fs');

https.createServer({
  cert: fs.readFileSync('도메인 인증서 경로'),  // 이 3개를 넣어줘야 한다.
  key: fs.readFileSync('도메인 비밀키 경로'), // sync 는 서버에서 쓰면 안되지만 
  ca: [  // sync 는 딱 한 번 시작하거나 시작할 때는 써도 되기에 https 는 서버 시작 전에 인증서 값 넣어줘야 한다.
    fs.readFileSync('상위 인증서 경로'),
    fs.readFileSync('상위 인증서 경로'),
  ], // 인증서를 인증기관에서 가져와야 하는데 인증기관에서 인증을 해줘야 저 cert key ca 를 받는다.
}, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
})
  .listen(443, () => {
    console.log('443번 포트에서 서버 대기 중입니다!');
  });

  // 인증서 안넣으면 인증서에 문제가 있습니다 라는 글이 뜨게 된다.
  // 인증 기관 중 가장 유명한 것은 Let's Encrypt 이다. 무료