// Truy cập vào các sản phẩm
const productListEle = document.querySelector('.product-list')
const searchFromInputEle = document.querySelector('.seach-form-input')
const btnSearch = document.querySelector('.seach-form-button')
console.log(searchFromInputEle)

// Tìm kiếm sản phẩm
searchFromInputEle.addEventListener('keydown', (e) => {
    if(e.keyCode === 13) {
        searchProduct();
    }
})

btnSearch.addEventListener('click', function() {
    searchProduct();
});

const searchProduct = () => {
    let value = searchFromInputEle.value;
        if (!value) {
            alert('Từ khoá không được để trống')
            return;
        }
    // Tìm kiếm sản phẩm
    let productFilter = products.filter(p => p.name.toLowerCase().includes(value.toLowerCase()));
    renderProduct(productFilter);
}

// Hiển thị danh sách sản phẩm
const renderProduct = arr => {
    productListEle.innerHTML = '';

    // Kiểm tra xem có sản phẩm không
    if (arr.length == 0) {
        productListEle.innerHTML = `<p class="todos-empty">Không có sản phẩm nào trong danh sách</p>`;
        return;
    }

    // Hiển thị sản phẩm nếu có
    let html = '';
    arr.forEach(p => {
        html += `
        <div class="col-md-3">
            <a href="./detail.html?id=${p.id}">
                <div class="product-item shadow-sm rounded mb-4">
                    <div class="product-item-image">
                        <img src="${p.images[0]}"
                            alt="${p.name}">
                    </div>
                    <div class="product-item-info p-3">
                        <h2 class="fs-5 mb-4 text-dark">${p.name}</h2>
                         <div class="d-flex justify-content-between align-items-center fw-light text-black-50">
                            <p class="type fs-5 text-danger fw-normal">${formatMoney(p.price)}</p>
                            <p class="rating">
                                ${p.rating} <span class="text-warning"><i class="fa-solid fa-star"></i></span>
                            </p>
                    </div>
                    </div>
                </div>
            </a>
        </div>
        `
    });
    productListEle.innerHTML = html;
}

const formatMoney = number => {
    return number = number.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}

renderProduct(products)


