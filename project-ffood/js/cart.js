// 1. Thêm vào localStorage
const setDataFromLocalStorage = (arr) => {
    localStorage.setItem("cart", JSON.stringify(arr));
  };

// 2. Lấy ra từ localStorage
const getDataFromLocalStorage = () => {
    const localStorageValue = localStorage.getItem("cart");
  
    if (localStorageValue) {
      return JSON.parse(localStorageValue);
    } else {
      return [];
    }
  };

// 3. Thêm cart
const addItemToCart = (item) => {
  
    // Lấy cart từ localStorage
    let cart = getDataFromLocalStorage();
  
    // Nếu cart không tồn tại => thêm mới
    if (cart.length == 0) {
      cart.push(item);
    } else {
      // Tìm kiếm sản phẩm có trong giỏ hàng hay chưa
      let product = cart.find((p) => p.id == item.id && p.size == item.size);
  
      // Nếu không tìm thấy => thêm mới
      // Nếu tìm thấy => cập nhật số lượng
      if (!product) {
        cart.push(item);
      } else {
        product.count += item.count;
      }
    }
  
    // Lưu dữ liệu vào localStorage
    setDataFromLocalStorage(cart);
  
    // Cập nhật số lượng trên giao diện
    updateTotalCart();

    
  };

  

// 4. Cập nhật số lượng cart
const updateTotalCart = () => {
    // Lấy cart từ localStorage
    let cart = getDataFromLocalStorage();
    document.querySelector(".cart-count").innerText = cart.length;
  };
  
  updateTotalCart();



