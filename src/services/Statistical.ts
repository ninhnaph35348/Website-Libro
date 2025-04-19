import instance from "../config/axios";

// Số lượng sách
export const getTotalBooks = async () => {
    try {
        const { data } = await instance.get("statistics/total-books");
        return data;
    } catch (error) {
        throw new Error("Lỗi");
    }
};

// Số lượng sách đã bán
export const getSoldBook = async () => {
    try {
        const { data } = await instance.get("statistics/sold-books");
        return data;
    } catch (error) {
        throw new Error("Lỗi");
    }
};

// Số lượng sách còn trong kho
export const getInStock = async () => {
    try {
        const { data } = await instance.get("statistics/in-stock");
        return data;
    } catch (error) {
        throw new Error("Lỗi");
    }
};

// Doanh thu theo tháng
export const getRevenueByPeriod = async () => {
    try {
        const { data } = await instance.get("statistics/revenue-by-period");
        return data;
    } catch (error) {
        throw new Error("Lỗi");
    }
};

// Người đã mua hàng
export const getCustomers = async () => {
    try {
        const { data } = await instance.get("statistics/customers");
        return data;
    } catch (error) {
        throw new Error("Lỗi");
    }
};


// Số lượng bình luận
export const getTotalReviews = async () => {
    try {
        const { data } = await instance.get("statistics/total-reviews");
        return data;
    } catch (error) {
        throw new Error("Lỗi");
    }
};


// Số lượng các trạng thái của đơn hàng
export const getOrdersByStatus = async () => {
    try {
        const { data } = await instance.get("statistics/orders-by-status");
        return data;
    } catch (error) {
        throw new Error("Lỗi");
    }
};