//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=2193732&appid=f469930a2094b212b1b978211a0dffd1&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myData) => {
    //Once it comes back, display it to the console.
    console.log(myData);
    
  document.getElementById("place").innerHTML = myData.name;
  document.getElementById("currentTemp").innerHTML = myData.main.temp;
  document.getElementById("windSpeed").innerHTML = myData.wind.speed;

  const iconCode = myData.weather[0].icon;
  const icon_path = "//openweathermap.org/img/w/"+ iconCode +".png";

  document.getElementById("weather_icon").src = icon_path;
    

 }); //end of "then" fat arrow function



