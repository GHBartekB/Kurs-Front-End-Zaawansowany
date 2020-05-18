const btn1 = document.querySelector(".bigger");
const btn2 = document.querySelector(".smaller");
const text = document.querySelector("p");

// btn1.addEventListener("click", function () {

//     console.log("kliknięty");
// })

// btn2.addEventListener("click", function () {


// })


let textSize = 16;

function textIncrease() {
    textSize++;
    text.style.fontSize = textSize + "px";
}

function textDecrease() {
    textSize--;
    text.style.fontSize = textSize + "px";
}


btn1.addEventListener("click", textIncrease);
btn2.addEventListener("click", textDecrease);