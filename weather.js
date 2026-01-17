const apiKey = "YOUR_OPENWEATHER_API_KEY";

function getWeather(city="Delhi"){
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
 .then(res=>res.json())
 .then(data=>{
   let temp = data.main.temp;
   let weather = data.weather[0].main;

   let alertMsg = "";

   if(weather.includes("Rain")){
     alertMsg="☔ It's raining – Reduce watering today";
   } else if(temp > 35){
     alertMsg="☀️ High heat – Water plants in evening";
   } else if(temp < 15){
     alertMsg="❄️ Cold weather – Reduce fertilizer";
   } else {
     alertMsg="🌿 Weather is ideal for plant growth";
   }

   document.getElementById("weatherAlert").innerText = alertMsg;
 });
}
const apiKey = "YOUR_OPENWEATHER_API_KEY";

function autoDetectWeather(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(pos=>{
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
      .then(res=>res.json())
      .then(data=>{
        showWeatherAlert(data);
      });
    });
  }
}

function showWeatherAlert(data){
  const temp = data.main.temp;
  const weather = data.weather[0].main;
  const city = data.name;

  let msg = `📍 ${city} : `;

  if(weather.includes("Rain"))
    msg += "☔ Raining – Skip watering today";
  else if(temp > 35)
    msg += "☀️ Hot – Water plants in evening";
  else if(temp < 15)
    msg += "❄️ Cold – Reduce fertilizer";
  else
    msg += "🌿 Perfect weather for plants";

  document.getElementById("weatherAlert").innerText = msg;
}
function autoDetectWeather(){
 if(!navigator.geolocation){
  document.getElementById("weatherAlert").innerText="Location not supported";
  return;
 }

 navigator.geolocation.getCurrentPosition(
  pos => {
   document.getElementById("weatherAlert").innerText =
    "📍 Location detected – Weather based care active 🌿";
  },
  () => {
   document.getElementById("weatherAlert").innerText =
    "📍 Location permission denied";
  }
 );
}
function getWeather(){
  let city = document.getElementById("cityInput").value;

  if(city.trim() === ""){
    alert("Please enter city name");
    return;
  }

  let apiKey = "YOUR_API_KEY";  // 🔴 replace with your real API key

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(res => res.json())
  .then(data => {
    if(data.cod !== 200){
      document.getElementById("weatherResult").innerHTML = "City not found!";
      return;
    }

    document.getElementById("weatherResult").innerHTML = `
      <h3>${data.name}</h3>
      <p>🌡 Temperature: ${data.main.temp}°C</p>
      <p>🌤 Weather: ${data.weather[0].description}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬 Wind: ${data.wind.speed} m/s</p>
    `;
  })
  .catch(err => {
    document.getElementById("weatherResult").innerHTML = "Error fetching weather";
  });
}
