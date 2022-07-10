const weatherURL = "//api.openweathermap.org/data/2.5/weather?id=2655804&appid=f469930a2094b212b1b978211a0dffd1&units=imperial";

fetch(weatherURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        // console.log(weatherInfo);
        document.querySelector(".current-weather .place").innerHTML = weatherInfo.name;
        document.querySelector(".current-weather .temperature").innerHTML = weatherInfo.main.temp;
        document.querySelector(".current-weather .humidity").innerHTML = weatherInfo.main.humidity;
        document.querySelector(".current-weather .description").innerHTML = weatherInfo.weather[0].description;
        
        const iconCode = weatherInfo.weather[0].icon;
        const icon_path = "//openweathermap.org/img/w/"+ iconCode +".png";
        document.querySelector(".current-weather .weather-img").src = icon_path;
    });

const weatherForecastURL = "//api.openweathermap.org/data/2.5/forecast?id=2655804&appid=f469930a2094b212b1b978211a0dffd1&units=imperial";

const dates = new Array();
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const afterTomorrow = new Date(today);
afterTomorrow.setDate(afterTomorrow.getDate() + 2);
dates.push(today, tomorrow, afterTomorrow);
console.log(dates);

fetch(weatherForecastURL)
    .then((response) => response.json())
    .then((weatherForecastInfo) => {
    //     console.log(weatherForecastInfo);
    let i = 0;
    let list = [0, 8, 16];
    for (let x in list) {
        displayWeather(weatherForecastInfo, x, i);
        i++;
    }
});


// Function displaying each weather forecast
function displayWeather(weather, index, i) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let dateTitle = document.createElement('h3');
    let picture = document.createElement('picture');
    let icon = document.createElement('img');
    let temperature = document.createElement('p');
    let description = document.createElement('p');
    
  
    // Change the textContent property of the h3 element to the date of the forecast starting from today
    dateTitle.textContent = `${dates[i].toLocaleString('en-US', {
        weekday: 'short', 
        day: 'numeric',
        year: 'numeric',
        month: 'long', 
    })}`;

    // display the weather icon
    const iconCode = weather.list[index].weather[0].icon;
    const icon_path = "//openweathermap.org/img/w/"+ iconCode +".png";
    icon.setAttribute("src", icon_path);
    icon.setAttribute('alt', "weather icon");
    icon.setAttribute('loading', 'lazy');
    picture.appendChild(icon);
  
    // Display the temperature and description
    temperature.textContent = `${weather.list[index].main.temp}° F`;
    description.textContent = weather.list[index].weather[0].description;
  
    // Add/append the section(card) with the h2 element and birth
    card.appendChild(dateTitle);
    card.appendChild(icon);
    card.appendChild(temperature);
    card.appendChild(description);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.forecast').appendChild(card);
}
