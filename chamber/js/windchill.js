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
// console.log(document.querySelector(".temp-celsius").textContent);
let temp = farenheit(parseFloat(document.querySelector(".temp-celsius").textContent));
let speed = mph(parseFloat(document.querySelector(".wind-speed").textContent));
// console.log(temp);
// console.log(speed);
let result = ((35.74 + (0.6215 * temp)) - ((35.75) * (speed ** 0.16)) + (0.4275 * temp * (speed ** 0.16)));
// console.log(result);

if (temp <= 50 && speed > 3) {
    document.querySelector(".windchill").textContent = result;
}
else {
    document.querySelector(".windchill").innerHTML = "N/A"
}
