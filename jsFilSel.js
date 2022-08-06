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
  $populate(products);

    function $populate(arr){
        $("#productsTable").html("");
$("#productsTable").append("<tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>");
for(i=0;i<arr.length;i++){
    $("#productsTable").append("<tr><td>"+arr[i].id+"</td><td>"+arr[i].name+"</td><td>"+arr[i].brand+"</td><td>"+arr[i].os+"</td><td id='rowToggle'>X</td></tr>");
}}

// function $sort(){
//     console.log($("#selCategory :selected").text()=="Operating System")
//   if($("#selCategory :selected").text()=="Operating System"){
//     if($("#selOrder :selected").text()=="Ascending"){
//         products.sort(function(a, b){
//             let x = a.os.toLowerCase();
//             let y = b.os.toLowerCase();
//             if (x < y) {return -1;}
//             if (x > y) {return 1;}
//             return 0;
//           });
//           $populate();
//     }
//     if($("#selOrder :selected").text()=="Descending"){
//         products.sort(function(a, b){
//             let x = a.os.toLowerCase();
//             let y = b.os.toLowerCase();
//             if (x < y) {return 1;}
//             if (x > y) {return -1;}
//             return 0;
//           });
//           $populate();
//     }
//   }
//   else if($("#selCategory :selected").text()=="Brand"){
//     if($("#selOrder :selected").text()=="Ascending"){
//         products.sort(function(a, b){
//             let x = a.brand.toLowerCase();
//             let y = b.brand.toLowerCase();
//             if (x < y) {return -1;}
//             if (x > y) {return 1;}
//             return 0;
//           });
//           $populate();
//     }
//     if($("#selOrder :selected").text()=="Descending"){
//         products.sort(function(a, b){
//             let x = a.brand.toLowerCase();
//             let y = b.brand.toLowerCase();
//             if (x < y) {return 1;}
//             if (x > y) {return -1;}
//             return 0;
//           });
//           $populate();
//     }
//   }

// }

$("#productsTable").on("click","#rowToggle",function(){
   $(this).parent().toggle();

})

$("#selOS").change(function(){
 $arrOS=[];
 for(i=0;i<products.length;i++){
    if($("#selOS :selected").text()==products[i].os){
       $arrOS.push(products[i]);
    } }
    $populate($arrOS)
})
$("#selBrand").change(function(){
    $arrBrand=[];
    for(i=0;i<products.length;i++){
       if($("#selBrand :selected").text()==products[i].brand){
          $arrBrand.push(products[i]);
       }}
       $populate($arrBrand);
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