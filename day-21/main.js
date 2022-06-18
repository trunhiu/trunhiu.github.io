// Initialise Carousel ********************************
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
    Dots: false,
});

// Thumbnails
const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
    Sync: {
        target: mainCarousel,
        friction: 0,
    },
    Dots: false,
    Navigation: false,
    center: true,
    slidesPerPage: 1,
    infinite: false,
});

// Customize Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
    Carousel: {
        on: {
            change: (that) => {
                mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
                    friction: 0,
                });
            },
        },
    },
});


// Chức năng: Card

// Tìm kiếm sản phẩm theo tên 

// Hiển thị danh sách sản phẩm

// Hiển thị chi tiết sản phẩm

// Chức năng: chi tiết sản phẩm

// lựa chọn size

// Thêm số lượng sản phẩm

// Thêm vào giỏ hàng

// Xem chi tiết hình ảnh 

// Đối tượng: Sản phẩm

// Thuộc tính:

// Id (id - number)

// Tên sản phẩm (name - string)

// Hình ảnh (images - array string)

// Giá (price - number)
 
// Rating (rating - number)

// Size sản phẩm (sizes - array number)

// Mô tả (description - string)