function check(){
  $("#result").html("");
if($("#password").val()!=$("#passwordMatch").val()){
  $("#result").html("Password does not match");
}
}
