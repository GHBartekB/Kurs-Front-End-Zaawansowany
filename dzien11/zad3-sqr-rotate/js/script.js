let rotateStart = 0;
const rotateMove = 50;


const btn = document.querySelector("button");
const div = document.querySelector('.square');

btn.addEventListener('click', function () {

    // console.log("klik");
    rotateStart = rotateStart + rotateMove;

    div.style.transform = 'rotate(' + rotateStart + 'deg)';
    div.style.transition = ".5s";


})