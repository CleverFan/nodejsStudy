var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var MongoStore = require('connect-mongo/es5')(session);

//var routes = require('./routes/index');
//var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
//app.use('/users', users);
//对cookie的测试
mongoose.connect('mongodb://127.0.0.1:27017/sessiontest'); //连接数据库
mongoose.connection.on('open', function () {
    console.log('-----------数据库连接成功！------------');
});
//session持久化
app.use(session({
    secret: "what do you want to do?", //secret的值建议使用128个随机字符串
    cookie: {maxAge: 60 * 1000 * 60 * 24 * 14}, //过期时间
    resave: true, // 即使 session 没有被修改，也保存 session 值，默认为 true
    saveUninitialized: true,
    store: new MongoStore({
        mongooseConnection: mongoose.connection //使用已有的数据库连接
    })
}));
//session非持久化
/*app.use(session({
    secret:'randstring',//secret的值建议使用随机字符串
    cookie:{maxAge: 60*1000*30}// 过期时间（毫秒）
}));*/
app.get('/session', function (req, res) {
    if (req.session.sign) {//检查用户是否已经登录
        console.log(req.session);//打印session的值
        res.send('welecome <strong>' + req.session.name + '</strong>, 欢迎你再次登录');
    } else {
        req.session.sign = true;
        req.session.name = 'https://github.com/CleverFan';
        res.send('欢迎登陆！');
    }
});
app.get('/cookie',function (req,res) {
  if(req.cookies.isVisit){
    console.log(req.cookies);
    res.send("too");
  }else{
    res.cookie('isVisit',1,{maxAge:60*1000});
    res.send("one");
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
