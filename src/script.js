/* Fetching Data from OpenWeatherMap API */

var humidityElement = document.createElement("span");
humidityElement.style.marginTop = "10px";
var parentElement = document.querySelector(".humidity");
var windElement = document.createElement("span");
windElement.style.marginTop = "10px";
var parentElement1 = document.querySelector(".wind");

let weather = {
  apiKey: "45ae1c4a404a89615a80604359063465",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";

    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    humidityElement.innerText = humidity + "%";
    parentElement.appendChild(humidityElement);

    windElement.innerText = speed + " km/h";
    parentElement1.appendChild(windElement);


    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

/* Fetching Data from OpenCageData Geocoder */
let geocode = {
  reverseGeocode: function (latitude, longitude) {
    const apikey = "45ae1c4a404a89615a80604359063465";
    var request_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;

    // var api_url = "https://api.opencagedata.com/geocode/v1/json";


   
    fetch(request_url)
    .then(response => response.json())
    .then(data => {
      // Process the weather data
      console.log(data);
    })
    .catch(error => {
      console.log('Error fetching weather data:', error);
    });
    var request = new XMLHttpRequest();
    request.open("GET", request_url, true);

    request.onload = function () {
      if (request.status == 200) {
        var data = JSON.parse(request.responseText);
        console.log(data);
        weather.fetchWeather(data.name);
      } else if (request.status <= 500) {
        console.log("unable to geocode! Response code: " + request.status);
        var data = JSON.parse(request.responseText);
        console.log("error msg: " + data.status.message);
      } else {
        console.log("server error");
      }
    };

    request.onerror = function () {
      console.log("unable to connect to server");
    };

    request.send();
  },
  getLocation: function () {
    function success(data) {
        const latitude = data.coords.latitude;
        const longitude = data.coords.longitude;
      geocode.reverseGeocode(latitude, longitude);
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, console.error);
    } else {
      weather.fetchWeather("London");
    }
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("london");

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

geocode.getLocation();
// Your existing weather app code

// Merge the news API code
const apiKey = 'ddfc64df66c84751b51cc2fb02b6fd50';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${apiKey}`;

// Your existing weather app code

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Process the news data
    if (data.articles && Array.isArray(data.articles)) {
      const articles = data.articles;
      const newsFeedContainer = document.getElementById('newsFeedContainer');

      // Generate the news feed HTML dynamically
      let newsHTML = '';
      articles.forEach(article => {
        newsHTML += `
          <div class="news-item">
            <div class="news-item-title">${article.title}</div>
            <div class="news-item-description">${article.description}</div>
          </div>
        `;
      });

      // Insert the news feed HTML into the container
      newsFeedContainer.innerHTML = newsHTML;
    } else {
      console.log('No news articles found.');
    }
  })
  .catch(error => {
    console.log('Error fetching news data:', error);
  });
