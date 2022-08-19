const checkOutProduct = document.querySelector('.checkout-sidebar-content');
const discountMoneyEl = document.getElementById("discount-money");
const btnDiscount = document.getElementById("btn-apply");
console.log(checkOutProduct);

let items = getDataFromLocalStorage();
const renderProductCheckout = () => {
  checkOutProduct.innerHTML = "";
  let html = "";
  items.forEach((p) => {
    html += `<div class="checkout-sidebar-content-products">
    <div class="checkout-sidebar-content-products-content">
      <div class="checkout-sidebar-content-image">
        <img src="${p.image}" alt="${p.name}" />
        <div class="checkout-sidebar-content-image-count">
          <span>${p.count}</span>
        </div>
      </div>
      <span>${p.name} (${p.size})</span>
    </div>
    <span class="checkout-sidebar-content-products-price"
      >${formatMoney(p.price)}</span
    >
  </div>`
  })
  checkOutProduct.innerHTML = html;
}
const formatMoney = (number) => {
  return number.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};
renderProductCheckout(items)

const subTotalMoneyEl = document.getElementById("sub-total-money");
const updateSubTotalMoney = () => {
  let totalMoney = 0;
  items.map((e) => {
    totalMoney += e.count * e.price;
  });
  subTotalMoneyEl.innerText = formatMoney(totalMoney);
};
updateSubTotalMoney();

const discountInput = document.getElementById("discount-form-input");

let discountCode = {
    FFOOD10: 10,
    FFOOD20: 20,
    FFOOD30: 30,
    FFOOD40: 40,
  };
  const checkDiscountCode = () => {
    let value = discountInput.value;
    if (discountCode[value]) {
      return discountCode[value];
    }
    return 0;
  };
  const totalMoneyEl = document.getElementById("total-money");
  const updateTotalMoney = () => {
    let totalMoney = 0;
    items.map((e) => {
      totalMoney += e.count * e.price;
    });
    // subTotalMoney.innerText = formatMoney(totalMoney);
    totalMoneyEl.innerText = formatMoney(totalMoney);
  
    let data = checkDiscountCode();
    if (data) {
        discount = (totalMoney * data) / 100;
    //   discountBox.classList.remove("d-none");
      discountMoneyEl.innerText = formatMoney(discount);
      totalMoneyEl.innerText = formatMoney(totalMoney - discount);
    } else {
    //   discountBox.classList.add("d-none");
    }
  };
  
  updateTotalMoney();


  btnDiscount.addEventListener('click', () => {
    let value = discountInput.value;
    if(discountCode[value])  {
      return updateTotalMoney(items)
    } else {
      alert ('Mã giảm giá không hợp lệ')  
    }
  
    discountInput.value = '';
    
  })
  