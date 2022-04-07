let weather = {
  apiKey: "aaeaea2b96bdbd49c22e139d730fc13d",
  weatherData: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
    )
      .then((response) => response.json())
      .then((data) => this.showWeather(data));
  },
  showWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { pressure } = data.main;
    const { feels_like } = data.main;
    document.querySelector(".city").innerText = name;
    document.querySelector(
      ".icon"
    ).src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temperature").innerText = `Temperature: ${temp}°C`;
    document.querySelector(".humidity").innerText = `Humidity: %${humidity}`;
    document.querySelector(".wind").innerText = `Wind Speed: ${speed} km/hr`;
    document.querySelector(".pressure").innerText = `Pressure: ${pressure} hPa`;
    document.querySelector(
      ".feelslike"
    ).innerText = `Feels Like: ${feels_like}°C`;
  },
  getSearchContent: function () {
    this.weatherData(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.getSearchContent();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.getSearchContent();
    }
  });
