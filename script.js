const apiKey = "4d3053efca5e30085f6870ca5a9d241f" ;
const apiUrlReal = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl +city + `&appid=${apiKey}`);
    var data = await response.json();

     if(response.status === 404 || response.status === undefined){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
     }else{
        document.querySelector(".error").style.display = "none"; 
     }
    
    document.querySelector(".city1").innerHTML = data.name;
    document.querySelector(".city2").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
    if(data.weather[0].main === "Clear"){
        weatherIcon.src = "./images/clear.png"
    }else if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "./images/clouds.png"
    }else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "./images/drizzle.png"
    }else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "./images/mist.png"
    }else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "./images/rain.png"
    }else if(data.weather[0].main === "Snow"){
        weatherIcon.src = "./images/snow.png"        
    }else{
        weatherIcon.innerHTML = data.weather[0].main ; 
    }
    console.log(data)
}
searchBtn.addEventListener("click",()=>{
    document.querySelector(".weather").style.display = "block";
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keydown",(event)=>{
    if (event.keyCode == 13){
    document.querySelector(".weather").style.display = "block";
    checkWeather(searchBox.value);
    }else {
        return
    }
})