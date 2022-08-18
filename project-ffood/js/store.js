/**********************Truy cập vào các phần tử *****************************/
const productsListEl = document.querySelector(".products-list")
console.log(productsListEl);

/*******************Hiển thị danh sách sản phẩm********************/


const renderProduct = (arr) => {
    productsListEl.innerHTML = "";

    // Hiển thị sản phẩm nếu có 
    let html = "";
    arr.forEach((p) => {
        html += `<div class="col-6 col-md-4 col-lg-3">
        <div class="product-item">
            <div class="product-image">
              <a href="chi-tiet-sp.html?id=${p.id}"><img src="${p.images[0]}" alt="${p.name}"></a>
              <div class="product-icon">
                <div class="product-icon-addtocart"><i class="fa-solid fa-cart-shopping"></i></div>
                <div class="product-icon-quickview"><i class="fa-solid fa-magnifying-glass"></i></div>
              </div>
            </div>
            <div class="product-content">
              <a href="chi-tiet-sp.html?id=${p.id}">
                <h3>${p.name}</h3>
              </a>
              <p>${formatMoney(p.price)}</p>
            </div>
          </div>
    </div>`
    });
    productsListEl.innerHTML = html;
};

// 3. Format tiền VND
const formatMoney = (number) => {
    return number.toLocaleString("it-IT", { style: "currency", currency: "VND" });
  };
  
  renderProduct(products);


renderProduct(products);

// Lọc theo category
const checkBoxCategory = document.querySelectorAll('.checkbox-category');
let productFilterCategory = []
let checkedNumberCategory = 0;
Array.from(checkBoxCategory).forEach((ele) => {
    ele.addEventListener('change', (e) => {
        let inputValue = e.target.value
    if(e.target.checked == true){
      checkedNumberCategory ++
      let productFilterTrue = products.filter((p) =>{
        return p.category == inputValue
      })
      productFilterCategory = productFilterCategory.concat(productFilterTrue)
      renderProduct(productFilterCategory)
    } else{
      checkedNumberCategory --
      productFilterCategory = productFilterCategory.filter((p) =>{
        return p.category != inputValue
      })
      renderProduct(productFilterCategory)
    }

    if(checkedNumberCategory == 0){
      renderProduct(products)
    }
    })
})

// Lọc theo tag
const checkBoxTags = document.querySelectorAll('.checkbox-tags');
let productFilterTag = []
let checkedNumberTag = 0
Array.from(checkBoxTags).forEach((ele) =>{
  ele.addEventListener('change',(e) =>{
    let inputValue = e.target.value
    if(e.target.checked == true){
      checkedNumberTag ++
      let productFilterTrue = products.filter((p) =>{
        return p.tag == inputValue
      })
      productFilterTag = productFilterTag.concat(productFilterTrue)
      renderProduct(productFilterTag)
    } else{
      checkedNumberTag --
      productFilterTag = productFilterTag.filter((p) =>{
        return p.tag != inputValue
      })
      renderProduct(productFilterTag)
    }

    if(checkedNumberTag == 0){
      renderProduct(products)
    }
    })
})

// Lọc theo price
const checkBoxPrice = document.querySelectorAll('.checkbox-price');
let productFilterPrice = []
let checkedNumberPrice = 0

function filterPrice(price1, price2){
    let productFillterTrue;
    productFillterTrue = products.filter (p => p.price >= price1 && p.price <= price2);
    renderProduct(productFillterTrue)
  

  
}


// sắp xếp giá 
const selectSort = document.querySelector(".select-sort")
selectSort.addEventListener("change", (e) =>{
  if(e.target.value == 1){
    let productSortUp = products.sort((a,b) =>{
      return a.price - b.price
    }) 
    renderProduct(productSortUp)
  } else if(e.target.value == 2){
    let productSortDown = products.sort((a,b) =>{
      return b.price - a.price
    })
    renderProduct(productSortDown)
  } else if(e.target.value == 0){
    let productDefault = products.sort((a,b) =>{
        return a.id - b.id
    });
    renderProduct(productDefault)
  }
})


const productLists = document.querySelector(".product-lists");
// Lấy ra sản phẩm có trong giỏ hàng
let items = getDataFromLocalStorage();

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
  



$(document).ready(function () {
    $('.quickview').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.quickview-slider',
    });
    $('.quickview-slider').slick({
        slidesToShow: 3,
        asNavFor: '.quickview',
        arrows: false,
        dots: false,

        focusOnSelect: true,
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

/**************************fillter Sidebar************************/

$(".fillter-product-sidebar").click(function () {
  $(".fillter").css("left", "0");
  $(".fillter-overlay").css("display", "block");
})

$(".fillter-overlay").click(function () {
  $(".fillter").css("left", "-300px");
  $(".fillter-overlay").css("display", "none");
})

$(window).resize(() => {
  if ($(window).innerWidth() > 992) {
    $(".fillter").css("left", "-300px");
    $(".fillter-overlay").css("display", "none");
  }
});

