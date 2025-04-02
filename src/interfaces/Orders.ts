export interface IOrder {
    id: number;
    code_order: string;
    total_price: number;
    note?: string | null;
    user_name?: string | null;
    user_email?: string | null;
    user_phone?: string | null;
    user_address?: string | null;
    user_id?: number | null;
    payment_method: number;
    voucher_id?: number | null;
    order_status_id: number;
    status: number;
}

