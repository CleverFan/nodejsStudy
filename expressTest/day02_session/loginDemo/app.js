var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var  session = require('express-session');

var routes = require('./routes/index');
var user = require('./user.json');

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

// app.use('/', routes);
// app.use('/users', users);
app.use(session({
  secret: 'secret', //为了安全性的考虑设置secret属性
  cookie: {maxAge: 60 * 1000 * 30}, //设置过期时间
  resave: true, // 即使 session 没有被修改，也保存 session 值，默认为 true
  saveUninitialized: false, //
}));

app.get('/', function (req, res) {
  if (req.session.sign) {//检查用户是否已经登录，如果已登录展现的页面
    console.log(req.session);//打印session的值
    res.render('sign.ejs', {session:req.session});
  } else {//否则展示index页面
    res.render('index.ejs', {title: 'index'});
  }
});

//登录表单处理
app.post('/sign', function (req, res) {
  //登录的数据和user.json中的数据进行对比
  if(!user[req.body.user]){
    res.end("input wrong");
  }
  if (req.body.password != user[req.body.user].password || !user[req.body.user]) {
    res.end('sign failure');
  } else {
    req.session.sign = true;
    req.session.name = user[req.body.user].name;
    res.send('welecome <strong>' + req.session.name + '</strong>，<a href="/out">登出</a>');
  }
});

app.get('/out', function(req, res){
  req.session.destroy();
  res.redirect('/');
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
