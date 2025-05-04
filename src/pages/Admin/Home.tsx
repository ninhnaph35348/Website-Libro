import {
  BookOpenIcon,
  MessageCircleIcon,
  ShoppingCartIcon,
  TruckIcon,
  UsersIcon
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card } from "../../components/ui/Card";
import { StatisticsContext } from "../../context/Statistics";
import { ProductVariantContext } from "../../context/ProductVariants";
import { IProductVariant } from "../../interfaces/ProductVariants";
import axios from "axios";
import { format } from "date-fns";
import { Button, Modal } from "antd";

const Home = () => {
  const { statistics, fetchStatistics } = useContext(StatisticsContext);
  const [revenueData, setRevenueData] = useState([]);

  const [groupBy, setGroupBy] = useState("month");
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const handleQuickSelect = (type: string) => {
    const today = new Date();
    let start, end;

    switch (type) {
      case "this_week":
        start = new Date(today.setDate(today.getDate() - today.getDay() + 1));
        end = new Date();
        break;
      case "last_week":
        start = new Date(today.setDate(today.getDate() - today.getDay() - 6));
        end = new Date(today.setDate(start.getDate() + 6));
        break;
      case "this_month":
        start = new Date(today.getFullYear(), today.getMonth(), 1);
        end = new Date();
        break;
      case "last_month":
        start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        end = new Date(today.getFullYear(), today.getMonth(), 0);
        break;
      default:
        start = null;
        end = null;
    }

    if (start && end) {
      setFromDate(format(start, "yyyy-MM-dd"));
      setToDate(format(end, "yyyy-MM-dd"));
      setYear(start.getFullYear());
    }
  };
  const fetchRevenue = async () => {
    try {
      const { data } = await axios.get("http://127.0.0.1:8000/api/statistics/revenue-by-period", {
        params: {
          group_by: groupBy,
          year: year,
          from_date: fromDate || undefined,
          to_date: toDate || undefined,
        },
      });
      setRevenueData(data);
    } catch (error) {
      console.error("Lỗi lấy dữ liệu doanh thu:", error);
    }
  };
  useEffect(() => {
    fetchRevenue();
    fetchStatistics();
  }, []);
  



  const { productBestsellers, Bestsellers } = useContext(
    ProductVariantContext
  );

  useEffect(() => {
    Bestsellers();
  }, []);
  if (!statistics) return <div>Loading...</div>;

  const stats = [
    {
      title: "Số lượng sách",
      value: statistics.totalBooks,
      icon: <BookOpenIcon className="text-blue-500" />,
    },
    {
      title: "Sách đã bán",
      value: statistics.soldBooks,
      icon: <ShoppingCartIcon className="text-green-500" />,
    },
    {
      title: "Kho",
      value: statistics.inStock,
      icon: <TruckIcon className="text-yellow-500" />,
    },
    {
      title: "Bình luận",
      value: statistics.total_reviews,
      icon: <MessageCircleIcon className="text-purple-500" />,
    },
    {
      title: "Người đã mua",
      value: statistics.customer_count,
      icon: <UsersIcon className="text-pink-500" />,
    },
  ];
  const chartData = revenueData?.map((item: any) => {
    const label =
      groupBy === "day"
        ? `${item.date}`
        : groupBy === "week"
          ? `${item.week}`
          : groupBy === "month"
            ? `${item.month}`
            : `${item.quarter}`;
    return {
      label,
      total: item.revenue,
    };
  }) || [];


  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800">📊 Trang Thống Kê</h1>

      {/* Tổng quan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-4 bg-white shadow-xl rounded-2xl flex items-center gap-4 hover:shadow-2xl transition-shadow">
            <div className="bg-gray-100 p-3 rounded-full">
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>
              <p className="text-xl font-semibold text-gray-800">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-white shadow-xl rounded-2xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">📦 Trạng thái đơn hàng</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {statistics.ordersByStatus?.map((status, index) => (
            <div key={index} className="border rounded-xl p-4 bg-gray-50 text-center shadow-sm">
              <p className="text-gray-600">{status.name}</p>
              <p className="text-lg font-bold text-gray-800">{status.order_count}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Biểu đồ doanh thu */}
      <Card className="p-6 bg-white shadow-xl rounded-2xl space-y-6">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h2 className="text-2xl font-bold text-gray-700">📈 Doanh thu theo thời gian</h2>
          <Button
            type="primary"
            className="bg-green-500 hover:bg-green-600 text-white"
            onClick={() => setIsFilterModalOpen(true)}
          >
            Bộ lọc thời gian
          </Button>
        </div>

        {/* Modal Bộ lọc */}
        <Modal
          title="Bộ lọc doanh thu"
          open={isFilterModalOpen}
          onOk={() => {
            fetchRevenue();  // 👈 GỌI LẠI API
            setIsFilterModalOpen(false);  // 👈 Rồi đóng modal
          }}
          onCancel={() => setIsFilterModalOpen(false)}
          okText="Áp dụng"
          cancelText="Hủy"
        >
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Nhóm theo</label>
              <select
                className="border rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-green-400"
                value={groupBy}
                onChange={(e) => setGroupBy(e.target.value)}
              >
                <option value="day">Theo ngày</option>
                <option value="week">Theo tuần</option>
                <option value="month">Theo tháng</option>
                <option value="quarter">Theo quý</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Chọn năm</label>
              <select
                className="border rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-green-400"
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
              >
                {[2022, 2023, 2024, 2025].map((y) => (
                  <option key={y} value={y}>
                    Năm {y}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { label: "Tuần này", type: "this_week" },
                { label: "Tuần trước", type: "last_week" },
                { label: "Tháng này", type: "this_month" },
                { label: "Tháng trước", type: "last_month" },
              ].map((item) => (
                <button
                  key={item.type}
                  className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-2 rounded-lg"
                  onClick={() => handleQuickSelect(item.type)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Từ ngày</label>
                <input
                  type="date"
                  className="border rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-green-400"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Đến ngày</label>
                <input
                  type="date"
                  className="border rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-green-400"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </div>
            </div>
          </div>
        </Modal>

        {/* Biểu đồ LineChart */}
        <div className="w-full h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" tick={{ fontSize: 12 }} />
              <YAxis
                tickFormatter={(value) => `${(value / 1e6).toFixed(1)}tr`}
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                formatter={(value) => `${Number(value).toLocaleString()}₫`}
                contentStyle={{ borderRadius: '10px' }}
              />
              <Line
                type="monotone"
                dataKey="total"
                stroke="#10B981"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>


      {/* Top sản phẩm bán chạy */}
      <Card className="p-6 bg-white shadow-xl rounded-2xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">🔥 Top sản phẩm bán chạy</h2>
        <div className="space-y-3">
          {productBestsellers.map((product: IProductVariant,) => (
            <div key={product.id} className="flex justify-between items-center border-b pb-2">
              <span className="text-gray-700">{product.product.title}</span>
              <span className="text-sm text-gray-500">{product.total_sold} đơn</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Home;
