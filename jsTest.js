$(document).ready(function(){
$details=[
    {uniqueID:101,Name:"Aman",Email:"aman@cedcoss.com",Password:"aman@123",City:"Lucknow",Role:"admin"},
    {uniqueID:102,Name:"Ritik",Email:"ritik@hotmail.com",Password:"ritik312",City:"Lucknow",Role:"guest"},
    {uniqueID:103,Name:"Ansh",Email:"anshj@gmail.com",Password:"ansh$56",City:"Lucknow",Role:"guest"}
]

$("#btnSubmit").click(function(){
    alert()
    $flag=0;
    $("#divDisp").html("")
    console.log($name=$("#inpName").val())
    console.log($password=$("#inpPassword").val())
    $("#inpName").val("")
    $("#inpPassword").val("")
for(i=0;i<$details.length;i++){
    if($name==$details[i].Name && $password==$details[i].Password){
    $flag=1;
    $pos=i;
        //     if($details[i].Role=="admin"){
    //         $("#divDisp").append("<table id='tabDetails'><tr><th>Unique Id</th><th>Name</th><th>Email</th><th>Password</th><th>City</th><th>Role</th><th>Action</th></tr></table>")
    //         for(i=0;i<$details.length;i++){
    //       $("#tabDetails").append("<tr><td>"+$details[i].uniqueID+"</td><td>"+$details[i].Name+"</td><td>"+$details[i].Email+"</td><td>"+$details[i].Password+"</td><td>"+$details[i].City+"</td><td>"+$details[i].Role+"</td><td><a id='delete'>Delete</a></td></tr>")
    //     }
    // }
    //     else{
    //         $("#divDisp").html("<h2>Welcome:"+$details[i].Name+"</h2>")
    //     }
    }
    if($flag==1){
        if($details[$pos].Role=="admin"){
            $("#divDisp").append("<table id='tabDetails'><tr><th>Unique Id</th><th>Name</th><th>Email</th><th>Password</th><th>City</th><th>Role</th><th>Action</th></tr></table>")
            for(i=0;i<$details.length;i++){
          $("#tabDetails").append("<tr><td>"+$details[i].uniqueID+"</td><td>"+$details[i].Name+"</td><td>"+$details[i].Email+"</td><td>"+$details[i].Password+"</td><td>"+$details[i].City+"</td><td>"+$details[i].Role+"</td><td><a id='delete'>Delete</a></td></tr>")
        }
    }
        else{
            $("#divDisp").html("<h2>Welcome:"+$details[$pos].Name+"</h2>")
        }
    }
    else{
        $("#divDisp").html("Entered credentials does not match with saved data")
    }
  }
})

$("#divDisp").on("click","#delete",function(){
  $index=$(this).parent().parent().index();
  $(this).parent().parent().remove();
  $details.splice($index-1,1);
   console.log($details)
      console.log($("#tabDetails").children().children().length)
if($("#tabDetails").children().children().length<=1){
    $("#tabDetails").html("");
}

})

})