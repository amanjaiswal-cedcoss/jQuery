$(document).ready(function(){ 
  $("#parent").on("click","#btnCategory",(function () {
     $("#categories").append("<li>New Category<button id='btnCategory'>+</button></li>");
    }));
    $("#parent").on("click","#btnProducts",(function () {
      $(this).parent().parent().append("<li>New Product<button id='btnProducts'>+</button></li>")
       }));


});