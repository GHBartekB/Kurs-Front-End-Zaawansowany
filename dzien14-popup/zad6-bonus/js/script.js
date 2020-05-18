const $doc = $(document);
const $header = $('header');
const $main = $('main');


$doc.on('scroll', function () {


    const scrollPosition = $doc.scrollTop();
    const sectionOffset = $main.offset().top;
    const headerHeight = $header.outerHeight();

    if (scrollPosition < sectionOffset) {


        $header.css({
            'opacity': 1 - scrollPosition / headerHeight,
            'filter': 'grayscale(' + 2 * scrollPosition / headerHeight + ')',



        })
    }




})