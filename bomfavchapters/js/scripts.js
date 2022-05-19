// Declaration of my variables

document.querySelector("#addchap").addEventListener("click", function() {
    const userInput = document.querySelector("#favchap").value;
    if (userInput !== ""){
        //create the X button
        const newBtn = document.createElement("button");
        newBtn.innerHTML = "\u274C";

        const newLI = document.createElement("li");
        newLI.textContent = userInput;
        newLI.appendChild(newBtn);

    document.querySelector(".list").appendChild(newLI);

    document.querySelector("#favchap").value = "";
    } //End of the If statement
});


document.querySelector(".list").addEventListener("click", function(event) {
    this.removeChild(event.target);
});
