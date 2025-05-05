import React from "react";

const VoucherClient = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Mã Voucher Lần Đầu Đăng Nhập</h2>
      </div>
      <div className="text-xl font-semibold text-green-600 flex justify-between">
        <h3>CHAOMUNG</h3>
        <p className="text-sm text-gray-600">
          Giảm 50% tối đa 30k cho đơn hàng đầu tiên
        </p>
      </div>
    </div>
  );
};

export default VoucherClient;
