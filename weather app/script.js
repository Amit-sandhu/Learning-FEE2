const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const message = document.getElementById("message");
const weatherResult = document.getElementById("weatherResult");

const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const condition = document.getElementById("condition");
const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

// Maps Open-Meteo's weather codes to plain text.
// Reference: https://open-meteo.com/en/docs
function getWeatherText(code) {
  if (code === 0) return "Clear sky";
  if (code >= 1 && code <= 3) return "Partly cloudy";
  if (code >= 45 && code <= 48) return "Foggy";
  if (code >= 51 && code <= 57) return "Drizzle";
  if (code >= 61 && code <= 67) return "Rainy";
  if (code >= 71 && code <= 77) return "Snowy";
  if (code >= 80 && code <= 82) return "Rain showers";
  if (code >= 95) return "Thunderstorm";
  return "Unknown";
}

async function getWeather(city) {
  message.textContent = "Loading...";
  weatherResult.classList.add("hidden");

  try {
    // Step 1: turn the city name into coordinates
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        city
      )}&count=1`
    );
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      message.textContent = "City not found. Try another name.";
      return;
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    // Step 2: fetch the current weather for those coordinates
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code`
    );
    const weatherData = await weatherRes.json();
    const current = weatherData.current;

    cityName.textContent = `${name}, ${country}`;
    temp.textContent = `${Math.round(current.temperature_2m)}°C`;
    condition.textContent = getWeatherText(current.weather_code);
    feelsLike.textContent = `${Math.round(current.apparent_temperature)}°C`;
    humidity.textContent = `${current.relative_humidity_2m}%`;
    wind.textContent = `${current.wind_speed_10m} km/h`;

    message.textContent = "";
    weatherResult.classList.remove("hidden");
  } catch (error) {
    message.textContent = "Something went wrong. Please try again.";
  }
}

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city === "") {
    message.textContent = "Please enter a city name.";
    return;
  }
  getWeather(city);
});

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});
