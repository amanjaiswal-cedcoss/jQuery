
$(document).ready(function(){
  $flag=0;
  $("#btnSubmit").click(function () {
   
    if($("#first").val()==""){
      $("#first").focus();
      $("#first").css("background-color","red")
     $flag=1; 
      alert("Please enter first name")
    }
     
     if($("#last").val()==""){
     $("#last").css("background-color","red")
      alert("Please enter last name")
      if($flag==0){
        $("#last").focus();
      }
      else{
        $("#first").focus();
      }
    }
  });
     
});
