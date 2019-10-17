function create(obj){
   //返回一个实例对象
   //对象，它的原型对象是Obj
   //xxx.__proto__ = obj; 
   function F(obj){
      F.prototype = obj;
   }
   return new F();
}

var Person = { //对象模板
   name: "noname",
   age: 0,
   greet: function(){
      console.log(`hello, ${this.name}`);
   }
}

var tom = create(Person);
tom.name = 'tom';
tom.age = 24;
console.log(tom.Person);
tom.greet();