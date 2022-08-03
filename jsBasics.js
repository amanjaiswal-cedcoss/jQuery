flowers=["Lily","Rose","Lotus","Daffodils","Mariegold","Sunflower"];
$(document).ready(function(){
  $("#flower").keyup(function(){
    $matched="";
  for(i=0;i<flowers.length;i++){
    $item=$("#flower").val();
    $match=flowers[i].substring(0,$item.length)
    if($item==$match){
      $matched+=" "+flowers[i];
      }
}
$("#suggestions").html("Suggestions : "+$matched);
})

});