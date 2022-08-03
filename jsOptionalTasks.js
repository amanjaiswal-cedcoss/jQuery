$(document).ready(function(){
    
$("body").on("click","#btn",(function(){
   alert($("ul").children().eq(0).text())
}))
});