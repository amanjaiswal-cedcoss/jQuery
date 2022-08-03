$(document).ready(function(){
    
$("body").on("click","#btn",(function(){
   if($("#check").is(':checked')){
   $("#check").attr("checked",false)}
   else{
   $("#check").attr("checked",true)}
}))
});