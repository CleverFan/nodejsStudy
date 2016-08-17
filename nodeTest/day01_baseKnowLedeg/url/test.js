/**
 * Created by ChengFan on 2016/8/17.
 */

var url = require('url');
//console.log(url.parse('http://www.baidu.com'));

/*parse函数的第二个参数是布尔类型，当参数为true时，会将查询条件也解析成json格式的对象。*/
//console.log(url.parse('http://www.baidu.com?page=1',true));

/*parse函数的第三个参数也是布尔类型的，当参数为true，解析时会将url的"//"和第一个"/"之间的部分解析为主机名*/
//console.log(url.parse('http://www.baidu.com/news',false,true));

var test = '';

//format
test = url.format({
    protocol: 'http:',
    hostname:'www.baidu.com',
    port:'80',
    pathname :'/news',
    query:{page:1}
});

//console.log(test);

//resolve

console.log(url.resolve('http://example.com/', '/one'));