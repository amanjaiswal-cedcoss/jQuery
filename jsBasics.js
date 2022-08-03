images=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
var i=2;
$(document).ready(function(){
  $("#prev").click(function(){
    if(i>0){
      i--;
   $("img").attr("src",images[i])
  }
  else{
    i=0;
  }
   })
$("#next").click(function(){
  if(i<4){
    i++;
 $("img").attr("src",images[i])
}
else{
  i+4;
}
})

});
// comment