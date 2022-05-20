// Declaration of my variables
const myInput = document.querySelector("#favchap");
const myBtn = document.querySelector(".input button");
const myList = document.querySelector(".list");

// Adding chaper on our list with a "X" button
myBtn.addEventListener("click", ()=>{
    if(myInput.value != ""){
        const myLi = document.createElement("li");
        myLi.innerHTML = myInput.value;
        const closeBtn = document.createElement("button");
        closeBtn.innerHTML = "\u274c";
        myLi.appendChild(closeBtn);
        myList.appendChild(myLi);
        closeBtn.addEventListener("click", ()=>{
            myList.removeChild(myLi)
        });

    }
    
    //Empty the input 
    myInput.value = "";
    // focus back on the input
    myInput.focus();
});

