- es5
在js中 函数：一等公民
JS 的过去 没有class关键字
function LRUCache
一个类的构造函数
定义了一个类，
new LRUCache 可以被实例化
new 发生了什么
生成了一个对象{} Object
内存中空的 {}
 构造函数给对象加上属性 this 

面向对象
        类              构造函数      方法      属性
       class         constructor
JS    function A     函数本身       prototype  this.
函数具有PROTOTYPE属性
火车头： constructor   prototype对象
基于原型的面向对象

 给类添加方法 class.prototype

  -任何函数都有prototype属性 他值是对象
  key => function(){

  }
  - 任何对象都有__proto__属性，指向构造函数的prototype属性
  JS的面向对象，类和实例的关系，不是父子关系没有血缘
  是基于原型的
  - new 的过程 构造函数被执行，创造this指针 指向对象
  加了属性 对象的__proto__属性 找到原型链上的方法
  cache instanceof LRUCache
  js中没有类的概念， LRUCache 也是对象
- es6 7 8 9
              capacity
                 2
[1        ]      1
[1       2]       0
get(1)
[2       1]
- 装 容量
- push 最后一个元素 是最重要的
- [0] 元素可以被删除
- 临界值 空间满了！
- get 的数在哪？ 放到最后面 在原位置删除， 放到最后
