$(".menu-icon").click(function () {
    $(".menu-item ul").css("left", "0");
    $(".overlay").css("display", "block");
})

$(".overlay").click(function () {
    $(".menu-item ul").css("left", "-250px");
    $(".overlay").css("display", "none");
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