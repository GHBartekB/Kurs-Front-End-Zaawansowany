const divArrow = document.querySelector('.arrow');
const column = document.querySelector('nav');

divArrow.addEventListener("click", function () {

    divArrow.classList.toggle("on");
    column.classList.toggle("on");
})