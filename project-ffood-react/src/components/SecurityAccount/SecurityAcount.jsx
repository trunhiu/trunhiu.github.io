import React from "react";

const SecurityAcount = () => {
  return (
    <section class="py-5">
      <div class="container">
        <h1 class="fs-4 mb-5">Bảo mật tài khoản</h1>
        <div class="row">
          <div class="col-md-6">
            <div class="bg-light p-4">
              <div class="mb-3">
                <label class="col-form-label">Mật khẩu cũ</label>
                <input
                  type="password"
                  class="form-control"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Mật khẩu mới</label>
                <input
                  type="password"
                  class="form-control"
                  // value={newPassword}
                  // onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Xác nhận lại mật khẩu mới</label>
                <input
                  type="password"
                  class="form-control"
                  // value={confirmPassword}
                  // onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div class="text-center mt-3">
              <button
                class="btn btn-primary"
                id="btn-save"
                //   onClick={handleUpdatePassword}
              >
                Cập nhật mật khẩu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityAcount;
