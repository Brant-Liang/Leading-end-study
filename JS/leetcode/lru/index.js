//缓存算法
//函数 es5 首字母大写的函数，就是一个类
function LRUcache(title){
   //构造函数
   //this.title 类的属性
   //this 是指针 只有指向要生成的对象
   console.log(this);
   this.title = title;
}
//静态方法 LRUcache.buyCar调用
LRUcache.buyCar = function(){
   console.log('buyCar');
} 

LRUcache.prototype.buyCar = function(){
   console.log('buyCar');
}
LRUcache.prototype.sayHello = function(){
   console.log(`hello,${this.title}`);
}
//Object 也叫作实例
let cache = new LRUcache('蔡徐坤'); //实例化
console.log(cache.title);
console.log(cache.sayHello());
//console.log(cache.buyCar());
LRUcache.buyCar();
console.log(cache.__proto__ == LRUcache.prototype);
console.log(cache instanceof LRUcache);

//instanceof 判断对象是否为一个类的实例