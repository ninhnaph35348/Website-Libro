// src/components/Shopdetail.tsx
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { IProduct } from "../../../interfaces/Products";
import { getProductById } from "../../../services/Product";
import { useCart } from "../../../context/Cart";
import { IProductVariant } from "../../../interfaces/ProductVariants";

const Shopdetail = () => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [selectedVariant, setSelectedVariant] =
    useState<IProductVariant | null>(null);
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    (async () => {
      if (code) {
        try {
          const data = await getProductById(code);
          const fetchedProduct = data.data;
          console.log("Fetched product:", fetchedProduct);
          // Tạm thời set status = 1 để kiểm tra
          fetchedProduct.status = 1; // Xóa dòng này sau khi kiểm tra
          setProduct(fetchedProduct);

          const defaultVariant: IProductVariant = fetchedProduct
            .variants?.[0] || {
            id: fetchedProduct.id,
            product_id: fetchedProduct.id,
            price: fetchedProduct.price || 30,
            quantity: fetchedProduct.quantity || 10,
            promotion: fetchedProduct.promotion || 0,
            cover_id: fetchedProduct.cover_id || 0, // Giả sử API trả về cover_id
            cover: fetchedProduct.cover || "bìa mềm", // Giả sử API trả về cover, nếu không thì mặc định là "bìa mềm"
            product: fetchedProduct,
          };
          console.log("Selected variant:", defaultVariant);
          setSelectedVariant(defaultVariant);
        } catch (error) {
          console.error("Lỗi khi tải sản phẩm:", error);
          setProduct(null);
          setSelectedVariant(null);
        }
      }
    })();
  }, [code]);

  if (!product || !selectedVariant) {
    return (
      <p className="text-center mt-10 text-gray-500">Sản phẩm không tồn tại.</p>
    );
  }

  const handleAddToCart = (variant: IProductVariant) => {
    console.log("handleAddToCart called with:", { variant, quantity });
    if (product.status !== 1) {
      alert("Sản phẩm hiện đã hết hàng, không thể thêm vào giỏ hàng!");
      console.log("Product out of stock, cannot add to cart");
      return;
    }

    try {
      addToCart(variant, quantity);
      console.log("addToCart called successfully");
      setTimeout(() => {
        console.log("Navigating to /shop-cart");
        navigate("/shop-cart");
      }, 1000);
    } catch (error) {
      console.error("Lỗi khi thêm vào giỏ hàng:", error);
      alert("Đã có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng!");
    }
  };

  return (
    <>
      <div className="breadcrumb-wrapper">
        <div className="container">
          <div className="page-heading">
            <h1>Shop Details</h1>
            <div className="page-header">
              <ul className="breadcrumb-items">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i>
                </li>
                <li>Shop Details</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="shop-details-section fix section-padding">
        <div className="container">
          <div className="shop-details-wrapper">
            <div className="row g-4">
              <div className="col-lg-5">
                <div className="shop-details-image">
                  <div className="shop-details-thumb">
                    <img
                      src={
                        typeof product.image === "string"
                          ? `http://127.0.0.1:8000/storage/${product.image}`
                          : ""
                      }
                      alt={product.title}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  {product.images?.length > 0 && (
                    <div className="sub-images d-flex gap-2 mt-1">
                      {product.images.map((img, index) => (
                        <div key={index} className="sub-image">
                          <img
                            src={
                              typeof img === "string"
                                ? `http://127.0.0.1:8000/storage/${img}`
                                : ""
                            }
                            alt={`Product image ${index}`}
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-lg-7">
                <div className="shop-details-content">
                  <h2>{product.title}</h2>
                  <h5>
                    {product.status === 1 ? "Stock available" : "Out of stock"}
                  </h5>
                  <p>{product.description || "No description available."}</p>
                  <div className="price-list">
                    <h3>${selectedVariant.price}</h3>
                  </div>
                  <p>
                    <strong>Author:</strong> {product.author}
                  </p>
                  <p>
                    <strong>Publisher:</strong> {product.publisher}
                  </p>
                  <p>
                    <strong>Category:</strong> {product.category}
                  </p>
                  <p>
                    <strong>Language:</strong> {product.language}
                  </p>
                  <p>
                    <strong>Supplier:</strong> {product.supplier_name}
                  </p>
                  <p>
                    <strong>Cover:</strong> {selectedVariant.cover}
                  </p>

                  <div className="cart-wrapper">
                    <div className="quantity-basket">
                      <p className="qty">
                        <button
                          className="qtyminus"
                          onClick={() =>
                            setQuantity((prev) => Math.max(1, prev - 1))
                          }
                          disabled={product.status !== 1}
                        >
                          −
                        </button>
                        <input
                          type="number"
                          name="qty"
                          id="qty2"
                          min="1"
                          max={selectedVariant.quantity}
                          step="1"
                          value={quantity}
                          onChange={(e) => {
                            const newValue = Number(e.target.value);
                            if (
                              newValue >= 1 &&
                              newValue <= selectedVariant.quantity
                            ) {
                              setQuantity(newValue);
                            }
                          }}
                          disabled={product.status !== 1}
                        />
                        <button
                          className="qtyplus"
                          onClick={() =>
                            setQuantity((prev) =>
                              Math.min(selectedVariant.quantity, prev + 1)
                            )
                          }
                          disabled={product.status !== 1}
                        >
                          +
                        </button>
                      </p>
                    </div>

                    <button
                      className="theme-btn"
                      disabled={product.status !== 1}
                      onClick={() => handleAddToCart(selectedVariant)}
                    >
                      <i className="fa-solid fa-basket-shopping"></i> Thêm Vào
                      Giỏ Hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shopdetail;