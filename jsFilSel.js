var products = [{
    "id": "100",
    "name": "iPhone 4S",
    "brand": "Apple",
    "os": "iOS"},
    {
    "id": "101",
    "name": "Moto X",
    "brand": "Motorola",
    "os": "Android"	},
{
    "id": "102",
    "name": "iPhone 6",
    "brand": "Apple",
    "os": "iOS"},
{
    "id": "103",
    "name": "Samsung Galaxy S",
    "brand": "Samsung",
    "os": "Android"},
{
    "id": "104",
    "name": "Google Nexus",
    "brand": "ASUS",
    "os": "Android"},
{
    "id": "105",
    "name": "Surface",
    "brand": "Microsoft",
    "os": "Windows"}
];

$(document).ready(function(){
  $populate();

    function $populate(){
        $("#productsTable").html("");
$("#productsTable").append("<tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>");
for(i=0;i<products.length;i++){
    $("#productsTable").append("<tr><td>"+products[i].id+"</td><td>"+products[i].name+"</td><td>"+products[i].brand+"</td><td>"+products[i].os+"</td><td id='rowToggle'>X</td></tr>");
}}

function $sort(){
    console.log($("#selCategory :selected").text()=="Operating System")
  if($("#selCategory :selected").text()=="Operating System"){
    if($("#selOrder :selected").text()=="Ascending"){
        products.sort(function(a, b){
            let x = a.os.toLowerCase();
            let y = b.os.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
          });
          $populate();
    }
    if($("#selOrder :selected").text()=="Descending"){
        products.sort(function(a, b){
            let x = a.os.toLowerCase();
            let y = b.os.toLowerCase();
            if (x < y) {return 1;}
            if (x > y) {return -1;}
            return 0;
          });
          $populate();
    }
  }
  else if($("#selCategory :selected").text()=="Brand"){
    if($("#selOrder :selected").text()=="Ascending"){
        products.sort(function(a, b){
            let x = a.brand.toLowerCase();
            let y = b.brand.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
          });
          $populate();
    }
    if($("#selOrder :selected").text()=="Descending"){
        products.sort(function(a, b){
            let x = a.brand.toLowerCase();
            let y = b.brand.toLowerCase();
            if (x < y) {return 1;}
            if (x > y) {return -1;}
            return 0;
          });
          $populate();
    }
  }

}

$("#productsTable").on("click","#rowToggle",function(){
   $(this).parent().toggle();

})

$("#selCategory").change(function(){
    $sort();
})
$("#selOrder").change(function(){
    $sort();
})
$("#divSearch").on("click","#btnSearch",function(){
 for(i=0;i<products.length;i++){
    console.log($("#inpSearch").val().toLowerCase())
    if($("#inpSearch").val().toLowerCase()==products[i].name.toLowerCase() || $("#inpSearch").val()==products[i].id){
     $("#searchTable").html("<tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th></tr><tr><td>"+products[i].id+"</td><td>"+products[i].name+"</td><td>"+products[i].brand+"</td><td>"+products[i].os+"</td></tr>");
    }
}
 })

  });