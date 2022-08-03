$(document).ready(function(){
   i=0;
   for(i=0;i<3;i++){
      index=$("ul").children().eq(i).index()
      $("ul").children().eq(i).text(index+" "+$("ul").children().eq(i).text())
   }
});