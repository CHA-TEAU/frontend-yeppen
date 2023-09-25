$("#readmore").on("click", function(){


    $(".new").css('font-size', '78px');

    $(".new").css('transition', "all 0.5s ease");

    $(".new").css('text-decoration', "underline");


});


$( "#logo" ).on("click", function(){


    $('#sub-logo').toggle("medium");

})

$(".new").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".more-products").offset().top
    }, 2000);
});