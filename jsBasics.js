$(document).ready(function(){
  colours=["red","blue","pink","green","orange"] 
i=0;
setInterval(swapColor,1000);
function swapColor(){
  
  console.log("changed")
$("div.test").children().eq(0).animate().css("color",colours[i])
$("div.test").children().eq(2).animate().css("color",colours[i])
$("div.test").children().eq(3).animate().css("color",colours[i])
$("div.test").children().eq(5).animate().css("color",colours[i])
i++;
if(i>4){
  i=0
}
}

});