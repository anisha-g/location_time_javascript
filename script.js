
///////////////////// script to display /////


function display()
{

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);




function myfunction() {
 var txt1 = "<p>Text.</p>";        // Create text with HTML
  var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
  var txt3 = document.createElement("p");
  txt3.innerHTML = "Text.";         // Create text with DOM
  $("body").append(txt1, txt2, txt3); 
  $("body").css({"z-index" : "1"});  // Append new elements
  txt2.css({"background-color": "yellow", "font-size": "200%" , "margin-top":"100px","z-index" : "100","position":"fixed"});
}
setTimeout(myfunction, 5000);

}


//////////////////////////// script to find location

function location()
{


if ("geolocation" in navigator) {
  // check if geolocation is supported/enabled on current browser
  navigator.geolocation.getCurrentPosition(
   function success(position) {
     // for when getting location is a success
     console.log( position.coords.latitude,position.coords.longitude);
   },
  function error(error_message) {
    // for when getting location results in an error
    console.error('An error has occured while retrieving location', error_message)
  }  
);
} else {
  // geolocation is not supported
  // get your location some other way
  console.log('geolocation is not enabled on this browser')
}

}

////////////////////////////////// script to find current time

function current_time()

{

var today = new Date();
var hours = String(today.getHours()).padStart(2, '0');
var min = String(today.getMinutes()).padStart(2, '0');
var sec = String(today.getSeconds()).padStart(2, '0');
// hours = checkTime(hours);
// min = checkTime(min);
// sec = checkTime(sec);
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();




//
// function checkTime(i) {
//   if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//   return i;

// }
var currentime =  yyyy + '-' + mm + '-' + dd + "T" + hours+ ":" +min  + ":" + sec;
console.log(currentime)

return currentime;
}

