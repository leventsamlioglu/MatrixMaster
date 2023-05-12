$("img").click(function () {
	$(this)
		.fadeOut(1000, function () {
			var src = $(this).attr("src");
			$(this).attr("src", $(this).attr("alt-pic"));
			$(this).attr("alt-pic", src);
		})
		.fadeIn(1000);
});

// $("img").click(function() {
//     $(this).slideUp(1000, function() {
//         $(this).attr("src",$(this).attr("alt-pic"));
//     }).slideDown(1000);
//     // return false;
// });
