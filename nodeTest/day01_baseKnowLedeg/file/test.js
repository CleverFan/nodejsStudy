/**
 * Created by ChengFan on 2016/8/17.
 */
var fs = require("fs");

fs.writeFile('test.txt','hello node',function (err) {
    if(err) throw err;
    console.log('save successfully')
});

/*writeFile函数虽然可以写入文件，但是如果文件已经存在，我们只是想添加一部分内容，
它就不能满足我们的需求了，很幸运，fs模块中还有appendFile函数，
它可以将新的内容追加到已有的文件中，如果文件不存在，则会创建一个新的文件。使用方法如下：*/

fs.appendFile('test.txt','\\n data to append',function (err) {
    if(err) throw err;
    console.log('successful');
});

fs.exists('test.txt',function (exists) {
    console.log(exists ? "ok" : "no");
});

/* rename 还可以用来移动文件
fs.rename('old',"new",function (err) {
    if(err) throw err;
    console.log("success");
})
*/

fs.readFile('test.txt',function (err) {
    if(err) throw err;
    console.log(data);
});

fs.unlink('test.txt', function(err) {
    if (err) throw err;
    console.log('successfully deleted');
});

/*fs.mkdir(路径，权限，回调函数(err));*/
/*
路径：新创建的目录。
权限：可选参数，只在linux下有效，表示目录的权限，默认为0777，表示文件所有者、文件所有者所在的组的用户、所有用户，都有权限进行读、写、执行的操作。
回调函数：当发生错误时，错误信息会传递给回调函数的err参数。
*/

/*fs.rmdir(path, function(err) {
    if (err) throw err;
    console.log('ok');
});*/

/*fs.readdir(目录,回调函数(err,files));*/
