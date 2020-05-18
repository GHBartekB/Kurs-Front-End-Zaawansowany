const btnJS = document.querySelector(".js");



function createDiv() {

    const divItem = document.createElement("div");
    divItem.className = "box";
    document.body.appendChild(divItem);


}

btnJS.addEventListener("click", createDiv);



// btnJS.addEventListener("click", function () {


//     const divItem = document.createElement("div");
//     divItem.className = "box";
//     document.body.appendChild(divItem);

// })




const btnJQ = document.querySelector(".jq");
// const divItem = document.createElement("div");
// divItem.className = "box";
// divItem.classList.add("box");
// divItem.setAttribute("class", "box");
// divItem.innerText = "ble bel bel";
// document.body.appendChild(divItem);