 const APIkey="9adf16e64e5e20e93dfe2928e343e7a6";
 const URL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 const search=document.querySelector(".search input");
 const searchbtn=document.querySelector(".search button");
 const weather_icon=document.querySelector(".icon");
 
 async function checkweather(city){
    const response=await fetch(URL + city +`&appid=${APIkey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    } else{
    var data=await response.json();
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";
    if(data.weather[0].main=="Clouds") {
        weather_icon.src="weather-app-img (1)/images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weather_icon.src="weather-app-img (1)/images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weather_icon.src="weather-app-img (1)/images/rain.png";
    }
    
    else if(data.weather[0].main=="Snow"){
        weather_icon.src="weather-app-img (1)/images/snow.png";
    }
    else if(data.weather[0].main=="Mist"){
        weather_icon.src="weather-app-img (1)/images/mist.png";
    }
   document.querySelector(".weather").style.display="block";
 }}
 searchbtn.addEventListener("click",()=>{
    checkweather(search.value);
 });
