// $('.me').on('click', function () {

//     $('body, html').animate({
//         scrollTop: $('.s1').offset().top
//     }, 1000)
// })

$('nav a').on('click', function () {
    const clickMenu = "#" + $(this).attr('class');


    $('body, html').animate({
        scrollTop: $(clickMenu).offset().top

    })



})