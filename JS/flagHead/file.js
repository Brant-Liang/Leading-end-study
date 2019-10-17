function nameChange(event){
   console.log(event.target.value);
}
function fileChange(event){
   //console.log(event.target.files);
   let file = event.target.files[0];
   let fileReader = new FileReader();
   fileReader.onload = function(event){
      //读完文件之后再执行
      console.log(event.target.result); 
      const image = document.getElementById('preview');
      image.src = event.target.result; 
   }
   //DataURL
   //内容为二进制
   //读完后以base64 编码
   fileReader.readAsDataURL(file);

}
