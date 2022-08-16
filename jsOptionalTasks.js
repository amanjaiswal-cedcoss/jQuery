$(document).ready(function () {
  $("#btnChangeClass").click(function(){
    $getAttributes(); 
    $("h1:not(.bingo)").replaceWith("<h2>"+$("h1").html()+"</h2>");
    $("#btnChangeClass").attr("disabled","disabled")
  })
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

}

});
