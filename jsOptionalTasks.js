$(document).ready(function(){
   $("p").toggle(
   function(){$("p").animate({opacity:"0.5"},500)},
   // function(){$("p").hide(500)}
   );

});
