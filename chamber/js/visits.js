// initialize display
const visitDisplay = document.querySelector(".visits");
const lastDateDisplay = document.querySelector(".last-date-visit")

// get the stored value from the local storage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// if it is the first visit then display that it is
if (numVisits !== 0) {
    visitDisplay.textContent = numVisits;
} else {
    visitDisplay.textContent = `This is your first visit`;
}

// incrementing numVisits
numVisits++;

// store in the local storage the number of visits
localStorage.setItem("visits-ls", numVisits);

// Using localStorage to display how many days it has been since the user's last visit to your site. 

// get the last visit date value stored in localStorage

let lastVisitDate = Date.now(window.localStorage.getItem("last-date-visit"));
// console.log(lastVisitDate);

// get todays date - leave the variable todayy with double yy's its not an error,changing it it will cause errors
const todayy = new Date();

//Using JS calculate how many milliseconds are in a day. 
const msInDay = 1000 * 60 * 60 * 24;


// Creating a variable for today and another variable for the last visit and then subtract and divide by the number of milliseconds. 
// Then use Math.round() to make it a whole number.
let diff = todayy - lastVisitDate;
let dayDifference = Math.round((diff)/msInDay);


//Displaying a message about how many days it's been or if this is the first visit.
document.querySelector(".last-date-visit").textContent = dayDifference;


// update the lastVisitDate
localStorage.setItem("last-date-visit",todayy);
