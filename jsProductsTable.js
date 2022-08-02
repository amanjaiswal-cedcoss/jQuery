products = [
  { SKU: 101, name: "Product 101", price: "$150.00", quantity: 50 },
  { SKU: 102, name: "Product 102", price: "$100.00", quantity: 20 },
];
populate();
function populate() {
  let ele = "";
  ele +=
    "<tr><th>SKU</th><th>Name</th><th>Price</th><th>Quantity</th><th>Action</th></tr>";
  for (i = 0; i < products.length; i++) {
    ele +=
      "<tr><td>" +
      products[i].SKU +
      "</td><td>" +
      products[i].name +
      "</td><td>" +
      products[i].price +
      "</td><td>" +
      products[i].quantity +
      "</td><td><a class='edit'>Edit</a><a class='delete'>Delete</a></td></tr>";
  }
  document.getElementById("productsTable").innerHTML = ele;
}


function skuCheck(){
    $("#skuPara").html("");
    sku = $("#product_sku").val();
    if(sku==''){
        $("#product_sku").css("border-color","red");
    $("#skuPara").html("SKU cannot be empty");
     return 0;
     }
    else if(isNaN(sku)==true){
        $("#product_sku").css("border-color","red");
        $("#skuPara").html("SKU should be an integer");;
        return 0;
        }
    else{
        $("#product_sku").css("border-color","black");
        return 1;
    }
}
function NameCheck(){
    $("#namePara").html("");
    nameCheck=/^[A-Za-z0-9 ]+$/;
    Name = $("#product_name").val();
    if(Name==''){
        $("#product_name").css("border-color","red");
        console.log("empty")
    $("#namePara").html("Name cannot be empty");
     return 0;
     }
    else if(nameCheck.test(Name)==false){
        $("#product_name").css("border-color","red");
        console.log("number")
        $("#namePara").html("Name should be a string");
        return 0;
        }
    else{
        $("#product_name").css("border-color","black");
        console.log("correct")
        return 1;
    }
}
function addProduct() {
    if(skuCheck()==1 && NameCheck()==1){
    Name = $("#product_name").val();
    price = $("#product_price").val();
    quantity = $("#product_quantity").val();
    item = { SKU: sku, name: Name, price: price, quantity: quantity };
    products.push(item);
    populate();
    $(".success").css("visibility","visible");
    $(".success").html("Product added successfully <a href='#' class='close' onclick='cross(this)'>X</a>");
    }
    else{
        $(".error").css("visibility","visible");
        $(".error").html("There is some problem. <a href='#' class='close' onclick='cross(this)'>X</a>");
    }
}

function update(args){
    index=args;
    sku = $("#product_sku").val();
    Name = $("#product_name").val();
    price = $("#product_price").val();
    quantity = $("#product_quantity").val();
    products[index-1].SKU=sku;
    products[index-1].name=Name;
    products[index-1].price=price;
    products[index-1].quantity=quantity;
    $("#product_sku").val("");
    $("#product_name").val("");
    $("#product_price").val("");
    $("#product_quantity").val("");
    $("#add_product").val("Add Product");
    populate();
  }

 function deleteConfirm(){
       if(confirm("Are you sure you want to delete this product?")==true){
                $(".success").css("visibility","visible");
                $(".success").html("Product deleted successfully <a href='#' class='close' onclick='cross(this)'>X</a>");
                return 1;
            }
            else{
                return 0;
            }
        }
 

function cross(args){
idCross=args.parentNode.id;
console.log(idCross)
if(idCross=="errorDiv"){
$(".error").css("visibility","hidden");}
else {
    $(".success").css("visibility","hidden");}

}

$(document).ready(function () {
  $("#productsTable").on("click","a.delete",(function () {
    confirmation=deleteConfirm();
    if(confirmation==1){ $index = $(this).parent().parent().index();
    products.splice($index - 1, 1);
    console.log($index - 1);
    console.log(products);
    populate();
    if(products.length==0){
        $("#product_list").css("visibility","hidden");
    }}
  }));

  $("#productsTable").on("click","a.edit",(function () {
    $index = $(this).parent().parent().index();
    $("#product_sku").val(products[$index-1].SKU);
    $("#product_name").val(products[$index-1].name);
    $("#product_price").val(products[$index-1].price);
    $("#product_quantity").val(products[$index-1].quantity);
    $("#add_product").val("Update");
    $("#add_product").attr("onclick","update("+$index+")");
    console.log($index - 1);
    console.log(products);
    populate();
  }));
});

