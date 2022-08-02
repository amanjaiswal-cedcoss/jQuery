$(document).ready(function () {
    $("body").on("click","#add",(function () {
     $("body").append("<div class='parent'><input type='text' placeholder='Enter Class'/><input type='text' placeholder='Enter Board'/><input type='text' placeholder='Enter Marks'/><input type='text' placeholder='Enter Division'/><button id='remove'>-</button></div>")
    }));
    $("body").on("click","#remove",(function () {
        $(this).parent().remove();
        // $("body").append("<div class='parent'><input type='text' placeholder='Enter Class'/><input type='text' placeholder='Enter Board'/><input type='text' placeholder='Enter Marks'/><input type='text' placeholder='Enter Division'/><button id='add'>+</button><button id='remove'>-</button></div>")
       }));
    
  });
//   comment