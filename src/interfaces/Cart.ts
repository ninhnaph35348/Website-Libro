import { IProductVariant } from "./ProductVariants";

export interface ICartItem extends IProductVariant {
  cartQuantity: number; // Số lượng trong giỏ hàng
}

export interface ICartContext {
  cartItems: ICartItem[];
  totalItems: number; // Tổng số lượng sản phẩm trong giỏ
  totalPrice: number; // Tổng giá tiền (nếu IProductVariant có giá)
  addToCart: (variant: IProductVariant, quantity?: number) => void;
  removeFromCart: (variantId: number) => void;
  updateCartQuantity: (variantId: number, quantity: number) => void;
  clearCart: () => void;
  message : string; // Thông báo cho người dùng
}