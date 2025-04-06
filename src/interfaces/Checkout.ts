
export interface ICheckout{
    id: string | number;
    cart: {
        product_variant_id: number;
        quantity: number;
    }
    user_name: string;
    user_email: string;
    user_address: string;
    user_phone: string;
    voucher_code: string;
    shipping_fee: number;
    payment_method: number;
}