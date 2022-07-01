$(".menu-icon").click(function () {
    $(".menu-item ul").css("left", "0");
    $(".overlay").css("display", "block");
    $("body").css("overflow-y", "hidden");
})

$(".overlay").click(function () {
    $(".menu-item ul").css("left", "-250px");
    $(".overlay").css("display", "none");
    $("body").css("overflow-y", "scroll");
});

$(window).resize(function () {
    if ($(window).innerWidth() > 768) {
        $(".menu-item ul").css("left", "-250px");
        $(".overlay").css("display", "none");
    }
})

$(".menu-icon1").click(function () {
    $(".menu-item ul").css("left", "-250px");
    $(".overlay").css("display", "none");
})