$(document).ready(function(){
    
$arrRow1 = $arrRow2 = $arrRow3 = [];
$evod=0;
function $populate() {
  console.log("populate called");
  $arrRow1 = [$("#1").val(),$("#2").val(),$("#3").val()];
  $arrRow2 = [$("#4").val(),$("#5").val(),$("#6").val()];
  $arrRow3 = [$("#7").val(),$("#8").val(),$("#9").val()];
}
$("input").click(function(){
  $check($(this));
  console.log($id=$(this).attr("id"))
  $("#"+$id).attr("disabled","disabled");
}) 
function $check(args) {
  $evod++;
  console.log("EVOD = ",$evod)
  if($evod%2==0){
    $("#"+args.attr("id")).val('o');
  }
  else{
    $("#"+args.attr("id")).val('x');
  }
  $("#result").html("");
  console.log("check called");
  $populate();
  console.log($arrRow1);
  console.log($arrRow2);
  console.log($arrRow3);
  
  
  if (
    ($arrRow1[0] == $arrRow1[1] && $arrRow1[1] == $arrRow1[2] && $arrRow1[2] == "o") ||($arrRow2[0] == $arrRow2[1] && $arrRow2[1] == $arrRow2[2] && $arrRow2[2] == "o") ||($arrRow3[0] == $arrRow3[1] && $arrRow3[1] == $arrRow3[2] && $arrRow3[2] == "o") ||($arrRow1[0] == $arrRow2[0] && $arrRow2[0] == $arrRow3[0] && $arrRow3[0] == "o") ||($arrRow1[1] == $arrRow2[1] && $arrRow2[1] == $arrRow3[1] && $arrRow3[1] == "o") ||($arrRow1[2] == $arrRow2[2] && $arrRow2[2] == $arrRow3[2] && $arrRow3[2] == "o") ||($arrRow1[0] == $arrRow2[1] &&$arrRow2[1] == $arrRow3[2] &&$arrRow3[2] == "o") ||($arrRow1[2] == $arrRow2[1] && $arrRow2[1] == $arrRow3[0] && $arrRow3[0] == "o")){
    console.log("o won");
    $("#result").html("Player O won");
    $("input").attr("disabled","disabled");
  }
  else if (
    ($arrRow1[0] == $arrRow1[1] &&$arrRow1[1] == $arrRow1[2] &&$arrRow1[2] == "x") ||($arrRow2[0] == $arrRow2[1] && $arrRow2[1] == $arrRow2[2] && $arrRow2[2] == "x") ||($arrRow3[0] == $arrRow3[1] && $arrRow3[1] == $arrRow3[2] && $arrRow3[2] == "x") ||($arrRow1[0] == $arrRow2[0] && $arrRow2[0] == $arrRow3[0] && $arrRow3[0] == "x") ||($arrRow1[1] == $arrRow2[1] && $arrRow2[1] == $arrRow3[1] && $arrRow3[1] == "x") ||($arrRow1[2] == $arrRow2[2] && $arrRow2[2] == $arrRow3[2] && $arrRow3[2] == "x") || ($arrRow1[0] == $arrRow2[1] && $arrRow2[1] == $arrRow3[2] && $arrRow3[2] == "x") || ($arrRow1[2] == $arrRow2[1] && $arrRow2[1] == $arrRow3[0] && $arrRow3[0] == "x")) {
    console.log("x won");
    $("#result").html("Player X won");
    $("input").attr("disabled","disabled");
  }
  else if($evod==9){
    $("#result").html("Game drawn. Click on reset.");
    $("input").attr("disabled","disabled");
  }
}

$("#btnReset").click(function(){
  $("input").val("");
    document.getElementById("result").innerHTML = "";
    $("input").removeAttr('disabled');
    $evod=0;
  
})

// comment

})