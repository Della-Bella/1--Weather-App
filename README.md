
# Simple Weather App - Learning Project

This project is a basic web app that lets you search for a city and see its current weather conditions. It was built to practice fetching data from an online service (an API) and displaying it on a webpage.

** Live Demo:** https://weatherapp-dellabella.netlify.app/

## How It Works (The Basics):

1.  **API Setup:**
    *   We have an `apiKey` (a special secret code) and an `apiUrl` (the web address) for the OpenWeatherMap service. These let us ask OpenWeatherMap for weather information.

2.  **Connecting to HTML:**
    *   We use `document.querySelector` to get references to important HTML elements:
        *   The `input` box where the user types the city (`searchBox`).
        *   The search `button` (`searchBtn`).
        *   The `img` element where the weather icon (sunny, rainy, etc.) will go (`weatherIcon`).
        *   Other elements to display the city name, temperature, humidity, wind speed, and error messages.

3.  **Fetching Weather Data (`checkWeather` function):**
    *   This function does the main work. It's marked `async` because getting data from the internet takes time.
    *   It uses `fetch` to send a request to the `apiUrl`, adding the `city` name from the search box and our `apiKey`.
    *   `await` tells the code to pause and wait for the weather service to send back a `response`.

4.  **Handling the Response:**
    *   **Error Check:** It first checks if the `response.status` is `404`. This code means "Not Found" (the city name was probably invalid). If so, it shows an error message on the page.
    *   **Success:** If the city was found (not a 404 error), it uses `await response.json()` to convert the raw response data into a format JavaScript can easily use (`data`).
    *   It then hides any previous error message and makes the weather information section visible.

5.  **Updating the Webpage:**
    *   It takes the `data` received from OpenWeatherMap and updates the webpage:
        *   Sets the correct weather icon (`weatherIcon.src`) based on the weather condition (`data.weather[0].main` like "Clouds", "Rain", "Clear").
        *   Updates the text (`.innerHTML`) for the city name, temperature, humidity, and wind speed using information from the `data`.

6.  **Making the Search Button Work:**
    *   We use `searchBtn.addEventListener("click", ...)` to listen for clicks on the search button.
    *   When clicked, it runs the `checkWeather` function, passing in the text currently typed in the search box (`searchBox.value`).

7.  **Initial State:**
    *   The `checkWeather("");` line at the end might be used to set an initial state (though searching for an empty city `""` will likely show the "Not Found" error by default).

## Main Things Learned:

*   How to use a third-party **API** (OpenWeatherMap) to get real-world data.
*   Using `fetch` along with `async` and `await` to handle requests that take time (like getting data over the internet).
*   Reading **JSON** data returned from an API.
*   Selecting HTML elements using `document.querySelector`.
*   Updating HTML content (`.innerHTML`) and attributes (`.src`) dynamically with JavaScript.
*   Changing CSS styles (`.style.display`) to show/hide elements.
*   Basic **error handling** (checking the response status code).
*   Making buttons interactive using `addEventListener`.

This was a fun way to practice making webpages dynamic and interacting with external services!
