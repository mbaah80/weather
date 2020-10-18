
let API_KEY = "4a4074e9df4f6f3805e088217d144fa4";

getWeatherData = (city) =>{
    const url = "https://api.openweathermap.org/data/2.5/weather";
    const full_url = `${url}?q=${city}&appid=${API_KEY}&units=imperial`;
    const weatherPromise = fetch(full_url);
     return weatherPromise.then((res)=>{
        return res.json();
    })
}



searchCity = () =>{
   const city =  document.getElementById('user-city').value;
    getWeatherData(city)
    .then((res) =>{
        showweatherData(res)
    }).catch((err)=>{
        showweatherData(err)
    })
    
}

showweatherData = (weatherData) =>{
    document.getElementById('city-name').innerText = weatherData.name;
    document.getElementById('weather-type').innerText = weatherData.weather[0].main
    document.getElementById('temp').innerText = weatherData.main.temp;
    document.getElementById('min-temp').innerText = weatherData.main.temp_min;
    document.getElementById('max-temp').innerText = weatherData.main.temp_max
}

