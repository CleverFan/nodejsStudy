module.exports = function ( app ) {
    app.get('/login',function(req,res){
        res.render('login');
    });
 
    app.post('/login',function(req,res){
        var user={
            username:'admin',
            password:'admin'
        }
        if(req.body.username==user.username&&req.body.password==user.password){
            req.session.user = user;
            console.log(user.username);
            res.send(200);
        }else{
            console.log("jhjj");
            req.session.error = "用户名或密码不正确"
            res.send(404);
        }
    });
}