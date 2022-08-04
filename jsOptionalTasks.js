$(document).ready(function () {
  $("#btnToggle").click(function(){
  $("div").toggle(
    function () {
      $("div").animate({ height: "500px" }, 500);
    }
  )})
});
