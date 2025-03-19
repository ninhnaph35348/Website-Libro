export interface IOrder {
    id: number;
    code_order: number;
    total_price: string;
    note?: string;
    user_name?: string | null;
    user_email?: string | null;
    user_phone?: string | null;
    user_address?: string | null;
    user_id: number;
    status: string;
    payment_method: number;
    voucher_id?: number | null;
    order_status_id: number;
}