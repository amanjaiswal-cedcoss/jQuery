$(document).ready(function () {
  $arrAttributes=[]
  $("#btnChangeClass").click(function(){
    $getAttributes(); 
    $changeClass();
    $("#btnChangeClass").attr("disabled","disabled")
  })
  function $changeClass(){
    $arr=$("body").find("h1")
       for(i=0;i<$arr.length;i++){
       
      if($($arr[i]).attr("class")!="bingo"){
        $txt=$($arr[i]).html()
        $($arr[i]).replaceWith("<h2>"+$txt+"</h2>");
      }
      }
  }
  function $getAttributes() {
    $("h1").each(function(j) {
        arrObj=[];
        $.each(this.attributes,function(i,a){
            obj={id:i+1,name:a.name,value:a.value}
            arrObj.push(obj);
          })
          $("#divDisp").append("<h3>"+parseInt(j+1)+". "+arrObj.length+" attributes</h3>")
          for(i=0;i<arrObj.length;i++){
            console.log("name=",arrObj[i].name)
          $("#divDisp").append("<p>"+arrObj[i].id+"."+arrObj[i].name+":"+arrObj[i].value+"</p>")
          }
    })
console.log($arrAttributes)

}

});
