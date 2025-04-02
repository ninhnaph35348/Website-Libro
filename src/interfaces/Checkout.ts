import { ICartItem } from "./Cart";

export interface ICheckout{
    id: string | number;
    cart: ICartItem;
    user_name: string;
    user_email: string;
    user_address: string;
    user_phone: string;
    voucher_code: string;
    shipping_fee: number;
    payment_method: number;
}