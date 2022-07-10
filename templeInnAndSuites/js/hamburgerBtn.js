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