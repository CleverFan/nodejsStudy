/**
 * Created by ChengFan on 2016/8/17.
 */

//path优化
var path = require('path');

//normalize函数将不符合规范的路径经过格式化转换为标准路径,解析路径中的.与..外，还能去掉多余的斜杠。

var data = path.normalize('/path///normalize/hi/..');
console.log(data);//'/path/normalize/'

//join函数将传入的多个路径拼接为标准路径并将其格式化，返回规范后的路径，避免手工拼接路径字符串的繁琐

var data2 = path.join('///you','/are','//beautiful');
console.log(data2);//'/you/are/beautiful'

//dirname函数用来返回路径中的目录名

var data3 = path.dirname('/foo/strong/cool/nice');
console.log(data);//'/foo/strong/cool'

//basename函数可返回路径中的最后一部分，并且可以对其进行条件排除


var data4 = path.basename('/foo/strong/basename/index.html');
var data5 = path.basename('/foo/strong/basename/index.html','.html');
console.log(data4 + ' "and" ' + data5);//'index.html "and" index'

//extname函数返回路径中文件的扩展名(以最后一个'.'开始,返回'.'以及'.'以后的所有字符串,如没有'.',则返回空字符串).

var data6 = path.extname('index.html');
console.log(data6);//.html