import { IOrder } from "./Orders";

export interface ICheckout {
    id: string | number;
    cart: {
        product_variant_id: number;
        quantity: number;
    }
    user_name: string;
    shipping_name: string;
    note: string;
    user_email: string;
    user_address: string;
    user_phone: string;
    shipping_address: string;
    shipping_phone: string;
    shipping_email: string;
    voucher_code: string;
    shipping_fee: number;
    payment_method: number;
    code_order?: IOrder
}