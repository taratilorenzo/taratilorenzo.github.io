//using querySelector
const todaysDate = document.getElementById("currentdate");
const option1 = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
todaysDate.textContent = new Date().toLocaleDateString('en-UK', option1)

const yearToDate = document.querySelector("#yeartodate");
const option2 = {year: 'numeric'};
yearToDate.textContent = new Date().toLocaleDateString('en-UK', option2)

const lastUpdate = document.querySelector("#lastmodifieddate");
lastUpdate.textContent = document.lastModified

function toggleMenu() {
    document.querySelector("#primary-nav").classList.toggle("open");
    document.querySelector("#hamburger-btn").classList.toggle("open");
}

const x = document.querySelector("#hamburger-btn")
x.onclick = toggleMenu;