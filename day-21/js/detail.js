// detail.html?id=2 => querystring
// detail.html?id=2$name-prodict2$price=100000
// Lấy ra id trên URL
let params = new URLSearchParams(window.location.search);
let id = params.get("id");

// Truy cập vào các thành phần
const breadcrumbItemActive = document.querySelector(".breadcrumb-item.active");
const nameEl = document.querySelector(".product-name");
const priceEl = document.querySelector(".product-price");
const sizeEl = document.querySelector(".product-size");
const descriptionEl = document.querySelector(".product-description");
const mainCarouselPicture = document.getElementById("mainCarousel");
const thumbCarouselPicture = document.getElementById("thumbCarousel");

const btnMinusCount = document.querySelector(".btn-minus-count");
const btnPlusCount = document.querySelector(".btn-plus-count");
const countEl = document.querySelector(".count");

const btnAddToCart = document.querySelector(".btn-add-to-cart");
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
  breadcrumbItemActive.innerText = product.name;
} else {
  window.location.href = "./404.html";
}

// 2. Hiển thị thông tin sản phẩm
const renderProduct = (obj) => {
  nameEl.innerText = obj.name;
  priceEl.innerText = `${formatMoney(obj.price)}`;
  descriptionEl.innerText = obj.description;

  // Hiển thị size
  let html1 = "";
  obj.sizes.forEach((p) => {
    html1 += `<span class="border py-2 px-3 border-dark me-2" 
    onclick="choseSize(this)">${p}</span> `;
  });

  sizeEl.innerHTML = html1;

  // Hiển thị hình ảnh
  let html2 = "";
  obj.images.forEach((p) => {
    html2 += `<div
    class="carousel__slide"
    data-src="${p}"
    data-fancybox="gallery">
    <img src="${p}" />
  </div>`;
  });

  mainCarouselPicture.innerHTML = html2;

  let html3 = "";
  obj.images.forEach((p) => {
    html3 += `<div class="carousel__slide">
    <img
      class="panzoom__content"
      src="${p}"
    />
  </div>`;
  });

  thumbCarouselPicture.innerHTML = html3;
};

// 3. Chọn size
const choseSize = (ele) => {
  // Cách 1
  // const selectedEl = document.querySelector(".selected");
  // if (selectedEl) {
  //   selectedEl.classList.remove("selected", "bg-dark", "text-white");
  // }
  // ele.classList.add("selected", "bg-dark", "text-white");

  // Cách 2:
  const sizeEls = document.querySelectorAll(".product-size span");

  Array.from(sizeEls).map((size) =>
    size.classList.remove("selected", "bg-dark", "text-white")
  );

  ele.classList.add("selected", "bg-dark", "text-white");
};

// 4. Tăng giảm số lượng sản phẩm
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
    return count == 1;
  }

  countEl.innerText = `${count}`;
});

// 5. Thêm vào giỏ hàng
btnAddToCart.addEventListener("click", () => {
  // Kiểm tra xem đã chọn size chưa
  const sizeSelectedEl = document.querySelector(".product-size .selected");

  if (!sizeSelectedEl) {
    alert("Vui lòng chọn size");
    return;
  }

  // Cấu trúc item thêm vào giỏ hàng
  let item = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.images[0],
    count: count,
    size: sizeSelectedEl.innerText,
  };

  addItemToCart(item)
  alert("Thêm vào giỏ hàng thành công")
});

renderProduct(product);

// File sẵn có
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
