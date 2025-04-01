
const apiKey = "2c231e2e9f1d3aa695062a0516d8f7b0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//lookig for input fild city name//

const searchBox= document.querySelector (".search input");
const searchBtn= document.querySelector (".search btn");
const wheatherIcon= document.querySelector(".wheather-icon");

async function checkWeather(city){
    const response= await fetch (apiUrl + city+ `&appid=${apiKey}`);
//if city name is invalid display error//

    if(response.status == 400){
        document.querySelector(".error"). style.display= "blcok";
        document.querySelector(".weather"). style.display= "none";
    }else 
    var data = await response.json();
    //update the image//

if (data.wheather[0].main == "Clouds"){
    wheatherIcon= "img/cloud.png";
}
else if(data.wheather[0].main == "Clear"){
    wheatherIcon= "img/sunny.png";
}
else if(data.wheather[0].main == "Rain"){
    wheatherIcon= "img/rain.png";
}
else if(data.wheather[0].main == "Drizzle"){
    wheatherIcon= "img/drizze.png";
}
else if(data.wheather[0].main == "Mist"){
    wheatherIcon= "img/snow.png";
}

    //console.log(data);
    // get the h1, h2 and p elemento to append the data//

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.main.wind.spedd= " km/h";

    }
    
//update the city input//
searchBtn.addEventListener("click" , ()=>{
    checkwheather(searchBox.value)
})
checkWeather();



