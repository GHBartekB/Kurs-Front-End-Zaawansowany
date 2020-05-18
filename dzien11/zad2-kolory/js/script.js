var div1 = document.querySelector(".s1");
var div2 = document.querySelector(".s2");




// div1.addEventListener('click', function () {

//     console.log("dupa");
//     alert("działa");
// });

// Czemu nie działa na osobnej funkcji!?!??! 

function changeColor() {
    // div1.classList.toggle('red');
    // div2.classList.toggle('red');
    this.classList.toggle('red');
}

// div2.addEventListener("click", changeColor);

// div1.addEventListener('click', function () {

//     div1.classList.toggle('red');
//     div2.classList.toggle('red');

// })

div1.addEventListener('click', changeColor);

div2.addEventListener('click', changeColor);

// div2.addEventListener('click', function () {

//     div2.classList.toggle('red');
// })