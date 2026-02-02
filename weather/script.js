//we can only grab the element once the dom is being loaded
document.addEventListener('DOMContentLoaded', () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityName = document.getElementById("city-name");
  const tempDisplay = document.getElementById("temperature");
  const descriptionDisp = document.getElementById("description");
  const errorMsg = document.getElementById("error-message");
  const API_KEY = "edb1554414d4f20e5f2b1d136acec260"; //ENV VAriable


    getWeatherBtn.addEventListener('click', async () => {
      const city = cityInput.value.trim();
      if(!city) return; //if no input
      //it may throw an error and derver/db is always in different continent

      try {
         const weatherData = await fetchWeatherData(city);
         displayWeather(weatherData);

      } catch(error) {
        showError();
      }
       
    })

    async function fetchWeatherData(city) {
      //to fetch data from server
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

      const response = await fetch(url);
      console.log(typeof response);
      console.log("RESPONSE", response);

      if(!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      return data;
    }

    function displayWeather(data) {
      //to diplay report
      console.log(data);
      const {name, main, weather} = data;
      cityName.textContent = name;

      //unlock the display
      tempDisplay.textContent = `Temperature : ${main.temp}`;
      descriptionDisp.textContent = `weather : ${weather[0].description}`
      weatherInfo.classList.remove('hidden');
      errorMsg.classList.add('hidden');
    }

    function showError() {
      //to display error
      errorMsg.textContent = "City not found. Please try again.";
      errorMsg.classList.remove('hidden');
      weatherInfo.classList.add('hidden');
    }

});