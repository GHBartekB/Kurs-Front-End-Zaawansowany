let counter = 0;


const spanCounter = document.querySelector("span");
// const clickElement = document.querySelector("body");
// const clickElement = document.body;
// document.body.addEventListener("click", function () {

//     counter = counter + 1;
//     // console.log("counter");
//     spanCounter.textContent = counter;
// })

const btn1 = document.querySelector("button");
const btn2 = document.querySelector("button:nth-of-type(2)");

btn1.addEventListener("click",
    function () {
        // console.log("pierwszy kliknięty");
        counter = ++counter;
        // console.log("counter");
        spanCounter.textContent = counter;


    })


btn2.addEventListener("click",
    function () {
        // console.log("drugi kliknięty");
        counter = --counter;
        // console.log("counter");
        spanCounter.textContent = counter;

    })