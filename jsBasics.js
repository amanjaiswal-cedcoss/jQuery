products=[
{name:"Duffle Bags",price:""},
{name:"Tshirts",price:""}
];
populate();
function populate(){
  selSize="<select id='size'><option>--Select Size--</option><option>Small</option><option>Medium</option><option>Large</option></select>"
  selColor="<select id='colour'><option>--Select Colour--</option><option>Red</option><option>Green</option><option>Blue</option></select>"
  $("#productsTable").html("<tr><th>Name</th><th>Size/Colour</th><th>Price</th</tr>");
  $("#productsTable").append("<tr><td>"+products[0].name+"</td><td>"+selColor+"</td><td>"+products[0].price+"</</td</tr>");
  $("#productsTable").append("<tr><td>"+products[1].name+"</td><td>"+selSize+"</td><td>"+products[1].price+"</</td</tr>");
}

$(document).ready(function(){
$("#parent").on("change","#size",(function(){
  $index=$("#size option:selected").index();
  if($index==1){
    console.log($index)
    $price=600;
  }
  else if($index==2){
    console.log($index)
    $price=800;
  }
  else{
    console.log($index)
      $price=1000;
  }
  products[1].price=$price;
  populate();
}))

$("#parent").on("change","#colour",(function(){
  $index=$("#colour option:selected").index();
  if($index==1){
    console.log($index)
    $price=600;
  }
  else if($index==2){
    console.log($index)
    $price=800;
  }
  else{
    console.log($index)
      $price=1000;
  }
  products[0].price=$price;
  populate();
}))
});