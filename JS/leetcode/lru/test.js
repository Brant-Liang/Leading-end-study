
function LRUCache(capacity){
   //构造函数
   //第一要有容量属性
   this.capacity = capacity;
   this.obj = {};  //储存 key value key {value}
   this.arr = [];  //确定优先级 
}
//给LRUCache添加方法
LRUCache.prototype.get = function(key){
   var val = this.obj[key];
   if(val){
      this.arr.pop();
      this.arr.unshift(key);
      return val;
   }else{
      return -1;
   }
}

LRUCache.prototype.put = function(key, value){
   //如果容量满了
   if(this.capacity == this.arr.length){
      var k = this.arr.pop();
      this.obj[k] = undefined;
   }
   this.obj[key] = value;
   this.arr.unshift(key);
}


//cache对象实例化
let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));
cache.put(3, 3);
cache.get(1);
console.log(cache.arr);
