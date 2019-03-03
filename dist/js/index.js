



$(document).ready(function () {
    $(".slider-section").slick({
        dots: true,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>'
    });
    $("#slick-slide-control00").addClass("slider_hover");

    $('#slick-slide-control01').click(function () {
        $('#slick-slide-control00').not(this).removeClass("slider_hover");
        $('#slick-slide-control02').not(this).removeClass("slider_hover");
        $('#slick-slide-control01').addClass("slider_hover");
    });

    $('#slick-slide-control02').click(function () {
        $('#slick-slide-control00').not(this).removeClass("slider_hover");
        $('#slick-slide-control01').not(this).removeClass("slider_hover");
        $('#slick-slide-control02').addClass("slider_hover");
    });
    $('#slick-slide-control00').click(function () {
        $('#slick-slide-control01').not(this).removeClass("slider_hover");
        $('#slick-slide-control03').not(this).removeClass("slider_hover");
        $('#slick-slide-control00').addClass("slider_hover");
    });

});

$('.title-section__button').click(function () {
    $('.title-section__button').not(this).removeClass('title-section__button_hover');
    $(this).toggleClass('title-section__button_hover');

});

$('.title-section__button-money').click(function () {
    $('.title-section__button-money').not(this).removeClass('title-section__button_hover');
    $(this).toggleClass('title-section__button_hover');
});

$('.link-section__link').click(function () {
    $('.link-section__link').not(this).removeClass('link-section__link_hover');
    $(this).toggleClass('link-section__link_hover ');
});

