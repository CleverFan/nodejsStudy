var http = require('http'),
    PORT = 3000;
 
function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}
 
//我们把启动服务和关闭服务分别进行了封装并且对外进行了暴露。
var server = http.createServer(onRequest);
var boot = function () {
    server.listen(PORT, function () {
        console.info('Express server listening on port ' + PORT);
    });
};
var shutdown = function () {
    server.close();
};
if (require.main === module) {
    boot();
} else {
    console.info('Running app as a module');
    exports.boot = boot;
    exports.shutdown = shutdown;
}