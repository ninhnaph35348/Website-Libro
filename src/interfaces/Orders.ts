export interface IOrder {
    id: number;
    code_order: string;
    total_price: number;
    user_name?: string | null;
    user_email?: string | null;
    user_phone?: string | null;
    user_address?: string | null;
    shipping_name?: string | null;
    shipping_email?: string | null;
    shipping_phone?: string | null;
    shipping_address?: string | null;
    user_id?: number | null;
    payment_method: number;
    voucher_id?: number | null;
    voucher?: string | null;
    voucher_discount?: number | null;
    discount_type?: string;
    order_status_id: number;
    status: number;
    created_at: string;
    note: string;
    voucher_discount_type: string
    items: {
        code: string;
        cover: string;
        id: number;
        image: string | null;
        price: string;
        quantity: number;
        title: string;
        total_line: number;
    }[]
}

