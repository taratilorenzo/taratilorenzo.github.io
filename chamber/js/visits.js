// initialize display
const visitDisplay = document.querySelector(".visits");

// get the stored value from the local storage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// if it is the first visit then display that it is
if (numVisits !== 0) {
    visitDisplay.textContent = numVisits;
} else {
    visitDisplay.textContent = "This is your first visit";
}

// incrementing numVisits
numVisits++;

// store in the local storage the number of visits
localStorage.setItem("visits-ls", numVisits);