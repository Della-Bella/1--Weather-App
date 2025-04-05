const apiKey = "2c231e2e9f1d3aa695062a0516d8f7b0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// looking for input field and button
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    // If city name is invalid, display error
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();

        // Hide error message and show weather info
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";

        // Update the weather icon based on condition
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "img/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "img/sunny.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "img/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "img/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "img/snow.png";
        }

        // Update the city, temperature, humidity, and wind speed
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    }
}

// Update the city input on button click
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

// Optional: You can set a default city when the page loads, e.g., "New York"
checkWeather("");
