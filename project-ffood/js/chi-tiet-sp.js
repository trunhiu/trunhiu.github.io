// Lấy ra id trên URL
let params = new URLSearchParams(window.location.search);
let id = params.get("id");
console.log(id);

// Truy cập các thành phần 

const breadCrumb = document.querySelector('.breadcrumbs');
const nameEl = document.querySelector('.detail-name');
const priceEl = document.querySelector('.detail-price');
const sizeEl = document.querySelector('.detail-size');
const descriptionEl = document.querySelector('.detail-description');
const detailItemEl = document.querySelector('.detail-item');
const detailSliderEl = document.querySelector('.detail-slider-item');
const btnAddToCart = document.querySelector('.btn-add');




// Format tiền VND
const formatMoney = (number) => {
    return number.toLocaleString("it-IT", { style: "currency", currency: "VND" });
  };

  // Biến để lưu thông tin sản phẩm theo id
let product;

// 1. Kiểm tra xem id có tồn tại trên URL hay không, nếu không có thì 404
if (id) {
    product = products.find((p) => p.id == id);
  
    if (!product) {
      window.location.href = "./404.html";
    }
  
    document.title = product.name;
    breadCrumb.innerText = product.name;
  } else {
    window.location.href = "./404.html";
  }


// 2. Hiển thị thông tin sản phẩm
const renderProduct = (obj) => {
    nameEl.innerText = obj.name;
    priceEl.innerHTML = `${formatMoney(obj.price)}`;
    descriptionEl.innerText = obj.description;
    //Hiển thị size
    let html = "";
    obj.sizes.forEach((p) => {
        html += `<button onclick="choseSize(this)">${p}</button>`
    })
    sizeEl.innerHTML = html;
    // Hiển thị hình ảnh
    let html2 = "";
    obj.images.forEach((p) => {
    html2 += `<div class="detail-image">
    <img src="${p}" alt="burgersieuto">
    </div>`;
    });
    detailItemEl.innerHTML = html2;
    let html3 = "";
    obj.images.forEach((p) => {
    html3 += `<div class="detail-slider-image">
    <img src="${p}" alt="burgersieuto">
    </div>`;
  });

  detailSliderEl.innerHTML = html3;
  };

// 3. Chọn size

const choseSize = (ele) => {

    const sizeEls = document.querySelectorAll(".detail-size button"); 
    Array.from(sizeEls).map((size) =>
      size.classList.remove("selected", "bg-dark", "border-dark")
    );
  
    ele.classList.add("selected", "bg-dark", "border-dark");
  };

// 4. Tăng giảm số lượng sản phẩm
const btnMinusCount = document.querySelector(".btn-minus-count");
const btnPlusCount = document.querySelector(".btn-plus-count");
const countEl = document.querySelector(".number");
let count = 1;

// Tăng số lượng
btnPlusCount.addEventListener("click", () => {
  count++;
  countEl.innerText = `${count}`;
});

// Giảm số lượng
btnMinusCount.addEventListener("click", () => {
  count--;
  if (count <= 0) {
    return count = 1;
  }

  countEl.innerText = `${count}`;
});

// Thêm vào giỏ hàng
let items = getDataFromLocalStorage();
btnAddToCart.addEventListener("click", () => {
    // Kiểm tra xem đã chọn size chưa
    const sizeSelectedEl = document.querySelector(".detail-size .selected");
  
    if (!sizeSelectedEl) {
      alert("Vui lòng chọn size");
      return;
    }
  
    // Cấu trúc item thêm vào giỏ hàng
    let item = {
      id: product.id,
      name: product.name,
      image: product.images[0],
      price: product.price,
      count: count,
      size: sizeSelectedEl.innerText,
    };
  
    addItemToCart(item)
    alert("Thêm vào giỏ hàng thành công")
    
    getDataFromLocalStorage()
    renderProduct1(item);

    // Cập nhật lại số lượng
    updateTotalCart();
  
});

renderProduct(product);


const productLists = document.querySelector(".product-lists");
// Lấy ra sản phẩm có trong giỏ hàng


//  Hiển thị danh sách ra ngoài giao diện
const renderProduct1 = () => {
 
  let html = "";
  items.forEach((p) => {
      html += `<div class="shopping-cart-mid-item">
      <div class="row">
        <div class="col-4">
          <div class="shopping-cart-image">
            <img src="${p.image}" alt="${p.name}">
          </div>
        </div>
        <div class="col-7">
          <p>${p.name} (${p.size})</p>
          <p>Số lượng: ${p.count}</p>
          <p>${formatMoney(p.price)}</p>
        </div>
        <div class="col-1">
          <span><i class="fa-solid fa-trash-can" onclick="(deleteProducts(${p.id}, '${p.size}'))"></i></span>
        </div>
      </div>
    </div>`;
    });
  
    productLists.innerHTML = html;
  
};


//  Xóa sản phẩm
const deleteProducts = (id, size) => {
    let isConfirm = confirm("Bạn có muốn xóa không?");
  
    if (isConfirm) {
      // Tìm kiếm sản phẩm trùng id và size
      items = items.filter((p) => p.id != id || p.size != size);
  
      // Lưu lại vào localStorage
      setDataFromLocalStorage(items);
  
      // Cập nhật lại số lượng
      updateTotalCart();
  
      // Hiển thị lại giao diện
      renderProduct1(items);

      totalProduct();
    }
  };

renderProduct1(items);

//Tính tiền
const totalMoneys = document.querySelector(".total-moneys");

const totalProduct = () => {
    let total = 0;
    items.map(e => {
      total += e.count * e.price
    })
    console.log(total);
    totalMoneys.innerText = formatMoney(total);
    
  }
  totalProduct();


// Back to top 

const backToTop = document.querySelector('.noselect');

$(window).scroll(function(){
    if($(window).scrollTop() >= 1000) {
        $('.scroll-to-top').css("display", "block");
    } else {
        $('.scroll-to-top').css("display", "none"); 
    }
});

backToTop.addEventListener('click', function(e) {
    $('html,body').animate({
        scrollTop: 0
    }, 'fast');
})

// alert 

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

/****************quickview*****************/
$(".product-icon-quickview").click(function () {
    $(".quickview-overlay").css("opacity", "1");
    $(".quickview-overlay").css("pointer-events", "all");
    $(".short-view-content").css("opacity", "1");
    $(".short-view-content").css("pointer-events", "all");
    $(".short-view-content").css("top", "20%");
})

$(".quickview-overlay").click(function () {
    $(".quickview-overlay").css("opacity", "0");
    $(".quickview-overlay").css("pointer-events", "none");
    $(".short-view-content").css("opacity", "0");
    $(".short-view-content").css("pointer-events", "none");
    $(".short-view-content").css("top", "0px");
})

$(document).ready(function () {
    $('.detail-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.detail-slider-item',
    });
    $('.detail-slider-item').slick({
        slidesToShow: 4,
        asNavFor: '.detail-item',
        arrows: false,
        dots: false,

        focusOnSelect: true,
    });

});

$(document).ready(function () {
    $('.detail-logo-slider').slick({
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
                breakpoint: 550,
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


