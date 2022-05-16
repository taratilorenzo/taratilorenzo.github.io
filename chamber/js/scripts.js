//using querySelector
const yearToDate = document.querySelector('#yeartodate');
const option1 = {year: 'numeric'};
yearToDate.textContent = new Date().toLocaleDateString('en-UK', option1)

const todaysDate = document.getElementById('todaysdate');
const option2 = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
todaysDate.textContent = new Date().toLocaleDateString('en-UK', option2)

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;