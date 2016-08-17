var today = new Date();
var time = today.getTime() + 60 * 1000;
var time2 = new Date(time);
var timeObj = time2.toGMTString();
response.writeHead({
	'Set-Cookie':'myCookie="type=ninja", "language=javascript";path="/";Expires='+timeObj+';httpOnly=true'
});