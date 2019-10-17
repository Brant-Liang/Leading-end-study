- new 的过程
1. 创建一个空对象
2. new FunctionA(){}\
函数运行时， 会产生几个必有的对象
动态决定
this{} <= this.name
FunctionA 不是以new的方式来运行?
他就是一个普通函数,this->window
启动严格模式 use strict
this undefined
arguments
两口子  constructor prototype   Person.prototype.constructor === Person
js中并没有类   Person对象（函数）
woniu.__proto__ === Person.prototype

this 当作为对象的方法被执行时 this指向对象
woniu.sing();
new Person this -> woniu 
Person this -> undefined('use strict') / window

- 面向对象方法 有三种
 constructor + prototype 基于原型
 es6 class 关键字
 Object.create(原型对象)

- 手写代码是js考试的方式
Object.create()
function create(obj){
   function F(){ //空函数
      F.prototype = obj;
   }
   return {}; 
}
