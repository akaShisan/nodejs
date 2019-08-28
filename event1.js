/*
1. addListener(event, listener)
为指定事件添加一个监听器到监听器数组的尾部。
2. on(event, listener)
为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
3. once(event, listener)
为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
4. removeAllListeners([event])
移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。
5. setMaxListeners(n)
默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。
6. listeners(event)
返回指定事件的监听器数组。
7. emit(event, [arg1], [arg2], [...])
按监听器的顺序执行执行每个监听器，如果事件有注册监听返回 true，否则返回 false。
*/ 
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event',function(){
 console.log("some_event事件触发");
});
setTimeout(function(){
  // event.emit('some_event');
},1000);

var event1 = new EventEmitter();
event1.on('someEvent',function(arg1,arg2){
    console.log('listener1',arg1,arg2);
})
event1.on('someEvent',function(arg1,arg2){
    console.log('listener2',arg1,arg2);
})
//event1.emit('someEvent','参数1','参数2');

var event2 = new EventEmitter();
var listener1 = function listener1(){
    console.log("监听器1执行");
}
var listener2 = function listener1(){
    console.log("监听器2执行");
}
//绑定 connection 事件，处理函数为 listener1 
event2.addListener('connection',listener1);
//绑定 connection 事件，处理函数为 listener2
event2.on('connection',listener2);
//打印event2绑定的监听器数量
console.log(event2.listenerCount('connection')+"个监听器");
//触发
event2.emit('connection');
//
event2.removeListener('connection',listener1);
console.log('移除listener1');
event2.emit('connection');
console.log(event2.listenerCount('connection')+"个监听器");
console.log("执行结束");

