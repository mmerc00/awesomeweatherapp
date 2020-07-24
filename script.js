// var searchHistory = ["Dallas", "Mexico City"];
/* 
$(document).ready(); => {
  console.log("ready!"); */
/// displayHistory();

//   $("#searchCity").on("submit", searchCity);
// });
// // DOM ELEMNTS
// // INITAL DATA

// function displayHistory() {
//   $("#history").empty();
//   for (var i = 0; i < searchHistory.length; i++) {
//     var cityDiv = $("<div>");
//     cityDiv.addClass("list-group-item");
//     cityDiv.text(searchHistory[i]);

//     $("#history").append(cityDiv);
//   }
// }

// //user inputs search
// function searchCity(event) {
//   event.preventDefault();

//   var cityName = $("#cityName").val();
//   searchHistory.unshift(cityName);
//   displayHistory();

//   $("#cityName").val("");

//   var queryURL =
//     "http://api.openweathermap.org/data/2.5/forecast?q=" +
//     cityName +
//     "&appid=b4ca2617fda8551aa1b532379a0245d5";

//   $.ajax({
//     url: queryURL,
//     method: "GET",
//   }).then(function (response) {
//     console.log(response);
//   });

//this variable was created to fulfill the
var searchBtn = $("#city-info-button");

//button click, prevent default stops search from refreshing
searchBtn.on("click", function (event) {
  event.preventDefault();
  //City search function to grab weather data
  var citySearch = $("#citySearch").val();
  console.log("City Search:", citySearch);
  var apiKey = "b4ca2617fda8551aa1b532379a0245d5";
  var queryURLCurrent =
    " https://api.openweathermap.org/data/2.5/weather?q=" +
    citySearch +
    "&units=imperial&appid=" +
    apiKey;
  console.log("queryURL:", queryURLCurrent);
  //used imperial to get farenheight
  //then the currrent weather of that city shows up
  $.ajax({
    url: queryURLCurrent,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    // Pulls city name
    var cityName = response.name;
    $("#city-name").text(cityName);
    console.log("cityName:", cityName);
    // pulls city date
    var date = moment();
    var dateDisplay = date.format("dddd MMMM Do YYYY");
    $("#date").text(dateDisplay);
    console.log("Date Display:", dateDisplay);
    // icon var that will display in card upon search
    var iconCode = response.weather[0].icon;
    var weatherIcon = "https://openweathermap.org/img/w/" + iconCode + ".png";
    console.log(iconCode);
    $("#icon-image").attr("src", weatherIcon);
    // tempature var that pulls temp from api and fills it in card
    var temperature = response.main.temp;
    $("#temperature").text(temperature);
    console.log("Temperature:", temperature);
    // humidity pullled from api that will display along everything
    var humidity = response.main.humidity;
    $("#humidity").text(humidity);
    console.log("Humidity", humidity);
    // wind speed information pulled from api
    var windSpeed = response.wind.speed;
    $("#wind-speed").text(windSpeed);
    console.log("Wind Speed:", windSpeed);
    // uv index using long lat
    var latitude = response.coord.lat;
    var longitude = response.coord.lon;
    var uvURL =
      "https://api.openweathermap.org/data/2.5/uvi?appid=" +
      apiKey +
      "&lat=" +
      latitude +
      "&lon=" +
      longitude;
    console.log("uvURL:", uvURL);
    //uv index stuff that I am not sure why isnt working
    $.ajax({
      url: uvURL,
      method: "GET",
    }).then(function (response) {
      console.log("UV", response);
      var uvIndex = response.value;
      $("#uv-index").text(uvIndex);
      if (uvIndex < 2) {
        $(".index").attr("class", "low");
        console.log("Dont worry, You're safe!");
      }
      if (uvIndex >= 2 && uvIndex <= 5) {
        $(".index").attr("class", "moderate");
        console.log("It's getting risky");
      }
      if (uvIndex > 5 && uvIndex <= 7) {
        $(".index").attr("class", "high");
        console.log("Uh oh!");
      }
      if (uvIndex > 7 && uvIndex <= 10) {
        $(".index").attr("class", "very-high");
        console.log("Yikes! You better stay inside!");
      }
      if (uvIndex > 10) {
        $(".index").attr("class", "extreme");
        console.log("You will defintely ignite on fire");
      }
      console.log("UV Index:", uvIndex);
    });
  });
});
// 5 day forecast that is giving me issues

var forecastURL =
  "https://api.openweathermap.org/data/2.5/forecast?q=" +
  citySearch +
  "&appid=b4ca2617fda8551aa1b532379a0245d5" +
  "&units=imperial";
$.ajax({
  url: forecastURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
  // day one
  var firstDay = moment(response.list[0].dt_txt).format("dddd MMMM Do YYYY");
  $("#one").text(firstDay);
  console.log(firstDay);
  $("#temperature-one").text(response.list[0].main.temp);
  $("#humidity-one").text(response.list[0].main.humidity);
  $("#icon-image").text(response.list[0].wind.speed);
  //Day two
  var secondDay = moment(response.list[0].dt_txt).format("dddd MMMM Do YYYY");
  $("#temperature-two").text(response.list[8].main.temp);
  $("#humidity-two").text(response.list[8].main.humidity);
  $("#wind-speed-two").text(response.list[8].wind.speed);
  $("#pressure-two").text(response.list[8].main.pressure);

  $("#temperature-three").text(response.list[16].main.temp);
  $("#humidity-three").text(response.list[16].main.humidity);
  $("#wind-speed-three").text(response.list[16].wind.speed);
  $("#pressure-three").text(response.list[16].main.pressure);

  $("#temperature-four").text(response.list[24].main.temp);
  $("#humidity-four").text(response.list[24].main.humidity);
  $("#wind-speed-four").text(response.list[24].wind.speed);
  $("#pressure-four").text(response.list[24].main.pressure);

  $("#temperature-five").text(response.list[32].main.temp);
  $("#humidity-five").text(response.list[32].main.humidity);
  $("#wind-speed-five").text(response.list[32].wind.speed);
  $("#pressure-five").text(response.list[32].main.pressure);
});
