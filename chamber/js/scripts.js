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

// title of the page changes based on page you are on
const navSelected = document.querySelectorAll("#primary-nav a");
const pageTitle = document.querySelector(".page-title");

for(let i=0; i<navSelected.length; i++){
    navSelected[i].addEventListener("click", ()=>{
        pageTitle.innerHTML = navSelected[i].textContent.toUpperCase();
    });
}

// banner display on mondays and tuesdays only
const today = new Date();
const myBanner = document.querySelector(".banner-container");
if(today.getDay() == 1 || today.getDay() == 2){
    myBanner.style.display = "block";
} 