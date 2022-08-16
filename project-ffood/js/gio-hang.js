const productList = document.querySelector(".product-list");
const productLists = document.querySelector(".product-lists");


// Lấy ra sản phẩm có trong giỏ hàng
let items = getDataFromLocalStorage();

//  Hiển thị danh sách ra ngoài giao diện
const renderProduct = () => {
  // Kiểm tra giỏ hàng rỗng hay không
//   if (items.length == 0) {
//     productList.classList.add("d-none");
//   } else {
//     message.classList.add("d-none");
//   }

  // Nếu có sản phẩm thì hiển thị
  let html = "";

  items.forEach((p) => {
    html += `<tr>
    <th class="shopping-cart-title">
        <div class="shopping-cart-image">
            <img src="${p.image}" alt="${p.name}">                                   
        </div>
         <p>${p.name} (${p.size})</p>
    </th>
    <th>
        <div class="shopping-cart-amount">
            <div class="number">${p.count}</div>
            <div class="icon">
              <span onclick="(plusCount(${p.id}, '${p.size}'))"><i class="fa-solid fa-caret-up"></i></span>
              <span onclick="(minusCount(${p.id}, '${p.size}'))"><i class="fa-solid fa-caret-down"></i></span>
            </div>
          </div>
    </th>
    <th class="text-center">
        <div class="sub-total-money">${formatMoney(p.price)}</div>
    </th>
    <th class="text-center">
        <span><i class="fa-solid fa-trash-can" onclick="(deleteProduct(${p.id}, '${p.size}'))"></i></span>
    </th>
</tr>`;
  });

  productList.innerHTML = html;

  let html1 = "";
  items.forEach((p) => {
      html1 += `<div class="shopping-cart-mid-item">
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
  
    productLists.innerHTML = html1;
  
};



// Thay đổi số lượng
// Tăng số lượng
const plusCount = (id, size) => {
    // Lấy ra sản phẩm tương ứng
    let product = items.find((p) => p.id == id && p.size == size);
  
    // Tăng số lượng
    product.count++;
  
    // Lưu lại vào localStorage
    setDataFromLocalStorage(items);
  
    // Hiển thị lại giao diện
    renderProduct(items);

    totalProduct();
  };
  
  // Giảm số lượng
  const minusCount = (id, size) => {
    // Lấy ra sản phẩm tương ứng
    let product = items.find((p) => p.id == id && p.size == size);

  
    // Tăng số lượng
    product.count--;
  
    if (product.count < 1) {
      product.count = 1;
    }
  
    // Lưu lại vào localStorage
    setDataFromLocalStorage(items);
  
    // Hiển thị lại giao diện
    renderProduct(items);

    totalProduct();
  
  };

//  Xóa sản phẩm
const deleteProduct = (id, size) => {
    let isConfirm = confirm("Bạn có muốn xóa không?");
  
    if (isConfirm) {
      // Tìm kiếm sản phẩm trùng id và size
      items = items.filter((p) => p.id != id || p.size != size);
  
      // Lưu lại vào localStorage
      setDataFromLocalStorage(items);
  
      // Cập nhật lại số lượng
      updateTotalCart();
  
      // Hiển thị lại giao diện
      renderProduct(items);

      totalProduct();
    }
  };

  // Format tiền VND
const formatMoney = (number) => {
    return number.toLocaleString("it-IT", { style: "currency", currency: "VND" });
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
      renderProduct(items);

      totalProduct();
    }
  };

renderProduct(items);

//Tính tiền
const totalMoney = document.querySelector(".total-money");
const totalMoneys = document.querySelector(".total-moneys");

const totalProduct = () => {
    let total = 0;
    items.map(e => {
      total += e.count * e.price
    })
    console.log(total);
    totalMoney.innerText = formatMoney(total);
    totalMoneys.innerText = formatMoney(total);
    
  }
  totalProduct();
  



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
