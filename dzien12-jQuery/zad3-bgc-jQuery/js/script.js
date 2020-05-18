$(".interface").on("click", function () {
    console.log("działa!");
    // console.log(this);
    // console.log($(this));
    console.log($(this).attr("class"));
    // console.log(this.className);


    if ($(this).hasClass("orange")) {
        console.log("prawda w pomarańczowym");
        $('body').attr("class", "orange")
        // $('body').toggleClass("orange");
        // $('body').css("background-color", "orange");
        // $('body').css({
        //     "background-color": "orange"
        // })
    }


    if ($(this).hasClass("green")) {
        console.log("prawda w zielonym");
        $('body').attr("class", "green")
        // $('body').css({
        //     "background-color": "green"
        // })
    }

    if ($(this).hasClass("increase")) {
        console.log("prawda w plusie");
        $('.text').animate({

            "font-size": "+=2"

        }, 300)

    }

    if ($(this).hasClass("move")) {
        console.log("prawda w strzałce");
        $('.text').animate({

            "left": "+=5px",
            "letter-spacing": "+=2px"

        }, 300)

    }



})