let express = require('express');
let app = express();
let router = require('./router/main')(app);
let port = process.env.PORT || 3000;

//어떤식으로 통신을 하는지 정의 router의 메인이 움직이는 3000번까지 움직인다라고 정의
//backend단 시작할 수 있는 환경설정

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

//views안에 정의해놓은 html을 정의해놓고서 frontend단을 해놔라
//view의 해당되는 추가적인 기능들은 public안에 정의
//frontend단의 정의

let server = app.listen(port, function(){
    console.log("Express server has started on port "+ port)
});

//네트워크단의 정의 listen 서버들어오면 이벤트를 들어라 하는 
//console 콘솔로그 뜨는것 정의 , 동작