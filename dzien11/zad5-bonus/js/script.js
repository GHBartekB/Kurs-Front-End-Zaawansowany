// const div1 = document.querySelector(".orange");
// const div2 = document.querySelector(".green");
// const div3 = document.querySelector(".blue");
// const div4 = document.querySelector(".yellow");
// const div5 = document.querySelector(".red");




const divs = document.querySelectorAll('div');

divs.forEach(function (div) {
    div.addEventListener('click', changeColor);
})



function changeColor() {
    document.body.className = this.className;
}




// function change1() {

//     document.body.style.backgroundColor = "orange";

// }

// function change2() {

//     document.body.style.backgroundColor = "green";

// }

// function change3() {

//     document.body.style.backgroundColor = "blue";

// }

// function change4() {

//     document.body.style.backgroundColor = "yellow";

// }

// function change5() {

//     document.body.style.backgroundColor = "red";

// }

// div1.addEventListener("click", changeColor);
// div2.addEventListener("click", changeColor);
// div3.addEventListener("click", changeColor);
// div4.addEventListener("click", changeColor);
// div5.addEventListener("click", changeColor);