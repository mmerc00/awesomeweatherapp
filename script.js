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
var apiKey = "b4ca2617fda8551aa1b532379a0245d5";
var searchBtn = $("#city-info-button");

//button click, prevent default stops search from refreshing
searchBtn.on("click", function (event) {
  event.preventDefault();
  //City search function to grab weather data
  var citySearch = $("#citySearch").val();

  getWeather(citySearch);
  getForecast(citySearch);
});

// 5 day forecast that is giving me issues
function getWeather(citySearch) {
  var queryURLCurrent =
    " https://api.openweathermap.org/data/2.5/weather?q=" +
    citySearch +
    "&units=imperial&appid=" +
    apiKey;

  $.ajax({
    url: queryURLCurrent,
    method: "GET",
  })
    .then(function (response) {
      // Pulls city name
      $(".current-city").text(response.name);

      // pulls city date
      $("#date").text(moment().format("dddd MMMM Do YYYY"));

      // icon var that will display in card upon search
      $("#icon-image").attr(
        "src",
        "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
      );

      // tempature var that pulls temp from api and fills it in card
      $("#temperature").text(response.main.temp);

      // humidity pullled from api that will display along everything
      $("#humidity").text(response.main.humidity);

      // wind speed information pulled from api
      $("#wind-speed").text(response.wind.speed);

      // uv index using long lat
      getUVI(response.coord.lat, response.coord.lon);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getUVI(latitude, longitude) {
  var uvURL =
    "https://api.openweathermap.org/data/2.5/uvi?appid=" +
    apiKey +
    "&lat=" +
    latitude +
    "&lon=" +
    longitude;
  //uv index stuff that I am not sure why isnt working
  $.ajax({
    url: uvURL,
    method: "GET",
  })
    .then(function (response) {
      var uvIndex = response.value;
      $("#uv-index").text(uvIndex);

      if (uvIndex < 2) {
        $(".index").attr("class", "low");
      } else if (uvIndex < 5) {
        $(".index").attr("class", "moderate");
      } else if (uvIndex < 7) {
        $(".index").attr("class", "high");
      } else if (uvIndex < 10) {
        $(".index").attr("class", "very-high");
      } else {
        $(".index").attr("class", "extreme");
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getForecast(citySearch) {
  var forecastURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    citySearch +
    "&appid=" +
    apiKey +
    "&units=imperial";
  $.ajax({
    url: forecastURL,
    method: "GET",
  })
    .then(function (response) {
      console.log(response);

      var forecast_data = [];
      for (var i = 0; i < response.list.length; i++) {
        var time = response.list[i].dt_txt.split(" ")[1];
        if (time === "12:00:00") {
          forecast_data.push(response.list[i]);
        }
      }

      for (var i = 0; i < forecast_data.length; i++) {
        console.log(forecast_data[i]);
        var time = moment(forecast_data[i].dt_txt).format("dddd MMMM Do YYYY");
        var forecast = $("[data-forecast='" + i + "']");
        forecast.find(".forecast-date").text(time);
      }
      // day one
      // var firstDay = moment(response.list[0].dt_txt).format(
      //   "dddd MMMM Do YYYY"
      // );
      // $("#one").text(firstDay);
      // $("#temperature-one").text(response.list[0].main.temp);
      // $("#humidity-one").text(response.list[0].main.humidity);
      // $("#wind-speed-one").text(response.list[8].wind.speed);
      // $("#pressure-one").text(response.list[8].main.pressure);
      // //Day two
      // var secondDay = moment(response.list[0].dt_txt).format(
      //   "dddd MMMM Do YYYY"
      // );
      // $("#two").text(secondDay);
      // $("#temperature-two").text(response.list[8].main.temp);
      // $("#humidity-two").text(response.list[8].main.humidity);
      // $("#wind-speed-two").text(response.list[8].wind.speed);
      // $("#pressure-two").text(response.list[8].main.pressure);
      // //Day 3
      // var thirdDay = moment(response.list[0].dt_txt).format(
      //   "dddd MMMM Do YYYY"
      // );
      // $("#three").text(thirdDay);
      // $("#temperature-three").text(response.list[16].main.temp);
      // $("#humidity-three").text(response.list[16].main.humidity);
      // $("#wind-speed-three").text(response.list[16].wind.speed);
      // $("#pressure-three").text(response.list[16].main.pressure);
      // //Day 4
      // var fourthDay = moment(response.list[0].dt_txt).format(
      //   "dddd MMMM Do YYYY"
      // );
      // $("#four").text(fourthDay);
      // $("#temperature-four").text(response.list[24].main.temp);
      // $("#humidity-four").text(response.list[24].main.humidity);
      // $("#wind-speed-four").text(response.list[24].wind.speed);
      // $("#pressure-four").text(response.list[24].main.pressure);
      // //Day 5
      // var fifthDay = moment(response.list[0].dt_txt).format(
      //   "dddd MMMM Do YYYY"
      // );
      // $("#five").text(fifthDay);
      // $("#temperature-five").text(response.list[32].main.temp);
      // $("#humidity-five").text(response.list[32].main.humidity);
      // $("#wind-speed-five").text(response.list[32].wind.speed);
      // $("#pressure-five").text(response.list[32].main.pressure);
    })
    .catch(function (err) {
      console.log(err);
    });
}
