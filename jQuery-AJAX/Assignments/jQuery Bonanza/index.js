// Click and toggle events

$("#btn-click").click(function () {
	$(".btn-click-p").toggle(200);
});

// Animation

$("#btn-animate").click(function () {
	$(".animate .div-animate").animate(
		{
			opacity: "0.5",
			left: 200,
		},
		1000
	);
	$(".animate .div-animate").animate(
		{
			opacity: "1",
			left: 0,
		},
		1000
	);
});

// Keyup and append

$('#search').keyup(function(e){
    var code = e.which;
    if(code == 13){
        e.preventDefault();
        $('ul').append('<li>'+e.target.value+'</li>');
        $(this).val('')
    }
});

// Remove list item

// $('#list-ul li').click(function(e){   //--> This one doesn't work..
//     (e.target).remove()
// })

$('ul').click('li', function(e){
    (e.target).remove()
})