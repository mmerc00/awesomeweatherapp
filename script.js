//DEPENDENCIES================================================
//DOM Elements
//Initial DATA
var userSearch = "";
var userCityBtn = "";
var cityName = "";
var queryURL =
  "http://api.openweathermap.org/data/2.5/forecast?q=" +
  cityName +
  "&appid=b4ca2617fda8551aa1b532379a0245d5";
$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
  $("#searchinfo").text(result.list[0].weather[0].main);
});
//doc ready

$(document).ready(() => {
  console.log("ready");
});

//FUNCTIONS====================================================
//USER INPUT===================================================
function citiesInterestedIn(){
  localStorage.
}



//A user types a city
$(searchBar)
//A user submits their search
//A users search history is saved
//then the currrent weather of that city shows up
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
