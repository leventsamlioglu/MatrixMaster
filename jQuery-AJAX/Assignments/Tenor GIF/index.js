let url = $("#button").click(function () {
	$("#gif").empty();
	grab_data();
	$("#input").val("");
});

function createRequest(url) {
	// create the request object
	var xmlHttp = new XMLHttpRequest();

	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			// Parse the JSON response
			var response_objects = JSON.parse(xmlHttp.responseText);

			gifs = response_objects["results"];

			gifs.map((gif) => {
				$("#gif").append(`<img src="${gif["media_formats"]["gif"]["url"]}"/>`);
			});
		}
	};

	// open as a GET call, pass in the url and set async = True
	xmlHttp.open("GET", url, true);

	// call send with no params as they were passed in on the url string
	xmlHttp.send(null);

	return;
}

// function to call the trending and category endpoints
function grab_data() {
	// set the apikey and limit
	var apikey = "AIzaSyDWMTZwwSF1FiWG_B7p7z7o2dvK4asYinc";
	var clientkey = "my_test_app";
	var lmt = 12;

	// test search term
	let search_term = $("#input").val();

	// using default locale of en_US
	var search_url =
		"https://tenor.googleapis.com/v2/search?q=" +
		search_term +
		"&key=" +
		apikey +
		"&client_key=" +
		clientkey +
		"&limit=" +
		lmt;

	createRequest(search_url);

	// data will be loaded by each call's callback
	return;
}
