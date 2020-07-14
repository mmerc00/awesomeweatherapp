// DOM ELEMNTS
// INITAL DATA
// A user types in a city
$("#city-info-button").on("click", function () {
  // a user submits their search
  console.log(city);

  var queryURL =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&appid=b4ca2617fda8551aa1b532379a0245d5";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
   var iconCode = response.list[0].weather[0].icon;
    var iconImage = "http://openweathermap.org/img/w/" + iconCode + ".png";
    console.log(iconCode);
    $("#icon-image").attr("src", iconImage);
  });
});

//vars for cities since this would be easier than pulling from api
var apikey = b4ca2617fda8551aa1b532379a0245d
var cities = {
"Boston" : {cords: {latitude: 42.361145 , longitude: -71.057083} },
"Maimi" : {cords: {latitude: 25.761681 , longitude: -80.191788} },
"Bangkok" : {cords: {latitude: 13.756331 , longitude: 100.501762} },
"Sydney" : {cords: {latitude: -33.868820, longitude: 151.209290} },
"New York City" : {cords: {latitude: 40.7128 , longitude: 74.0060} },
}



//display todays date somewhere
var date = moment().format("M/D/YYYY");
var now = moment().format("H");



$(".search").on("click", function("M/D/YYYY")){
  var date = moment();
  var dateDisplay = date.format();
  var newSpan = $("<span>"); //not sure what that is about
newSpan.text(dateDisplay);
newSpan.attr("class", "current-date");
}

$("#.cardheader")


//button click woth city
var cityName = $("#city").val();


//add prevent default
 
//A user submits their search


//A users search history is saved local storage //append

//then the currrent weather of that city shows up





//cards display future weather
//$("#")




//they see the city name,
//the date,
//an icon representation of weather conditions,
//the temperature,
//the humidity,
//the wind speed,
//and the UV index
//based on the UV Index
//the color is green for favorable
//the color is purple for moderate
//the color is red for severe
//They also see the 5 day forecast of their city that they searched
//the date,
//an icon representation of weather conditions,
//the temperature,
//and the humidity


//If the user searches for another city, then their past city search is saved
//The user can click on past city searches and view the weather
//Display Data
