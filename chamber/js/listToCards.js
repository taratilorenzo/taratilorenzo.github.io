const list = document.querySelector(".list-layout");
const grid = document.querySelector(".grid-layout");
const card = document.querySelector(".cards");

list.addEventListener("click", () => {
    card.classList.add("list");
    card.classList.remove("cards");

});

grid.addEventListener("click", () => {
    card.classList.add("cards");
    card.classList.remove("list");
});