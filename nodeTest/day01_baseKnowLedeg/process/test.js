process.cwd();

process.chdir("");//改变应用程序目录

//console.log 封装了sedout的write()方法
/*console.log = function (d) {
    process.stdout.write(d+'\n');
}*/

process.stdout.write("hhhh"+"\n");

process.stderr.write("error");

process.stdin.on('readable',function () {
    var chunk = process.stdin.read();
    if( chunk !== null){
        process.stdout.write('data: ' + chunk);
    }
});

// process.exit(code);
//参数code为退出后返回的代码，如果省略则默认返回0；

