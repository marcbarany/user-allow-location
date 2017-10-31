
//$(document).ready(function(){
/* In order to call a function using html onclick event document ready has been removed and this file is loaded in the head */

	function getLocation () {

		if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);}
		else {
			$("location").html("Geolocation is not supported by this browser.");
		}

	}

	function showPosition(position) {
		$("#location").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
	}

	
//});