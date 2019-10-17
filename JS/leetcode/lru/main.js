//可以被运行的对象叫函数

//缓存函数 LRU 最近最少使用原则
function LRUCache(capacity) {
   this.capacity = capacity; //容量
   this.obj = {}; //get set 存储数据
   this.arr = []; //优先级 superiority
   //push splice pop unshift 
}

LRUCache.prototype.put = function (key, value) {
   if(this.obj[key]){
      //已存在
      this.obj[key] = value; //更新值
      //调整它的优先级  在那个位置？ 先删除，再移到最前面
      var index = this.arr.indexOf(key);
      this.arr.splice(index, 1);
      this.arr.unshift(key);
      return;
   }
   if (this.capacity === this.arr.length) {
      //放满了
      var k = this.arr.pop();
      this.obj[k] = undefined;
   }
   this.obj[key] = value;
   this.arr.unshift(key); //放到最前面，最前面是最优先
}
LRUCache.prototype.get = function (key) {
   var val = this.obj[key]
   //没有 返回-1
   if(val){
      var index = this.arr.indexOf(key);
      this.arr.splice(index, 1);
      this.arr.unshift(key);
      return val;
   }else{
      return -1;
   }
   //处理优先级

}

let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));
cache.put(3, 3);
console.log(cache.get(2));
cache.put(4, 4);
console.log(cache.get(1));
console.log(cache.get(3));
console.log(cache.get(4));
