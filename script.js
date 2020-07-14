var searchHistory = ["Dallas", "Mexico City"];

$(document).ready(() => {
  console.log("ready!");
  displayHistory();

  $("#searchCity").on("submit", searchCity);
});
// DOM ELEMNTS
// INITAL DATA

function displayHistory() {
  $("#history").empty();
  for (var i = 0; i < searchHistory.length; i++) {
    var cityDiv = $("<div>");
    cityDiv.addClass("list-group-item");
    cityDiv.text(searchHistory[i]);

    $("#history").append(cityDiv);
  }
}

//user inputs search
function searchCity(event) {
  event.preventDefault();

  //API STUFF
  var cityName = $("#cityName").val();
  searchHistory.unshift(cityName);
  displayHistory();

  $("#cityName").val("");

  var queryURL =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&appid=b4ca2617fda8551aa1b532379a0245d5";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
}
