// //check specific todos by clicking
//
// $("li").click(function() {
//   //if li is gray, turn it to black
//   if($(this).css("color") === "rgb(128, 128, 128)")
//   {
//     //turn it into black
//     $(this).css({
//       color: "black",
//       textDecoration: "none"
//     });
//   }
//   else{
//     $(this).css({
//       color: "gray",
//       textDecoration: "line-through"
//     });
//   }
// });

//ul already exist on the page, li could be the new added element
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//when click on the X, the selected list should disappear

$("ul").on("click","span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

//when user enter something then hit enter, it automatically add
//to the todo list

$('input[type="text"]').keypress(function(e) {
  //e means the pressed key

  if (e.which === 13) {
    var todoText = $(this).val();
    //clear the box after enter information
    $(this).val(" ");
    //create a new li added to ul
    $("ul").append('<li><span><i class="fa fa-trash"></i></span>' + todoText + "</li>");
  }
});

$(".fa-plus").click(function(){
  $('input[type="text"]').fadeToggle();
});
