let input = document.querySelector("#input");
let manzil = document.querySelector("#location");
let gradus= document.querySelector("#gradus");
let type = document.querySelector("#type");
let btn = document.querySelector("#btn")

 const apKey = "820b05bd9bcb9184bba3c8c9a15c560c"




btn.addEventListener('click' , ()=>{
  const address =input.value;
  if(address){
    fetchWeather(address)

  }
})




 function fetchWeather(address) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${apKey}`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    manzil.innerHTML=`${data.name}   ${data.sys.country}`;
    gradus.innerHTML=`${Math.round(data.main.temp)-273}°C`;
    type.innerHTML=data.weather[0].description;

  })
  .catch(error=>{
    console.error('Error fetching weather data:', error);
  })
 }