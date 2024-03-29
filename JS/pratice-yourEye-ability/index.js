// const startBtn = document
// .querySelector('#page-one button');
// const pageOne = document
// .querySelector('#page-one');
// startBtn.addEventListener('click', function(){
//     //Close page-one
//     pageOne.style.display ='none';
//     init(); //click init
// });
// let time = 30;
//  let step = 0;
// //init()
// function init(){
//     //计时器
//     let internal = setInterval(function() {
//         if(time == 0){
//             //Stop
//             clearInterval(internal);
//         }
//         else{
//             time --;
//             //DOM 操作 operation
//             document.getElementById('timer')
//             .innerHTML = time;
//         }
//     },1000)
//     //init screen
//     //step1 2 * 2
//     //step2 3 * 3
//     //step3 4 * 4
//     nextStep()
// }
// function nextStep(){
//     step ++;
//     let col = step + 1; // 2 * 2
//     let blockwidth = (100 / col) - 2;
//     let arr = [];
//     //解构
//     //[1, 2, 3]  let [a, b, c] = [1, 2, 3]
//     let [normalColor, specialColor] = getColor(step); 
//     for (let i = 0;i < col * col; i++){
//         //make forms
//         //模板字符串 用``表示 用于字符串拼接
//         let item =`
//         <div class="block" style = "
//         background-color: #${normalColor};
//         width: ${blockwidth}%">
//         <div class="block-inner" >
//             </div>
//         </div>`;
//         arr.push(item);
//     }
//     // Math.random(); 0 ~ 1之间的一个随机数
//     //数组长度 0 ~ col * co
//     let randomIndex = Math.floor( Math.random() * col *col);
//     arr[randomIndex]=`
//     div class="block" id = "special" style = "
//     background-color: #${specialColor};
//     width: ${blockwidth}%">
//         <div class="block-inner" >
//         </div>
//     </div>
//     `;
//     console.log(arr);
//     docuiment.querySelector('.screen')
//     .innerHTML = arr.join(''); //arr.join()将arr转换为字符串,中间的参数为数字间字符

//     document.getElementById('special')
//     .addEventListener('click',function(){
//         nextStep();
//     })
// }
// /**
//  * 根据关卡等级返回相应的一般颜色和特殊颜色
//  * @param {number} step 关卡
//  */
// function getColor(step) {
//     let random = Math.floor(100 / step);
//     // let random = Math.floor(Math.abs(100 - 4 * step));
//     let color = randomColor(17, 255),
//       m = color.match(/[\da-z]{2}/g);
//     console.log("m", m);
//     console.log(typeof m[0]);
//     console.log("color", color);
//     for (let i = 0; i < m.length; i++) m[i] = parseInt(m[i], 16); //rgb
//     let specialColor =
//       getRandomColorNumber(m[0], random) +
//       getRandomColorNumber(m[1], random) +
//       getRandomColorNumber(m[2], random);
//     return [color, specialColor];
//   }
  
//   function getRandomColorNumber(num, random) {
//     let temp = Math.floor(num + (Math.random() < 0.5 ? -1 : 1) * random);
//     if (temp > 255) {
//       return "ff";
//     } else if (temp > 16) {
//       return temp.toString(16);
//     } else if (temp > 0) {
//       return "0" + temp.toString(16);
//     } else {
//       return "00";
//     }
//   }
//   // 随机颜色 min 大于16
//   function randomColor(min, max) {
//     var r = randomNum(min, max).toString(16);
//     var g = randomNum(min, max).toString(16);
//     var b = randomNum(min, max).toString(16);
//     return r + g + b;
//   }
//   // 随机数
//   function randomNum(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
//   }
  
const startBtn = document
.querySelector('#page-one button');
const pageOne = document
.querySelector('#page-one');
startBtn.addEventListener('click',function(){
    //关掉第一屏
    pageOne.style.display = 'none'; 
    init();//点击后开始挑战
})

// 初始化
let time = 30;
let step = 0;
//init()
function init(){
    //
    let interval = setInterval(function() {
        if(time ===0){
            // 停止
            clearInterval(interval);
        }
        else{time --;
            // DOM操作
            document.getElementById('timer')
            .innerHTML = time;
            }   
    }, 1000)
    //画格子
    //step 1 2*2
    //step 2 3*3
    //step 3 4*4
    nextStep()
}
function nextStep(){
    step++;
    let col = step +1;//2 *2
    let blockWidth =(100 / col) - 2;
    let arr = [];
    //解构
    //[1, 2, 3] let [a, b, c] = [1, 2, 3]
    let [normalColor,specialColor] = getColor(step);
    for(let i=0;i< col*col;i++){
      // 生成格子
      //模板字符串 用`` 表示 用于字符串的拼接
      let item = `
      <div class="block" style="
      background-color: #${normalColor};
      width:${blockWidth}%">
          <div class="block-inner"></div>
      </div>
      `;
      arr.push(item);
    }
    //Math.random() 0~1 之间的一个随机数
    //数组长度 0 ~ col*col
    //Math.floor() 向下取整
    let randomIndex = Math.floor(Math.random() * col * col);
    arr[randomIndex]=`
    <div class="block" id="special" style="
    background-color: #${specialColor};
    width:${blockWidth}%">
        <div class="block-inner" ></div>
    </div>
    `;
    console.log(arr);
    document.querySelector('.screen')
    .innerHTML = arr.join('');

    document.getElementById('special')
    .addEventListener('click',function(){
        nextStep();
    })
}



/**
 * 根据关卡等级返回相应的一般颜色和特殊颜色
 * @param {number} step 关卡
 */
function getColor(step) {
    let random = Math.floor(100 / step);
    // let random = Math.floor(Math.abs(100 - 4 * step));
    let color = randomColor(17, 255),
      m = color.match(/[\da-z]{2}/g);
    console.log("m", m);
    console.log(typeof m[0]);
    console.log("color", color);
    for (let i = 0; i < m.length; i++) m[i] = parseInt(m[i], 16); //rgb
    let specialColor =
      getRandomColorNumber(m[0], random) +
      getRandomColorNumber(m[1], random) +
      getRandomColorNumber(m[2], random);
    return [color, specialColor];
  }
  
  function getRandomColorNumber(num, random) {
    let temp = Math.floor(num + (Math.random() < 0.5 ? -1 : 1) * random);
    if (temp > 255) {
      return "ff";
    } else if (temp > 16) {
      return temp.toString(16);
    } else if (temp > 0) {
      return "0" + temp.toString(16);
    } else {
      return "00";
    }
  }
  // 随机颜色 min 大于16
  function randomColor(min, max) {
    var r = randomNum(min, max).toString(16);
    var g = randomNum(min, max).toString(16);
    var b = randomNum(min, max).toString(16);
    return r + g + b;
  }
  // 随机数
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
