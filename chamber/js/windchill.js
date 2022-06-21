// conversion from celsius to Farenheit
// function expression
const farenheit = function(celsius) {
    return (celsius * (9 / 5)) + 32;
};

// conversion from farenheit to celsius
// arrow function
const celsius = (farenheit) => {
   return (farenheit - 32) * 5 / 9;
};

// conversion from km/h to mph
const mph = (kmh) => {
    return kmh / 1.609344;
}

// conversion from mph to km/h
const kmh = (mph) => {
    return mph * 1.609344;
}

const weatherURL = "//api.openweathermap.org/data/2.5/weather?id=2193732&appid=f469930a2094b212b1b978211a0dffd1&units=imperial"

fetch(weatherURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo);
        document.querySelector(".place").innerHTML = weatherInfo.name;
        document.querySelector(".temp-celsius").innerHTML = weatherInfo.main.temp;
        document.querySelector(".wind-speed").innerHTML = weatherInfo.wind.speed;

        const iconCode = weatherInfo.weather[0].icon;
        const icon_path = "//openweathermap.org/img/w/"+ iconCode +".png";

        document.querySelector(".weather-img").src = icon_path;
    });






// console.log(document.querySelector(".temp-celsius").textContent);
let temp = farenheit(parseFloat(document.querySelector(".temp-celsius").textContent));
let speed = mph(parseFloat(document.querySelector(".wind-speed").textContent));
// console.log(temp);
// console.log(speed);
let result = ((35.74 + (0.6215 * temp)) - ((35.75) * (speed ** 0.16)) + (0.4275 * temp * (speed ** 0.16)));
result = Math.round(celsius(result));
// console.log(result);

if (temp <= 50 && speed > 3) {
    document.querySelector(".windchill").textContent = result;
}
else {
    document.querySelector(".windchill").innerHTML = "N/A"
}