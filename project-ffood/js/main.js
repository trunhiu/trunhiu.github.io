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
    $(".menu-sidebar-mid").css("display", "block");  
    $(".login-sidebar-mid").css("display", "none");
    $(".register-sidebar-mid").css("display", "none");
    $(".forgotpw-sidebar-mid").css("display", "none");
    $(".menu-sidebar-top-list").css("color", "#fff");
    $(".menu-sidebar-top-list").css("background-color", "#111111");
    $(".menu-sidebar-top-login").css("color", "#111111");
    $(".menu-sidebar-top-login").css("background-color", "#fff");
})

$(".btn-menu-cancel").click(function () {
    $(".menu-sidebar").css("left", "-350");
    $(".overlay").css("display", "none");
    $(".menu-sidebar-mid").css("display", "block");
    $(".login-sidebar-mid").css("display", "none");
    $(".register-sidebar-mid").css("display", "none");
    $(".forgotpw-sidebar-mid").css("display", "none");
    $(".menu-sidebar-top-list").css("color", "#fff");
    $(".menu-sidebar-top-list").css("background-color", "#111111");
    $(".menu-sidebar-top-login").css("color", "#111111");
    $(".menu-sidebar-top-login").css("background-color", "#fff");
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
    $(".login-page").css("display", "block");
})

$(".btn-login-cancel").click(function () {
    $(".login-overlay").css("opacity", "0");
    $(".login-overlay").css("pointer-events", "none");
    $(".login-content").css("opacity", "0");
    $(".login-content").css("pointer-events", "none");
    $(".login-content").css("top", "0px");
    $(".login-page").css("display", "block");
})


/****************register*****************/

$(".goto-register").click(function () {
    $(".login-page").css("display", "none");
    $(".register-page").css("display", "block");
})

$(".btn-goback").click(function () {
    $(".login-page").css("display", "block");
    $(".register-page").css("display", "none");
})

/****************forgot-pw*****************/

$(".forgot-pw").click(function () {
    $(".login-page").css("display", "none");
    $(".forgot-password").css("display", "block");
})

$(".btn-forgotpw-goback").click(function () {
    $(".login-page").css("display", "block");
    $(".forgot-password").css("display", "none");
})




/****************products*****************/

$(".btn-products-hots").click(function () {
    $(".products-new").css("display", "none");
    $(".products-hots").css("display", "block");
    $(".products-luv").css("display", "none");
    $(".btn-products-hots").css("color", "#ff871d");
    $(".btn-products-hots").css("background-color", "#fff");
    $(".btn-products-new").css("color", "#fff");
    $(".btn-products-new").css("background-color", "#ff871d");
    $(".btn-products-luv").css("color", "#fff");
    $(".btn-products-luv").css("background-color", "#ff871d");
})

$(".btn-products-new").click(function () {
    $(".products-new").css("display", "block");
    $(".products-hots").css("display", "none");
    $(".products-luv").css("display", "none");
    $(".btn-products-new").css("color", "#ff871d");
    $(".btn-products-new").css("background-color", "#fff");
    $(".btn-products-hots").css("color", "#fff");
    $(".btn-products-hots").css("background-color", "#ff871d");
    $(".btn-products-luv").css("color", "#fff");
    $(".btn-products-luv").css("background-color", "#ff871d");

})

$(".btn-products-luv").click(function () {
    $(".products-new").css("display", "none");
    $(".products-hots").css("display", "none");
    $(".products-luv").css("display", "block");
    $(".btn-products-luv").css("color", "#ff871d");
    $(".btn-products-luv").css("background-color", "#fff");
    $(".btn-products-hots").css("color", "#fff");
    $(".btn-products-hots").css("background-color", "#ff871d");
    $(".btn-products-new").css("color", "#fff");
    $(".btn-products-new").css("background-color", "#ff871d");
})


/**********************login sidebar ****************/

$(".menu-sidebar-top-login").click(function () {
    $(".login-sidebar-mid").css("display", "block");
    $(".menu-sidebar-mid").css("display", "none");
    $(".menu-sidebar-top-list").css("color", "#111111");
    $(".menu-sidebar-top-list").css("background-color", "#fff");
    $(".menu-sidebar-top-login").css("color", "#fff");
    $(".menu-sidebar-top-login").css("background-color", "#111111");
})

$(".menu-sidebar-top-list").click(function () {
    $(".login-sidebar-mid").css("display", "none");
    $(".register-sidebar-mid").css("display", "none");
    $(".forgotpw-sidebar-mid").css("display", "none");
    $(".menu-sidebar-mid").css("display", "block");
    $(".menu-sidebar-top-login").css("color", "#111111");
    $(".menu-sidebar-top-login").css("background-color", "#fff");
    $(".menu-sidebar-top-list").css("color", "#fff");
    $(".menu-sidebar-top-list").css("background-color", "#111111");
})


/****************register sidebar*****************/

$(".login-sidebar-mid-register").click(function () {
    $(".login-sidebar-mid").css("display", "none");
    $(".register-sidebar-mid").css("display", "block");
})

$(".register-sidebar-mid-register").click(function () {
    $(".login-sidebar-mid").css("display", "block");
    $(".register-sidebar-mid").css("display", "none");
})

/****************forgot-pw sidebar*****************/

$(".login-sidebar-mid-forgot").click(function () {
    $(".login-sidebar-mid").css("display", "none");
    $(".forgotpw-sidebar-mid").css("display", "block");
})

$(".forgotpw-sidebar-mid-register").click(function () {
    $(".login-sidebar-mid").css("display", "block");
    $(".forgotpw-sidebar-mid").css("display", "none");
})

