

/*
Node.js 目前支持的字符编码包括:

ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。

utf8 - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。

utf16le - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。

ucs2 - utf16le 的别名。

base64 - Base64 编码。

latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。

binary - latin1 的别名。

hex - 将每个字节编码为两个十六进制字符。
*/

const buf = Buffer.from('runoob','ascii');
// 输出 runoob
console.log(buf.toString('UTF-8'));
// 输出 72756e6f6f62
console.log(buf.toString('hex'));
// 输出 cnVub29i
console.log(buf.toString('base64'));

/* 
Buffer 提供了以下 API 来创建 Buffer 类：

Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
Buffer.allocUnsafeSlow(size)
Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例
*/
const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(10,1);
const buf3 = Buffer.allocUnsafe(10);
const buf4 = Buffer.from([1,2,3]);
const buf5 = Buffer.from('test');
const buf6 = Buffer.from('test','latin1');
console.log(buf1);
console.log(buf2);
console.log(buf3);
console.log(buf4);
console.log(buf5);
console.log(buf6);
console.log(buf1.toString('UTF-8'));
console.log(buf2.toString('UTF-8'));
console.log(buf3.toString('UTF-8'));
console.log(buf4.toString('UTF-8'));
console.log(buf5.toString('UTF-8'));
console.log(buf6.toString('UTF-8'));


//写入缓冲区   buf.write(string[, offset[, length]][, encoding])
let len = buf.write("www.runoob.com");
console.log("写入字节数"+len);

//从缓冲区读取数据   buf.toString([encoding[, start[, end]]])
bufl = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
  bufl[i] = i + 97;
}
console.log( bufl.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( bufl.toString('ascii',0,5));   // 输出: abcde
console.log( bufl.toString('utf8',0,5));    // 输出: abcde
console.log( bufl.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

//将buffer转为json  buf.toJSON()
const buffer = Buffer.from([0x1,0x2,0x3,0x4,0x5]);
const json = JSON.stringify(buffer);
console.log(json);
const copy = JSON.parse(json,(key,value) =>{
    return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
})
console.log(copy);

//缓冲区合并  Buffer.concat(list[, totalLength])
var buffer1 = Buffer.from(('合并前1'));
var buffer2 = Buffer.from(('合并前2'));
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3内容："+ buffer3.toString());

//缓冲区比较  buf.compare(otherBuffer);
var result = buffer1.compare(buffer2);
if(result < 0) {
    console.log(buffer1 + " 在 " + buffer2 + "之前");
 }else if(result == 0){
    console.log(buffer1 + " 与 " + buffer2 + "相同");
 }else {
    console.log(buffer1 + " 在 " + buffer2 + "之后");
 }

//缓冲区拷贝 buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
var buffer4 = Buffer.from('abcdefg');
var buffer5 = Buffer.from('ABC');
buffer5.copy(buffer4,2);
console.log(buffer4.toString());

//缓冲区裁剪  buf.slice([start[, end]])
var buffer6 = Buffer.from('slicetext');
var buffer7 = buffer6.slice(0,2);
console.log("buffer7 content:" + buffer7.toString());

//缓冲区长度
var buffer8 = Buffer.from('stringlength');
console.log("buffer length:" + buffer8.length);


