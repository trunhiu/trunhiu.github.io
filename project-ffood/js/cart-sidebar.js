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
  