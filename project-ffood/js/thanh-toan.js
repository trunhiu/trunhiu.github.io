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
      discountMoneyEl.innerText = formatMoney(discount);
      totalMoneyEl.innerText = formatMoney(totalMoney - discount);
    } else {

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
  
  // Api tinh thanh
var citis = document.getElementById("city");
var districts = document.getElementById("district");
var wards = document.getElementById("ward");
var Parameter = {
  url: "../api-vietnam/vietnam.json", //Đường dẫn đến file chứa dữ liệu hoặc api do backend cung cấp
  method: "GET", //do backend cung cấp
  responseType: "application/json", //kiểu Dữ liệu trả về do backend cung cấp
};
//gọi ajax = axios => nó trả về cho chúng ta là một promise
var promise = axios(Parameter);
//Xử lý khi request thành công
promise.then(function (result) {
  renderCity(result.data);
});

function renderCity(data) {
  for (const x of data) {
    citis.options[citis.options.length] = new Option(x.Name, x.Id);
  }

  // xứ lý khi thay đổi tỉnh thành thì sẽ hiển thị ra quận huyện thuộc tỉnh thành đó
  citis.onchange = function () {
    district.length = 1;
    ward.length = 1;
    if(this.value != ""){
      const result = data.filter(n => n.Id === this.value);

      for (const k of result[0].Districts) {
        district.options[district.options.length] = new Option(k.Name, k.Id);
      }
    }
  };

   // xứ lý khi thay đổi quận huyện thì sẽ hiển thị ra phường xã thuộc quận huyện đó
  district.onchange = function () {
    ward.length = 1;
    const dataCity = data.filter((n) => n.Id === citis.value);
    if (this.value != "") {
      const dataWards = dataCity[0].Districts.filter(n => n.Id === this.value)[0].Wards;

      for (const w of dataWards) {
        wards.options[wards.options.length] = new Option(w.Name, w.Id);
      }
    }
  };
}