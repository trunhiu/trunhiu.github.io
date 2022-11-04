import React, { useContext, useState } from "react";
import Context from "context/Context";
import { Link, useNavigate } from "react-router-dom";
import { formatMoney } from "utils/utils";
import { addOrder, clearCart } from "store/actions";

function Checkout() {
  const { auth, products, dispatchOrder, dispatchCart } = useContext(Context);
  const [name, setName] = useState(auth.name || "");
  const navigate = useNavigate();
  const [phone, setPhone] = useState(auth.phone || "");
  const [email, setEmail] = useState(auth.email || "");

  const [paymentMethod, setPaymentMethod] = useState("transfer");

  const subTotal = products.reduce(
    (total, product) => total + product.count * product.price,
    0
  );
  const vat = subTotal * 0.1;
  const total = subTotal + vat;

  const randomNumber = Math.floor(Math.random() * 1000);

  const handleAddOrder = () => {
    if (auth.id) {
      const addedOrder = {
        id: randomNumber,
        userId: auth.id,
        items: products,
        createdAt: new Date(),
        paymentMethod: paymentMethod,
        total: total,
      };
      dispatchOrder(addOrder(addedOrder));
    }

    // Xóa danh sách item trong cart
    dispatchCart(clearCart());
    alert("Mua thành công");
    navigate("/khoa-hoc");
  };

  return (
    <div className="shopping-cart-container my-5">
      <div className="container">
        <div className="mb-4">
          <nav
            style={{ "--bs-breadcrumb-divider": ">" }}
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/gio-hang">Giỏ hàng</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Thanh toán
              </li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="p-4 shadow-sm">
              <h2 className="fs-5 fw-normal mb-3">1. Thông tin tài khoản</h2>
              <div className="account-info d-flex mb-4">
                <input
                  type="text"
                  placeholder="Nhập tên"
                  className="form-control flex-grow-1"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Nhập email"
                  className="form-control flex-grow-1 mx-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Nhập số điện thoại"
                  className="form-control flex-grow-1"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <h2 className="fs-5 fw-normal mb-3 mt-5">
                2. Phương thức thanh toán
              </h2>
              <div className="payment methods">
                <div className="topic-item input-group d-flex align-items-center mb-1">
                  <input
                    type="radio"
                    value="transfer"
                    id="transfer"
                    checked={paymentMethod === "transfer"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label htmlFor="transfer" className="ms-2">
                    Chuyển khoản
                  </label>
                </div>
                <div className="topic-item input-group d-flex align-items-center mb-1">
                  <input
                    type="radio"
                    value="direct"
                    id="direct"
                    checked={paymentMethod === "direct"}
                    onChange={(e) => setPaymentMethod("direct")}
                  />
                  <label htmlFor="direct" className="ms-2">
                    Thanh toán trực tiếp
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 shadow-sm">
              <div className="order-detail">
                <h2 className="fs-5 fw-normal mb-4">Đơn hàng</h2>

                <div className="order-items">
                  {products.map((product) => (
                    <div
                      className="order-item d-flex justify-content-between align-items-center"
                      key={product.id}
                    >
                      <p className="text-black-50">{product.title}</p>
                      <p className="fw-bold">
                        {formatMoney(product.price)} x {product.count}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="order-money d-flex justify-content-between align-items-center border-top pt-4">
                  <p className="text-black-50 fw-bold">Thành tiền</p>
                  <p className="fw-bold">{formatMoney(subTotal)}</p>
                </div>

                <div className="order-money d-flex justify-content-between align-items-center border-top pt-4">
                  <p className="text-black-50 fw-bold">VAT</p>
                  <p className="fw-bold">{formatMoney(vat)}</p>
                </div>

                <div className="order-money d-flex justify-content-between align-items-center border-top pt-4 pb-4">
                  <p className="text-black-50 fw-bold">Tổng cộng</p>
                  <p className="fw-bold">{formatMoney(total)}</p>
                </div>

                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-primary"
                    id="btn-submit"
                    onClick={handleAddOrder}
                  >
                    Gửi đăng ký
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
