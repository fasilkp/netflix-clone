$(document).ready(function () {
   	var value = 0, x;
    $('body').scroll(function() {
        if ($('body').scrollTop()) {
            $(".landing-page-header").css({
                "display": "none"
            });
        } else {
            $(".landing-page-header").css({
                "display": "block"
            });
        }
    });

     $('body').scroll(function() {
        if ($('body').scrollTop()) {
            $(".trans-bg").css({
                "background-color": "rgba(0,0,0,.97)"
            });
        } else {
            $(".trans-bg").css({
                "background-color": "transparent"
            });
        }
    });

    var header_height = $('#header').outerHeight();
    console.log("test", header_height);
    $('.header-height').height(header_height);
    $('.landing-header-height').height(header_height);

    var footer_height = $('#footer').outerHeight();
    console.log(footer_height);
    $('.bottom-height').height(footer_height);
});