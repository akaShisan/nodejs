var fs = require("fs");
var data = '';

//可读流
var readerStream = fs.createReadStream('input.txt');
//设置编码为utf8
readerStream.setEncoding('UTF8');
//处理流事件
readerStream.on('data',function(chunk){
    data += chunk;
});

readerStream.on('end',function(){
    console.log(data);
});

readerStream.on('error',function(err){
    console.log(err.stack);
})


var dataout = '测试用输出文档';
//创建输出流
var writerStream = fs.createWriteStream('output.txt');
//使用UTF-8
writerStream.write(dataout,'UTF-8');
//标记文件末尾
writerStream.end();
//处理流事件
writerStream.on('finish',function(){
    console.log("写入完成");
});
writerStream.on('error',function(err){
    console.log(err.stack);
});

//管道流
var readerStream1 = fs.createReadStream('input.txt');
var writerStream1 = fs.createWriteStream('output.txt');
readerStream1.pipe(writerStream1);


//链式流
//1.压缩
var zlib = require('zlib');
fs.createReadStream('input.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('input.txt.gz'));
console.log("文件压缩完毕");
//2.解压
fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('input.txt'));
console.log("文件解压完毕");


