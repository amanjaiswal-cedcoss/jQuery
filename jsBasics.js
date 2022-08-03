$(document).ready(function(){
  $("#btnSubmit").click(function () {
    if($("#first").val()==""){
      $("#first").focus();
      $("#first").css("background-color","red")
      alert("Please enter first name")
    }
     
     if($("#last").val()==""){
      $("#last").focus();
      $("#last").css("background-color","red")
      alert("Please enter last name")
    }
  });
     
});