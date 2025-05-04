import { createContext, useState } from "react";
import { IOrderStatus } from "../interfaces/OrderStatus";
import { IRevenue, IStatistics } from "../interfaces/Statistics";
import {
    getCustomers,
    getInStock,
    getOrdersByStatus,
    getRevenueByPeriod,
    getSoldBook,
    getTotalBooks,
    getTotalReviews,
} from "../services/Statistical";

type Props = {
    children: React.ReactNode;
};

type StatisticsContextType = {
    statistics: Partial<IStatistics>;
    fetchStatistics: () => void;
};

export const StatisticsContext = createContext<StatisticsContextType>({} as StatisticsContextType);

const StatisticsProvider = ({ children }: Props) => {
    const [statistics, setStatistics] = useState<Partial<IStatistics>>({});

    const fetchStatistics = async () => {
        try {
            const [
                totalBooksRes,
                soldBooksRes,
                inStockRes,
                revenueByPeriodRes,
                customersRes,
                totalReviewsRes,
                ordersByStatusRes,
            ] = await Promise.all([
                getTotalBooks(),
                getSoldBook(),
                getInStock(),
                getRevenueByPeriod(),
                getCustomers(),
                getTotalReviews(),
                getOrdersByStatus(),
            ]);

            setStatistics({
                totalBooks: totalBooksRes["Tổng số lượng sách"],
                soldBooks: Number(soldBooksRes["Số lượng sách đã bán"]),
                inStock: Number(inStockRes["Số lượng sách còn trong kho"]),
                revenueByPeriod: revenueByPeriodRes as IRevenue[],
                customer_count: customersRes["customer_count"] || 0,
                total_reviews: totalReviewsRes["total_reviews"] || 0,
                ordersByStatus: ordersByStatusRes as IOrderStatus[],
            });
        } catch (error) {
            console.error("❌ Lỗi khi fetch statistics:", error);
        }
    };

    return (
        <StatisticsContext.Provider value={{ statistics, fetchStatistics }}>
            {children}
        </StatisticsContext.Provider>
    );
};

export default StatisticsProvider;
