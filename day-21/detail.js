// detail.html?id=2  => querystring
// detail.html?id=2&nam=product1&price=1000000
// Lấy ra id trên url
let params = new URLSearchParams(window.location.search);
let id = params.get('id');

// Truy cập vào các thành phần
const breadcrumbItemActive = document.querySelector('.breadcrumb-item.active')
const nameEl = document.querySelector('.product-name')
const priceEl  = document.querySelector('.product-price')
const sizeEl = document.querySelector('.product-size')
const descriptionEl = document.querySelector('.product-description')
const imagesEl = document.getElementById('mainCarousel')



// biến để lưu thông tin sản phẩm theo id

let product;

// Kiểm tra xem id có tồn tại trên url hay không
// Nếu không có thì -> 404

if (id) {
    product = products.find(p => p.id == id);

    if(!product) {
        window.location.href = "./404.html";
    }

    document.title = product.name;
    breadcrumbItemActive.innerText = product.name;
} else {
    window.location.href = "./404.html";
}

// Hiển thị thông tin sản phẩm 
const renderProduct = obj => {
    nameEl.innerText = obj.name;
    priceEl.innerText = obj.price;
    descriptionEl.innerText = obj.description;
    // Hiển thị size (duyệt mảng -> cộng chuỗi -> hiển thị)
    let html1 = '';
    obj.sizes.forEach(p => {
        html1 += `
        <span class="border py-2 px-3 border-dark me-2">${p}</span> 
        `
    })
    sizeEl.innerHTML = html1;

    

    // Hiển thị hình ảnh (duyệt mảng -> cộng chuỗi -> hiển thị)
    let html2 = '';
    obj.images.forEach(i => {
        html2 += 
        `
        <div class="carousel__slide" data-src="${i}"gallery">
                                <img src="${i}" />
                            </div>
        `
    })
    imagesEl.innerHTML = html2;
}

renderProduct(product)



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

