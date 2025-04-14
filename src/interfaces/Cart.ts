import { IProductVariant } from "./ProductVariants";

export interface ICartItem extends IProductVariant {
  cartQuantity: number; // Số lượng trong giỏ hàng
  isSelected: boolean; // Thêm trường để theo dõi trạng thái checkbox
}

export interface ICartContext {
  cartItems: ICartItem[];
  totalItems: number; // Tổng số lượng sản phẩm trong giỏ
  totalPrice: number; // Tổng giá tiền (nếu IProductVariant có giá)
  addToCart: (variant: IProductVariant, quantity?: number) => void;
  removeFromCart: (variantId: number) => void;
  updateCartQuantity: (variantId: number, quantity: number) => void;
  clearCart: () => void;
  toggleItemSelection: (variantId: number) => void; // Hàm mới để chọn/hủy chọn
  selectAllItems: () => void; // Hàm chọn tất cả
  deselectAllItems: () => void; // Hàm bỏ chọn tất cả
  message: string;
}
