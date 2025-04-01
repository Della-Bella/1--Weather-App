
cont apiKey= 9fc35e3c8a4706fad4c9af100dfa8bd8
constapiUrl= https://api.openweathermap.org/data/2.5/weather?units=metricq&=london";

async function checkWeather(){
    const response= await fetch ( apiUrl + `&appid=${apiKey}`);
    var data= awiat response.jason();

    console.log(data);
}
checkWeather()