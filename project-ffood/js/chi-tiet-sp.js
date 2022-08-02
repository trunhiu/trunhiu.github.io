$(document).ready(function () {
    $('.detail-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.detail-slider-item',
    });
    $('.detail-slider-item').slick({
        slidesToShow: 3,
        asNavFor: '.detail-item',
        arrows: false,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
    });

});

