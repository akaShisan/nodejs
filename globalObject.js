//当前执行脚本文件名
console.log( __filename );
//当前执行脚本所在目录
console.log(__dirname);

function printHello(){
    console.log("HelloHelloHello");
}
var t=setTimeout(printHello,2000);
clearTimeout(t);
var t1=setInterval(printHello, 2000);
clearInterval(t1);

//console
//process