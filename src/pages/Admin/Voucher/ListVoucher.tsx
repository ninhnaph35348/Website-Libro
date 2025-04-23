import { Switch, Tooltip } from "antd";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { VoucherContext } from "../../../context/Voucher";
import { IVoucher } from "../../../interfaces/Voucher";

const VoucherList = () => {
    const { vouchers, getAllVouchers, onStatus } = useContext(VoucherContext);
    const navigate = useNavigate();
    useEffect(() => {
        getAllVouchers();
    }, []);
    const voucherList = Array.isArray(vouchers) ? vouchers : Object.values(vouchers);


    return (
        <div className="p-6 w-full mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Quản lý Mã giảm giá</h2>

            <div className="mb-4 flex justify-between items-center w-full">
                <button
                    onClick={() => navigate("add")}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Thêm mới voucher
                </button>
                {/* <input
          type="text"
          placeholder="Tìm kiếm theo mã voucher..."
          value={searchTerm}
          onChange={handleSearch}
          className="border px-4 py-2 w-1/3 rounded"
        /> */}
            </div>

            <table className="w-full border-collapse border border-gray-200">
                <thead>
                    <tr>
                        <th className="border p-2">STT</th>
                        <th className="border p-2">Mã</th>
                        <th className="border p-2">Loại</th>
                        <th className="border p-2">Giá trị</th>
                        <th className="border p-2">Giảm tối đa</th>
                        {/* <th className="border p-2">Tối thiểu ĐH</th> */}
                        <th className="border p-2">Số lượng</th>
                        <th className="border p-2">Đã dùng</th>
                        {/* <th className="border p-2">SD tối thiểu</th> */}
                        <th className="border p-2">Hiệu lực</th>
                        <th className="border p-2">Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {voucherList.length > 0 ? (
                        voucherList.map((voucher: IVoucher, index: number) => (
                            <tr key={voucher.id ?? index}>
                                <td className="border p-2">{index + 1}</td>
                                <td className="border p-2 font-semibold">{voucher.code}</td>
                                <td className="border p-2 capitalize">
                                    {voucher.discount_type === "fixed" ? "Giảm cố định" : "Phần trăm"}
                                </td>
                                <td className="border p-2">
                                    {voucher.discount_type === "fixed"
                                        ? `${Number(voucher.discount).toLocaleString()}đ`
                                        : `${voucher.discount}%`}
                                </td>
                                <td className="border p-2">
                                    {voucher.max_discount
                                        ? `${Number(voucher.max_discount).toLocaleString()}đ`
                                        : "-"}
                                </td>
                                {/* <td className="border p-2">
                                    {voucher.min_order_value
                                        ? `${Number(voucher.min_order_value).toLocaleString()}đ`
                                        : "-"}
                                </td> */}
                                <td className="border p-2">{voucher.quantity}</td>
                                <td className="border p-2 text-center">{voucher.used}</td>
                                {/* <td className="border p-2">
                                    {voucher.max_usage_per_user ?? "-"}
                                </td> */}
                                <td className="border p-2">
                                    {voucher.valid_from} → {voucher.valid_to}
                                </td>
                                <td className="border p-2 space-x-2 text-center">
                                    <Tooltip title={voucher.status === 0 ? "Đang kích hoạt" : "Ngưng sử dụng"}>
                                        <Switch
                                            checked={voucher.status === 0}
                                            onChange={(checked) =>
                                                onStatus(voucher.code, checked ? 0 : 1)
                                            }
                                        />
                                    </Tooltip>
                                    <button
                                        onClick={() => navigate(`edit/${voucher.code}`)}
                                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                                    >
                                        Sửa
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="text-center p-4 text-gray-500">
                                Không có voucher nào phù hợp.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default VoucherList;
