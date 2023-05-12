$("img").click(function() {
    $(this).fadeOut(1000, function() {
        $(this).attr("src",$(this).attr("alt-pic"));
    }).fadeIn(1000);
});


// $("img").click(function() {
//     $(this).slideUp(1000, function() {
//         $(this).attr("src",$(this).attr("alt-pic"));
//     }).slideDown(1000);
//     // return false;
// });


   