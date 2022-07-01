// const menuIcon = document.querySelector('.menu-icon');
// const menuEle = document.querySelector('.menu ul');

// menuIcon.addEventListener('click', () => {
//     menuEle.classList.toggle('show');
// })

// window.addEventListener('resize', () => {
//     if (window.innerWidth > 768) {
//         menuEle.classList.remove('show');
//     }
// })

// jQuery

let isShow = false;

$(".menu-icon").click(function () {
    isShow = !isShow;
    $(".menu ul").slideToggle(function () {
        if (isShow == true) {
            $(".menu ul").css("display", "flex");
        } else {
            $(".menu ul").css("display", "none");
        }
    });
})

$(window).resize(function () {
    if ($(window).innerWidth() > 768) {
        isShow = false;
        $(".menu ul").css("display", "flex");
    } else {
        $(".menu ul").css("display", "none");
    }
})