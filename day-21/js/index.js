// Truy cập vào các thành phần
const productsListEl = document.querySelector(".product-list");
const seachFormInputEl = document.querySelector(".seach-form-input");
const btnSearch = document.querySelector(".seach-form-button");

// 1. Tìm kiếm sản phẩm
// Cách 1: Tìm kiếm sản phẩm bằng phím "Enter"
seachFormInputEl.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    let value = seachFormInputEl.value;

    searchProduct(value);
  }
});

// Cách 2: Tìm kiếm sản phẩm nút "btnSeach"
btnSearch.addEventListener("click", function () {
  searchProduct();
});

// Function tìm kiếm
const searchProduct = () => {
  let value = seachFormInputEl.value;

  if (value == "") {
    alert("Không có sản phẩm");
    return;
  }

  let productFilter = products.filter((p) =>
    p.name.toLowerCase().includes(value.toLowerCase())
  );

  renderProduct(productFilter);
};

// 2. Hiển thị danh sách sản phẩm
const renderProduct = (arr) => {
  productsListEl.innerHTML = "";

  // Kiểm tra xem có sản phẩm không
  if (arr.length == 0) {
    alert("Không có sản phẩm");
    return;
  }

  // Hiển thị nếu có sản phẩm
  let html = "";
  arr.forEach((p) => {
    html += `<div class="col-md-3">
        <a href="./detail.html?id=${p.id}">
          <div class="product-item shadow-sm rounded mb-4">
            <div class="product-item-image">
              <img
                src="${p.images[0]}"
                alt="${p.name}"
              />
            </div>
            <div class="product-item-info p-3">
              <h2 class="fs-5 mb-4 text-dark">${p.name}</h2>
              <div
                class="d-flex justify-content-between align-items-center fw-light text-black-50"
              >
                <p class="type fs-5 text-danger fw-normal">
                ${formatMoney(p.price)}</p>
                <p class="rating">
                  ${p.rating}
                  <span class="text-warning"
                    ><i class="fa-solid fa-star"></i
                  ></span>
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>`;
  });

  productsListEl.innerHTML = html;
};

// 3. Format tiền VND
const formatMoney = (number) => {
  return number.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};

renderProduct(products);
