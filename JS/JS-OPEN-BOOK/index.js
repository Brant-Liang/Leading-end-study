(function (window, doucment) {
   var prefixes = ['Webkit', 'Moz', 'ms', 'o'], // 兼容多种浏览器
      book = document.querySelectorAll('.book')[0], /* [div class = book] */
      page = document.querySelectorAll('.front-cover')[0],
      dino = document.querySelectorAll('.dino')[0],
      shadow = document.querySelectorAll('.shadow')[0],
      hold = false,   //鼠标是否按下
      centerPoint = window.innerWidth / 2,
      pageSize = 300,
      clamp = function (val, min, max) {
         return Math.max(min, Math.min(val, max));
      }

   //按下鼠标执行的事件
   page.onmousedown = function () {
      hold = true;
   }

   //鼠标放开执行的事件
   window.onmouseup = function () {
      if (hold) {
         hold = false;
      }
   }
   // 在窗口被调整大小的时候执行的事件
   window.onresize = function () {
      // console.log(1);
      centerPoint = window.innerWidth / 2;
   }
   window.onmousemove = function (event) {
      if (!hold) {
         return;
      }
      var angle = clamp((centerPoint - event.pageX + pageSize) / pageSize * -90, -180, 0), i, j;
      for (i = 0; i < prefixes.length; i++) {
         page.style[prefixes[i] + 'Transform'] = 'rotateY('+ angle +'deg)';
         dino.style[prefixes[i] + 'Transform'] = 'rotateX('+ (angle / 3) +'deg)'
         book.style[prefixes[i] + 'Transform'] = 'rotateX('+ (60  + angle / 8) +'deg)'
         shadow.style[prefixes[i] + 'Transform'] = 'translateZ(1px) skewX('+ (angle / 8) +'deg)'
      }
   }
})(window, document)  /* 自执行函数 */

