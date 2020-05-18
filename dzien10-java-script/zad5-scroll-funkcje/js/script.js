// window.addEventListener('scroll', function () {

//     console.log("skrolujesz");
// })

// konkatenacja

document.addEventListener('scroll', function () {

    console.log("skrolujesz o " + window.scrollY + "px");
})

const spanResult = document.querySelector("span");
window.addEventListener('scroll', function () {

    spanResult.textContent = window.scrollY;
})