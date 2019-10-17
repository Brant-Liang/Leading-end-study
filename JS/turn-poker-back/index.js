const wrap = document.getElementById('wrap');
let images = [
   './img/h1.jpg',
   './img/h2.jpg',
   './img/h3.jpg',
   './img/h4.jpg',
   './img/h5.jpg',
   './img/h6.jpg',
   './img/h1.jpg',
   './img/h2.jpg',
   './img/h3.jpg',
   './img/h4.jpg',
   './img/h5.jpg',
   './img/h6.jpg',
]
images.sort((a, b) => 0.5 - Math.random());
init();
const allImg = document.querySelectorAll('#wrap img');
let count = 0; //翻盘次数
function init() {

   for (let i = 0; i < 12; i++) {
      //<img src="" class="" id="" />
      let img = document.createElement('img');
      img.src = "./img/bg1.jpg";
      img.onclick = function () {
         changeImage(img, i);
      }
      wrap.appendChild(img);
   }
}
let firstId = null; //第一张牌的下标
var changeImage = function (imgNode, i) {
   // imgNode.src = './img/h1.jpg';
   if (count === 0) {
      firstId = i;
      imgNode.src = images[i];
      imgNode.classList.add('rotate-animation');
   }
   if (count === 1) {
      //翻第二张
      imgNode.src = images[i];
      imgNode.classList.add('rotate-animation');
      setTimeout(() => {
         if (images[i] === images[firstId] && i != firstId) {
            wrap.removeChild(allImg[firstId]);
            wrap.removeChild(allImg[i]);
         }
         else {
            allImg[firstId].className = '';
            allImg[firstId].src = "./img/bg1.jpg";
            allImg[i] = '';
            allImg[i].src = "./img/bg1.jpg";
         }
         count = 0;
         firstId = null;
      },1100)
   }
   count++;
}