process.on('exit',function(code){
    setTimeout(function(){
        console.log("代码不会执行");
    },0)
    console.log('退出码为',code)
})
console.log("执行结束");

// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());