$(Window).on('scroll', function () {

    $('div.info').text('obecna pozycja skrolla to: ' + $(window).scrollTop().toFixed() + 'px');

    if ($(window).scrollTop() > 500) {

        $('div.info').addClass('active');


    } else {

        $('div.info').removeClass('active');
    }




})