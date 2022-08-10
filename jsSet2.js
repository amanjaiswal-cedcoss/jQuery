$(document).ready(function () {
  $products = [
    { id: 101,name:"Mouse",image:"https://resource.logitech.com/content/dam/logitech/en/products/mice/pop-wireless-mouse/gallery/pop-mouse-gallery-daydream-1.png", price: 14.99, quantity: 0, totalprice:0 },
    { id: 102,name:"Keyboard",image:"http://sc04.alicdn.com/kf/Hb6c00f6b3a00401e8d307589cc6f0c17G.jpg", price: 79.99, quantity: 0, totalprice:0 },
    { id: 103,name:"Handsfree",image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYMC2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1601053171000", price: 17.99, quantity: 0, totalprice:0 },
  ];
  $subtotal=$taxes=$total=0;
  $populate()
  function $populate(){
   
    $subtotal=$taxes=$total=0;
    $("#divProducts").html("");
    for(i=0;i<$products.length;i++){
      if($products[i].quantity>1){
        $shipping=parseFloat(5.00);
      }
      else{
        $shipping=parseFloat(0.00);
      }
        $("#divProducts").append("<div id='product"+$products[i].id+"' class='products'><div class='image'><img src='"+$products[i].image+"'/></div><div class='details'><h2>"+$products[i].name+"</h2><p id='paraDetails'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi id, eum, pariatur aliquam fugit eligendi dolore voluptatibus enim placeat nesciunt molestiae exercitationem maiores adipisci voluptas quo accusantium praesentium similique consequatur.</p><div class='butPri'><div class='buttons'><button id='btnRemove'>-</button><input class='inpQuantity' id='inpQuantity"+$products[i].id+"' value='"+$products[i].quantity+"'/><button id='btnAdd'>+</button></div><div class='prices'><p id='price'>"+$products[i].price+"€ </p><p id='totalPrice'>"+$products[i].totalprice+"€ </p></div></div></div></div>")
        $subtotal+=parseFloat($products[i].totalprice);
     }
     $taxes=0.05*$subtotal;
     $taxes=parseFloat($taxes).toFixed(2);
     console.log($taxes);
     $total=parseFloat($subtotal)+parseFloat($taxes)+parseFloat($shipping);
     console.log($total);
     $total=parseFloat($total).toFixed(2);
     
  }

$("#divProducts").on("click","#btnAdd",function(){
  console.log($index=$(this).parent().parent().parent().parent().index())
   $products[$index].quantity++;
   $products[$index].totalprice=parseFloat($products[$index].quantity*$products[$index].price).toFixed(2);
   $populate();
   $populateBill();
})
$("#divProducts").on("click","#btnRemove",function(){
    console.log($index=$(this).parent().parent().parent().parent().index())
    if($products[$index].quantity>0){
     $products[$index].quantity--;
     $products[$index].totalprice=parseFloat($products[$index].quantity*$products[$index].price).toFixed(2);
     $populate();
     $populateBill();
    }
     else{
       return;
     }
  })
  $("#divProducts").on("keyup",".inpQuantity",function(){
    $id=$(this).attr("id");
    console.log($index=$(this).parent().parent().parent().parent().index())
     $products[$index].quantity=$(this).val();
     $products[$index].totalprice=parseFloat($products[$index].quantity*$products[$index].price).toFixed(2);
    console.log($id)
     $populate();
     $populateBill();
     $("#"+$id).focus()
  })

  function $populateBill(){
$("#totalDetails").html("<p id='paraSubtotal'>Subtotal: "+$subtotal+"</p><p id='paraTaxes'>Taxes(5%): "+$taxes+"</p><p id='paraShipping'>Shipping:5.00€</p>")
$("#total").html("<p id='paraTotal'>Total: "+$total+"</p><button id='btnCheckout'>Checkout</button>")
}

});
