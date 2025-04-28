import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { ICartItem, ICartContext } from "../interfaces/Cart";
import { IProductVariant } from "../interfaces/ProductVariants";
import { toast } from "react-toastify";

type Props = {
  children: React.ReactNode;
};

export const CartContext = createContext<ICartContext | undefined>(undefined);

const CartProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Lỗi khi đọc giỏ hàng từ localStorage:", error);
      return [];
    }
  });

  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      try {
        localStorage.setItem("cart", JSON.stringify(cartItems));
      } catch (error) {
        console.error("Lỗi khi lưu giỏ hàng vào localStorage:", error);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [cartItems]);

  const addToCart = (variant: IProductVariant, quantity: number = 1) => {
    console.log("addToCart called with:", { variant, quantity });
    if (!variant.id) {
      setMessage("Sản phẩm không hợp lệ!");
      setTimeout(() => setMessage(""), 3000);
      return;
    }
    if (quantity < 1) {
      setMessage("Số lượng phải lớn hơn 0!");
      setTimeout(() => setMessage(""), 3000);
      return;
    }
    if (quantity > variant.quantity) {
      setMessage("Số lượng vượt quá tồn kho!");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === variant.id);
      let updatedCart;

      if (existingItem) {
        const newQuantity = existingItem.cartQuantity + quantity;
        if (newQuantity > variant.quantity) {
          setMessage("Số lượng vượt quá tồn kho!");
          setTimeout(() => setMessage(""), 3000);
          return prevItems;
        }
        updatedCart = prevItems.map((item) =>
          item.id === variant.id ? { ...item, cartQuantity: newQuantity } : item
        );
      } else {
        const newItem: ICartItem = {
          ...variant,
          cartQuantity: quantity,
          isSelected: false,
        };
        updatedCart = [...prevItems, newItem];
      }

      setTimeout(() => setMessage(""), 3000);
      return updatedCart;
    });
  };

  const removeFromCart = (variantId: number) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter((item) => item.id !== variantId);
      setTimeout(() => setMessage(""), 3000);
      return updatedCart;
    });
  };

  const updateCartQuantity = (variantId: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(variantId);
      setMessage("Sản phẩm đã được xóa do số lượng nhỏ hơn 1!");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    setCartItems((prevItems) => {
      const item = prevItems.find((item) => item.id === variantId);
      if (!item) return prevItems;

      if (quantity > item.quantity) {
        setMessage("Số lượng vượt quá tồn kho!");
        setTimeout(() => setMessage(""), 3000);
        return prevItems;
      }

      const updatedCart = prevItems.map((item) =>
        item.id === variantId ? { ...item, cartQuantity: quantity } : item
      );
      setMessage("Số lượng sản phẩm đã được cập nhật!");
      setTimeout(() => setMessage(""), 3000);
      return updatedCart;
    });
  };

  const toggleItemSelection = (variantId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === variantId ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  const selectAllItems = () => {
    setCartItems((prevItems) =>
      prevItems.map((item) => ({ ...item, isSelected: true }))
    );
  };

  const deselectAllItems = () => {
    setCartItems((prevItems) =>
      prevItems.map((item) => ({ ...item, isSelected: false }))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.cartQuantity, 0),
    [cartItems]
  );

  const totalPrice = useMemo(
    () =>
      cartItems.reduce(
        (sum, item) =>
          item.isSelected ? sum + item.cartQuantity * (item.price || 0) : sum,
        0
      ),
    [cartItems]
  );

  const contextValue: ICartContext = {
    cartItems,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    toggleItemSelection,
    selectAllItems,
    deselectAllItems,
    clearCart,
    message,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {message && (
        <div
          className="cart-message"
          style={{
            position: "fixed",
            top: 20,
            right: 20,
            padding: 10,
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: 5,
            zIndex: 1000,
          }}
        >
          {message}
        </div>
      )}
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default CartProvider;
