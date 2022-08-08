$(document).ready(function () {
    $('#banner').slick({
        speed: 500,
        fade: true,
        cssEase: 'linear',
        isFinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('#feedback').slick({
        isFinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
    });
});

$(document).ready(function () {
    $('.logo-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        isFinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.shortcut-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        isFinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true
                }
            }
        ]
    });
});
$(document).ready(function () {
    $('.hotproduct-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true
                }
            }
        ]
    });
});

/************menu******************/
$(".logo-menu").click(function () {
    $(".menu-sidebar").css("left", "0");
    $(".overlay").css("display", "block");
})
$(".overlay").click(function () {
    $(".menu-sidebar").css("left", "-350");
    $(".overlay").css("display", "none");
})

$(".btn-menu-cancel").click(function () {
    $(".menu-sidebar").css("left", "-350");
    $(".overlay").css("display", "none");
})



/************************ShoppingCart*************************/
$(".header-shoppingcart").click(function () {
    $(".header-shopping-cart").css("right", "0");
    $(".header-overlay").css("display", "block");
})

$(".header-overlay").click(function () {
    $(".header-shopping-cart").css("right", "-420");
    $(".header-overlay").css("display", "none");
})

$(".btn-cancel").click(function () {
    $(".header-shopping-cart").css("right", "-420");
    $(".header-overlay").css("display", "none");
})


/****************login*****************/
$(".header-login").click(function () {
    $(".login-overlay").css("opacity", "1");
    $(".login-overlay").css("pointer-events", "all");
    $(".login-content").css("opacity", "1");
    $(".login-content").css("pointer-events", "all");
    $(".login-content").css("top", "50px");
})

$(".login-overlay").click(function () {
    $(".login-overlay").css("opacity", "0");
    $(".login-overlay").css("pointer-events", "none");
    $(".login-content").css("opacity", "0");
    $(".login-content").css("pointer-events", "none");
    $(".login-content").css("top", "0px");
})

$(".btn-login-cancel").click(function () {
    $(".login-overlay").css("opacity", "0");
    $(".login-overlay").css("pointer-events", "none");
    $(".login-content").css("opacity", "0");
    $(".login-content").css("pointer-events", "none");
    $(".login-content").css("top", "0px");
})
