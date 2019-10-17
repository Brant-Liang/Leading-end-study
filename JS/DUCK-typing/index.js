//鸭子王国招1000只鸭子，组成鸭子合唱团
const chior = []; //合唱团

//加入合唱团
function joinChoir(ani) {
   if(ani && typeof ani.duckSinging == 'function'){
      chior.push(ani);
   }else{
      console.log('Unallow to join!');
   }
   if (chior.length >= 1000) {
      console.log('Mission Completed!');
   }
   else {
      console.log('Now completed ' + chior.length + ' ducks join our chior');
   }
}

//对象 ： 属性和方法
let duck = {
   name: 'Donald Duck',
   //能干一件事 singing  即方法
   duckSinging: function(){
      console.log('gagaga');
   }
} 

//duck.duckSinging();
//joinChoir(duck);

let chicken = {
   name:'CAIXU chicken',
   chickenSinging: function(){
   console.log('鸡你太美');
   },
   duckSinging: function(){
      console.log('Boy next door!');
   }
}
for(let i = 0; i < 999; i++){
   joinChoir(duck);
}
joinChoir(chicken);