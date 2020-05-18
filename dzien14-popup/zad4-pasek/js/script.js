// KOD SAMURAJA

// function changeText() {
//     // console.log('działa');

//     const wielkoscScrolla = $(document).scrollTop();
//     // console.log(wielkoscScrolla);
//     const wysokoscSekcji1 = $('.sekcja1').height();
//     const wysokoscSekcji2 = $('.sekcja2').height();
//     const wysokoscSekcji3 = $('.sekcja3').height();
//     const wysokoscSekcji4 = $('.sekcja4').height();
//     const odlegloscOdpoczatkuSekcji1 = $('.sekcja1').offset().top;
//     const odlegloscOdpoczatkuSekcji2 = $('.sekcja2').offset().top;
//     const odlegloscOdpoczatkuSekcji3 = $('.sekcja3').offset().top;
//     const odlegloscOdpoczatkuSekcji4 = $('.sekcja4').offset().top;


//     if (wielkoscScrolla < wysokoscSekcji1) {
//         $('div.info').text('sekcja 1');
//     } else if (wielkoscScrolla < wysokoscSekcji2 + odlegloscOdpoczatkuSekcji2) {
//         $('div.info').text('sekcja 2');
//     } else if (wielkoscScrolla < wysokoscSekcji3 + odlegloscOdpoczatkuSekcji3) {
//         $('div.info').text('sekcja 3');
//     } else {
//         $('div.info').text('sekcja 4');
//     }
// }

// $(document).on('scroll', changeText)

// MÓJ KOD


// function changeText() {


//     const pozycjaScrolla = $(window).scrollTop();
//     const pozycjaStartowaSekcji1 = $('.sekcja1').offset().top;
//     const pozycjaStartowaSekcji2 = $('.sekcja2').offset().top;
//     const pozycjaStartowaSekcji3 = $('.sekcja3').offset().top;
//     const pozycjaStartowaSekcji4 = $('.sekcja4').offset().top;

//     const wysokoscSekcji1 = $('.sekcja1').height();
//     const wysokoscSekcji2 = $('.sekcja2').height();
//     const wysokoscSekcji3 = $('.sekcja3').height();
//     const wysokoscSekcji4 = $('.sekcja4').height();


//     if (pozycjaScrolla < pozycjaStartowaSekcji2) {
//         $('div.info').text('Sekcja 1');
//     } else if (pozycjaScrolla < pozycjaStartowaSekcji2 + wysokoscSekcji2) {
//         $('div.info').text('Sekcja 2');
//     } else if (pozycjaScrolla < pozycjaStartowaSekcji3 + wysokoscSekcji3) {
//         $('div.info').text('Sekcja 3');
//     } else {
//         $('div.info').text('Sekcja 4');
//     }

// }

// $(document).on('scroll', changeText);

// TO SAMO ALE W CZYSTYM JAVASCRIPT

const txt = document.querySelector('div.info');

function changeText() {

    const pozycjaScrolla = window.scrollY;
    const wysokoscSekcji1 = document.querySelector('.sekcja1').clientHeight;
    const wysokoscSekcji2 = document.querySelector('.sekcja2').clientHeight;
    const wysokoscSekcji3 = document.querySelector('.sekcja3').clientHeight;
    const wysokoscSekcji4 = document.querySelector('.sekcja4').clientHeight;

    const pozycjaStartowaSekcji1 = document.querySelector('.sekcja1').offsetTop;
    const pozycjaStartowaSekcji2 = document.querySelector('.sekcja2').offsetTop;
    const pozycjaStartowaSekcji3 = document.querySelector('.sekcja3').offsetTop;
    const pozycjaStartowaSekcji4 = document.querySelector('.sekcja4').offsetTop;

    if (pozycjaScrolla < wysokoscSekcji1) {
        txt.textContent = "sekcja 1";

    } else if (pozycjaScrolla < pozycjaStartowaSekcji2 + wysokoscSekcji2) {
        txt.textContent = "sekcja 2";

    } else if (pozycjaScrolla < pozycjaStartowaSekcji3 + wysokoscSekcji3) {
        txt.textContent = "sekcja 3";
    } else {
        txt.textContent = "sekcja 4";
    }

}

window.addEventListener('scroll', changeText);