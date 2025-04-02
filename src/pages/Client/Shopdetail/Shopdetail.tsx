// src/components/Shopdetail.tsx
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../../context/Cart";
import { IProductVariant } from "../../../interfaces/ProductVariants";
import { getProductVariantById } from "../../../services/ProductVariants";

const Shopdetail = () => {
  const [productVariant, setProductVariant] = useState<IProductVariant | null>(null);
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    (async () => {
      if (code) {
        try {
          const response = await getProductVariantById(code);
          const data = response?.data;
          if (Array.isArray(data) && data.length > 0) {
            setProductVariant(data[0]);
          } else {
            setProductVariant(null);
          }
        } catch (error) {
          console.error("Lỗi khi tải sản phẩm:", error);
          setProductVariant(null);
        }
      }
    })();
  }, [code]);

  if (!productVariant || !productVariant.product) {
    return <p className="text-center mt-10 text-gray-500">Sản phẩm không tồn tại.</p>;
  }

  const handleAddToCart = () => {
    console.log("Clicked Add to Cart", { productVariant, quantity });
    // Kiểm tra số lượng thay vì status
    if (productVariant.quantity === 0) {
      alert("Sản phẩm đã hết hàng!");
      return;
    }
    try {
      addToCart(productVariant, quantity);
      alert("Thêm thành công!");
      setTimeout(() => navigate("/shop-cart"), 1000);
    } catch (error) {
      console.error("Lỗi khi thêm vào giỏ hàng:", error);
      alert("Đã có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng!");
    }
  };

  return (
    <>
      <section className="shop-details-section">
        <div className="container">
          <div className="relative overflow-hidden bg-[#e6eff2] py-[80px]">
            <h1 className="text-2xl font-bold text-center">Chi Tiết Sản Phẩm</h1>
            <ul className="breadcrumb flex justify-center gap-2 text-gray-500">
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>/</li>
              <li>Chi tiết sản phẩm</li>
            </ul>
          </div>

          <section className="shop-details-section fix section-padding">
            <div className="container">
              <div className="shop-details-wrapper">
                <div className="row g-4">
                  <div className="col-lg-5">
                    <div className="shop-details-image">
                      <div className="tab-content">
                        <div id="thumb1" className="tab-pane fade show active">
                          <div className="shop-details-thumb">
                            <img
                              src={`http://127.0.0.1:8000/storage/${productVariant.product.image}`}
                              alt={productVariant.product.title}
                              className="border border-gray-300 p-3 shadow-md hover:shadow-lg transition rounded-xl object-cover w-full"
                            />
                          </div>
                        </div>
                        {productVariant.product.images?.map((img, index) => (
                          <div key={index} id={`thumb${index + 2}`} className="tab-pane fade">
                            <div className="shop-details-thumb">
                              <img
                                src={`http://127.0.0.1:8000/storage/${img}`}
                                alt={`Ảnh ${index + 2}`}
                                className="border border-gray-300 p-3 shadow-md hover:shadow-lg transition rounded-xl object-cover w-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <ul className="nav">
                        <li className="nav-item">
                          <a href="#thumb1" data-bs-toggle="tab" className="nav-link active">
                            <img
                              src={`http://127.0.0.1:8000/storage/${productVariant.product.image}`}
                              alt="Ảnh chính"
                              className="w-20 h-20 object-cover rounded-lg border border-gray-300 p-1"
                            />
                          </a>
                        </li>
                        {productVariant.product.images?.map((img, index) => (
                          <li key={index} className="nav-item">
                            <a href={`#thumb${index + 2}`} data-bs-toggle="tab" className="nav-link">
                              <img
                                src={`http://127.0.0.1:8000/storage/${img}`}
                                alt={`Ảnh ${index + 2}`}
                                className="w-20 h-20 object-cover rounded-lg border border-gray-300 p-1"
                              />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="shop-details-content">
                      <div>
                        <h2 className="text-4xl font-semibold">{productVariant.product.title}</h2>
                        <h5 className="text-[#57C600] font-semibold text-xl">
                          {productVariant.quantity === 0 ? "Hết hàng" : "Còn hàng"}
                        </h5>
                      </div>
                      <div className="star">
                        <a href="shop-details.html"> <i className="fas fa-star" /></a>
                        <a href="shop-details.html"><i className="fas fa-star" /></a>
                        <a href="shop-details.html"> <i className="fas fa-star" /></a>
                        <a href="shop-details.html"><i className="fas fa-star" /></a>
                        <a href="shop-details.html"><i className="fa-regular fa-star" /></a>
                        <span>(1 Customer Reviews)</span>
                      </div>
                      <p>
                        {productVariant.product.description || "Chưa có mô tả."}
                      </p>
                      <div className="price-list">
                        <h3>Giá: {Math.round(productVariant.promotion || productVariant.price).toLocaleString()}₫</h3>
                      </div>
                      <div className="cart-wrapper">
                        <div className="quantity-basket">
                          <p className="qty">
                            <button
                              className="qtyminus"
                              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                              disabled={quantity <= 1}
                              aria-hidden="true"
                            >
                              −
                            </button>
                            <input
                              type="number"
                              name="qty"
                              id="qty2"
                              min={1}
                              max={productVariant.quantity}
                              value={quantity}
                              onChange={(e) =>
                                setQuantity(
                                  Math.min(productVariant.quantity, Math.max(1, Number(e.target.value)))
                                )
                              }
                              className="w-12 text-center border-gray-300 rounded"
                            />
                            <button
                              className="qtyplus"
                              onClick={() => setQuantity((q) => Math.min(productVariant.quantity, q + 1))}
                              disabled={quantity >= productVariant.quantity}
                              aria-hidden="true"
                            >
                              +
                            </button>
                          </p>
                        </div>
                        {/* <button type="button" className="theme-btn style-2" data-bs-toggle="modal" data-bs-target="#readMoreModal">
                          Read A little
                        </button>
                        Read More Modal
                        <div className="modal fade" id="readMoreModal" tabIndex={-1} aria-labelledby="readMoreModalLabel" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-body" style={{ backgroundImage: 'url(assets/img/popupBg.png)' }}>
                                <div className="close-btn">
                                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="readMoreBox">
                                  <div className="content">
                                    <h3 id="readMoreModalLabel">The Role Of Book</h3>
                                    <p>
                                      Educating the Public <br />
                                      Political books play a crucial role in educating the public about political theories, historical events, policies, and the workings of governments. They provide readers with insights into complex political concepts and the historical context behind current events, helping to foster a more informed citizenry. <br /><br />
                                      Shaping Public Opinion <br />
                                      Authors of political books often aim to influence public opinion by presenting arguments and perspectives on various issues. These books can sway readers' views, either reinforcing their existing beliefs or challenging them to consider alternative viewpoints. This influence can extend to political debates and discussions in the public sphere. <br /><br />
                                      Documenting History <br />
                                      Political books serve as valuable records of historical events and political movements. They document the thoughts, actions, and decisions of political leaders and activists, providing future generations with a detailed account of significant periods and events. This historical documentation is essential for understanding the evolution of political systems and ideologies.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        <button
                          disabled={productVariant.quantity === 0}
                          onClick={handleAddToCart}
                          className="theme-btn"
                        >
                          <i className="fa-solid fa-basket-shopping" /> Thêm vào giỏ hàng
                        </button>
                      </div>
                      <div className="category-box">
                        <div className="category-list">
                          <ul>
                            <li>
                              <span>Code:</span> {productVariant.product.code}
                            </li>
                            <li>
                              <span>Danh mục:</span> {productVariant.product.category}
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <span>Loại bìa:</span> {productVariant.cover}
                            </li>
                            <li>
                              <span>Số trang:</span> 330
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <span>Ngôn ngữ:</span> {productVariant.product.language}
                            </li>
                            <li>
                              <span>Năm sản xuất:</span> 2021
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="box-check">
                        <div className="check-list">
                          <ul>
                            <li>
                              <i className="fa-solid fa-check" />
                              Miễn phí vận chuyển cho đơn hàng từ 500.000₫
                            </li>
                            <li>
                              <i className="fa-solid fa-check" />
                              Hỗ trợ đổi trả trong 30 ngày nếu lỗi từ nhà sản xuất
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <i className="fa-solid fa-check" />
                              Ưu đãi hấp dẫn: Giảm đến 30% cho khách hàng mới
                            </li>
                            <li>
                              <i className="fa-solid fa-check" />
                              Thanh toán an toàn – Đảm bảo bảo mật thông tin
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* <div className="social-icon">
                        <h6>Also Available On:</h6>
                        <a href="https://www.customer.io/"><img src="assets/img/cutomerio.png" alt="cutomer.io" /></a>
                        <a href="https://www.amazon.com/"><img src="assets/img/amazon.png" alt="amazon" /></a>
                        <a href="https://www.dropbox.com/"><img src="assets/img/dropbox.png" alt="dropbox" /></a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Shopdetail;