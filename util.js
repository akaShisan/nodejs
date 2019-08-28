//util.inherits(constructor, superConstructor) 实现对象间原型继承的函数
//Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。
//同时，在原型中定义的属性不会被 console.log 作 为对象的属性输出。
var util = require('util');
function Base(){
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function(){
        console.log('Hello' +this.name);
    }
}

Base.prototype.showName  = function(){
    console.log(this.name);
}

function Sub(){
    this.name = 'sub';
}

util.inherits(Sub,Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
console.log(objSub);

//util.inspect(object,[showHidden],[depth],[colors]) 是一个将任意对象转换 为字符串的方法
//showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。
//depth 表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多少。
//如果color值为true，输出格式将会以ANSI颜色编码，通常用于在终端显示更漂亮的效果。
function Person(){
    this.name = 'zw'
    this.toString = function(){
        return this.name;
    }
}
var objPerson = new Person();
console.log(util.inspect(objPerson));
console.log(util.inspect(objPerson,true));

//util.isArray(object) 如果给定的参数 "object" 是一个数组返回true，否则返回false。
//util.isRegExp(object) 如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。
//util.isDate(object) 如果给定的参数 "object" 是一个日期返回true，否则返回false。
//util.isError(object) 如果给定的参数 "object" 是一个错误对象返回true，否则返回false。