import { IOrderStatus } from "./OrderStatus";

export interface IStatistics {
    id: number;
    name: string;
    ourder_count: number;
    customer_count: number;
    month: string;
    revenue: number;
    total_reviews: number;
    totalBooks: number;
    soldBooks: number;
    inStock: number;
    from_date: Date;
    to_date: Date
    ordersByStatus?: IOrderStatus[];
    revenueByPeriod?: IRevenue[]
  }
export interface IRevenue {
    month: string;
    revenue: number;
  }
  