
$(document).ready(function(){
$("#parent").on("click","#even",(function(){
$("#detailsTable").children().children("tr:even").addClass("lightgrey");
}))
$("#parent").on("click","#odd",(function(){
  $("#detailsTable").children().children("tr:odd").addClass("blue");
  }))

});