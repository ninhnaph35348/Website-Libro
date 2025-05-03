import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../../context/Cart";
import { CoverContext } from "../../../context/Cover";
import { ReviewContext } from "../../../context/Review";
import { IReviews } from "../../../interfaces/Reviews";
import { ICover } from "../../../interfaces/Cover";
import { IProductVariant } from "../../../interfaces/ProductVariants";
import { getProductCover } from "../../../services/ProductVariants";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Shopdetail = () => {
  const [productVariant, setProductVariant] = useState<IProductVariant | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const { covers, getAllCovers } = useContext(CoverContext);
  const { reviews, fetchReviews, addReview } = useContext(ReviewContext);
  const { code, id } = useParams<{ code: string; id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const [newReview, setNewReview] = useState({
    rating: 0,
    review: "",
  });
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Lấy dữ liệu bìa
  useEffect(() => {
    getAllCovers();
  }, []);

  // Lấy dữ liệu sản phẩm
  useEffect(() => {
    (async () => {
      if (!code || !id) {
        toast.error("Mã sản phẩm hoặc loại bìa không hợp lệ!");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await getProductCover(Number(id), code);
        const data = response?.data;
        if (!data || !data.product || !data.product.code) {
          throw new Error("Sản phẩm không tồn tại hoặc dữ liệu không hợp lệ.");
        }
        setProductVariant(data);
      } catch (error) {
        console.error("Lỗi khi tải sản phẩm:", error);
        toast.error(
          error instanceof Error ? error.message : "Không thể tải sản phẩm!"
        );
        setProductVariant(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [code, id]);

  // Lấy đánh giá khi product_code sẵn sàng
  useEffect(() => {
    if (productVariant?.product?.code) {
      fetchReviews(productVariant.product.code);
    }
  }, [productVariant?.product?.code, fetchReviews]);

  if (!productVariant || !productVariant.product) {
    return <p className="text-center mt-10 text-gray-500">Đang tải...</p>;
  }

  // Xử lý chọn loại bìa
  const handleCoverChange = async (coverId: number | string) => {
    if (!productVariant?.product?.code) {
      toast.error("Không tìm thấy mã sản phẩm!");
      return;
    }

    try {
      const response = await getProductCover(
        Number(coverId),
        productVariant.product.code
      );
      const data = response?.data;
      if (data && data.product && data.product.code) {
        setProductVariant(data);
        toast.success("Đã đổi loại bìa thành công!");
      } else {
        throw new Error("Dữ liệu biến thể không hợp lệ.");
      }
    } catch (error) {
      console.error("Lỗi khi đổi bìa:", error);
      toast.error("Không thể đổi sang loại bìa này!");
    }
  };

  // Xử lý thêm vào giỏ hàng
  const handleAddToCart = () => {
    if (!productVariant) {
      toast.error("Không tìm thấy sản phẩm!");
      return;
    }
    if (productVariant.quantity === 0) {
      toast.error("Sản phẩm đã hết hàng!");
      return;
    }
    try {
      addToCart(productVariant, quantity);
      toast.success("Thêm vào giỏ hàng thành công!");
      setTimeout(() => navigate("/shop-cart"), 1000);
    } catch (error) {
      console.error("Lỗi khi thêm vào giỏ hàng:", error);
      toast.error("Đã có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng!");
    }
  };

  // Xử lý thêm đánh giá
  const handleAddReview = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const userId = user?.id;

    // 👉 Kiểm tra nếu chưa đăng nhập
    if (!userId) {
      toast.error("Vui lòng đăng nhập để đánh giá sản phẩm!");
      return;
    }

    if (!newReview.rating || newReview.rating < 1 || newReview.rating > 5) {
      toast.error("Vui lòng chọn rating từ 1 đến 5 sao!");
      return;
    }
    if (!newReview.review.trim()) {
      toast.error("Vui lòng nhập nội dung đánh giá!");
      return;
    }
    if (!productVariant?.product?.code) {
      toast.error("Không tìm thấy sản phẩm!");
      return;
    }

    const reviewData: Partial<IReviews> = {
      rating: newReview.rating,
      review: newReview.review,
      user_id: userId,
      product_code: productVariant.product.code,
      status: 0,
      del_flg: 0,
    };

    console.log("Dữ liệu gửi lên:", reviewData);

    try {
      await addReview(reviewData);
      toast.success("Thêm đánh giá thành công!");
      setNewReview({ rating: 0, review: "" });
      setAcceptTerms(false);
      fetchReviews(productVariant.product.code);
      window.location.reload();
    } catch (error: any) {
      console.error("Lỗi khi thêm đánh giá:", error || error.message);
      toast.error("Thêm đánh giá thất bại! Vui lòng thử lại sau.");
    }
  };

  // Hiển thị loading hoặc lỗi nếu không có sản phẩm
  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Đang tải...</p>;
  }

  if (!productVariant || !productVariant.product) {
    return (
      <p className="text-center mt-10 text-gray-500">Sản phẩm không tồn tại.</p>
    );
  }

  // Lọc reviews theo product_code và del_flg
  const filteredReviews = reviews.filter(
    (rev: IReviews) =>
      rev.del_flg !== 1 && rev.product_code === productVariant.product.code
  );

  // // Lấy danh sách người bình luận (user_id) duy nhất
  // const commentedUsers = Array.from(
  //   new Set(filteredReviews.map((review: any) => review.user_id))
  // );
  console.log(reviews);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <section className="shop-details-section">
        <div className="container">
          <div className="relative overflow-hidden bg-[#e6eff2] py-[80px]">
            <h1 className="text-2xl font-bold text-center">
              Chi Tiết Sản Phẩm
            </h1>
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
                              src={`http://127.0.0.1:8000/storage/${
                                productVariant.product.image ||
                                "default-image.jpg"
                              }`}
                              alt={productVariant.product.title || "Sản phẩm"}
                              className="border border-gray-300 p-3 shadow-md hover:shadow-lg transition rounded-xl object-cover w-full"
                            />
                          </div>
                        </div>
                        {productVariant.product.images?.map((img, index) => (
                          <div
                            key={index}
                            id={`thumb${index + 2}`}
                            className="tab-pane fade"
                          >
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
                      <ul className="nav flex gap-2 mt-4">
                        <li className="nav-item">
                          <a
                            href="#thumb1"
                            data-bs-toggle="tab"
                            className="nav-link active"
                          >
                            <img
                              src={`http://127.0.0.1:8000/storage/${
                                productVariant.product.image ||
                                "default-image.jpg"
                              }`}
                              alt="Ảnh chính"
                              className="w-20 h-20 object-cover rounded-lg border border-gray-300 p-1"
                            />
                          </a>
                        </li>
                        {productVariant.product.images?.map((img, index) => (
                          <li key={index} className="nav-item">
                            <a
                              href={`#thumb${index + 2}`}
                              data-bs-toggle="tab"
                              className="nav-link"
                            >
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
                        <h2 className="text-4xl font-semibold">
                          {productVariant.product.title || "Không có tiêu đề"}
                        </h2>
                        <h5
                          className={`text-xl font-semibold ${
                            productVariant.quantity === 0
                              ? "text-red-500"
                              : "text-[#57C600]"
                          }`}
                        >
                          {productVariant.quantity === 0
                            ? "Hết hàng"
                            : "Còn hàng"}
                        </h5>
                      </div>
                      <div className="star flex items-center gap-1 mt-2">
                        {Array.from({ length: 5 }, (_, i) => (
                          <i
                            key={i}
                            className={`fas fa-star ${
                              i < 4 ? "text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-gray-500">
                          ({filteredReviews.length} Đánh giá)
                        </span>
                      </div>
                      <p className="mt-3 text-gray-600">
                        {productVariant.product.description || "Chưa có mô tả."}
                      </p>
                      <div className="price-list mt-4">
                        <h3 className="text-2xl font-bold text-gray-800">
                          Giá:{" "}
                          {Math.round(
                            productVariant.promotion &&
                              productVariant.promotion > 0
                              ? productVariant.promotion
                              : productVariant.price
                          ).toLocaleString()}{" "}
                          ₫
                        </h3>
                        <h5 className="font-semibold text-lg mt-2">
                          Số lượng còn lại: {productVariant.quantity}
                        </h5>
                        <div className="space-x-2 mt-3">
                          {covers.map((cover: ICover, index: number) => (
                            <button
                              key={index}
                              onClick={() => handleCoverChange(cover.id)}
                              className={`px-4 py-2 rounded-full border transition-all duration-200 ease-in-out ${
                                productVariant.cover === cover.type
                                  ? "bg-blue-500 text-white border-blue-500 shadow-md"
                                  : "bg-white text-gray-800 hover:bg-blue-100 hover:border-blue-400"
                              }`}
                            >
                              {cover.type}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="cart-wrapper mt-4">
                        <div className="quantity-basket flex items-center gap-3">
                          <p className="qty flex items-center">
                            <button
                              className="qtyminus px-3 py-1 bg-gray-200 rounded-l"
                              onClick={() =>
                                setQuantity((q) => Math.max(1, q - 1))
                              }
                              disabled={quantity <= 1}
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
                                  Math.min(
                                    productVariant.quantity,
                                    Math.max(1, Number(e.target.value))
                                  )
                                )
                              }
                              className="w-12 text-center border-gray-300 rounded-none"
                            />
                            <button
                              className="qtyplus px-3 py-1 bg-gray-200 rounded-r"
                              onClick={() =>
                                setQuantity((q) =>
                                  Math.min(productVariant.quantity, q + 1)
                                )
                              }
                              disabled={quantity >= productVariant.quantity}
                            >
                              +
                            </button>
                          </p>
                          <button
                            onClick={handleAddToCart}
                            disabled={productVariant.quantity === 0}
                            className={`theme-btn flex items-center gap-2 px-4 py-2 rounded ${
                              productVariant.quantity === 0
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-blue-500 hover:bg-blue-600 text-white"
                            }`}
                          >
                            <i className="fa-solid fa-basket-shopping" />
                            Thêm vào giỏ hàng
                          </button>
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
                        {/* <button
                          // disabled={productVariant.product.status !== 1}
                          onClick={handleAddToCart}
                          className="theme-btn"
                        >
                          <i className="fa-solid fa-basket-shopping" /> Thêm vào giỏ hàng
                        </button> */}
                        {productVariant.quantity === 0 ? (
                          <button
                            disabled={
                              productVariant.product.status === "out_stock"
                            }
                            onClick={handleAddToCart}
                            className="theme-btn"
                          >
                            <i className="fa-solid fa-basket-shopping" /> Thêm
                            vào giỏ hàng
                          </button>
                        ) : (
                          <button
                            // disabled={productVariant.product.status !== 1}
                            onClick={handleAddToCart}
                            className="theme-btn"
                          >
                            <i className="fa-solid fa-basket-shopping" /> Thêm
                            vào giỏ hàng
                          </button>
                        )}
                      </div>
                      <div className="category-box mt-4">
                        <div className="category-list grid grid-cols-3 gap-4">
                          <ul>
                            <li>
                              <span>Code:</span>{" "}
                              {productVariant.product.code || "N/A"}
                            </li>
                            <li>
                              <span>Danh mục:</span>{" "}
                              {productVariant.product.category || "N/A"}
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <span>Loại bìa:</span>{" "}
                              {productVariant.cover || "N/A"}
                            </li>
                            <li>
                              <span>Số trang:</span> 330
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <span>Ngôn ngữ:</span>{" "}
                              {productVariant.product.language || "N/A"}
                            </li>
                            <li>
                              <span>Năm sản xuất:</span> 2021
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="box-check mt-4">
                        <div className="check-list grid grid-cols-2 gap-4">
                          <ul>
                            <li>
                              <i className="fa-solid fa-check text-green-500 mr-2" />{" "}
                              Miễn phí vận chuyển cho đơn hàng từ 500.000₫
                            </li>
                            <li>
                              <i className="fa-solid fa-check text-green-500 mr-2" />{" "}
                              Hỗ trợ đổi trả trong 30 ngày nếu lỗi từ nhà sản
                              xuất
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <i className="fa-solid fa-check text-green-500 mr-2" />{" "}
                              Ưu đãi hấp dẫn: Giảm đến 30% cho khách hàng mới
                            </li>
                            <li>
                              <i className="fa-solid fa-check text-green-500 mr-2" />{" "}
                              Thanh toán an toàn – Đảm bảo bảo mật thông tin
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="single-tab section-padding pb-0"
                    style={{
                      maxWidth: "100%",
                      width: "100%",
                      padding: "0 15px",
                    }}
                  >
                    <ul className="nav mb-5 flex border-b" role="tablist">
                      <li className="nav-item" role="presentation">
                        <a
                          href="#description"
                          data-bs-toggle="tab"
                          className="nav-link ps-0 active"
                          aria-selected="true"
                          role="tab"
                        >
                          <h6>Mô tả</h6>
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          href="#additional"
                          data-bs-toggle="tab"
                          className="nav-link"
                          aria-selected="false"
                          role="tab"
                        >
                          <h6>Thông tin bổ sung</h6>
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          href="#review"
                          data-bs-toggle="tab"
                          className="nav-link"
                          aria-selected="false"
                          role="tab"
                        >
                          <h6>Đánh giá ({reviews.length})</h6>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div
                        id="description"
                        className="tab-pane fade show active"
                        role="tabpanel"
                      >
                        <div className="description-items">
                          <p className="text-gray-600">
                            {productVariant.product.description ||
                              "Chưa có mô tả chi tiết cho sản phẩm này."}
                          </p>
                        </div>
                      </div>
                      <div
                        id="additional"
                        className="tab-pane fade"
                        role="tabpanel"
                      >
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <tbody>
                              <tr>
                                <td className="text-1 font-semibold">
                                  Tình trạng
                                </td>
                                <td className="text-2">
                                  {productVariant.quantity > 0
                                    ? "Còn hàng"
                                    : "Hết hàng"}
                                </td>
                              </tr>
                              <tr>
                                <td className="text-1 font-semibold">
                                  Danh mục
                                </td>
                                <td className="text-2">
                                  {productVariant.product.category || "N/A"}
                                </td>
                              </tr>
                              <tr>
                                <td className="text-1 font-semibold">
                                  Ngày xuất bản
                                </td>
                                <td className="text-2">2022-10-24</td>
                              </tr>
                              <tr>
                                <td className="text-1 font-semibold">
                                  Số trang
                                </td>
                                <td className="text-2">330</td>
                              </tr>
                              <tr>
                                <td className="text-1 font-semibold">
                                  Loại bìa
                                </td>
                                <td className="text-2">
                                  {productVariant.cover || "N/A"}
                                </td>
                              </tr>
                              <tr>
                                <td className="text-1 font-semibold">
                                  Quốc gia
                                </td>
                                <td className="text-2">United States</td>
                              </tr>
                              <tr>
                                <td className="text-1 font-semibold">
                                  Ngôn ngữ
                                </td>
                                <td className="text-2">
                                  {productVariant.product.language || "N/A"}
                                </td>
                              </tr>
                              <tr>
                                <td className="text-1 font-semibold">
                                  Kích thước
                                </td>
                                <td className="text-2">30 × 32 × 46 Inches</td>
                              </tr>
                              <tr>
                                <td className="text-1 font-semibold">
                                  Trọng lượng
                                </td>
                                <td className="text-2">2.5 Pounds</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div
                        id="review"
                        className="tab-pane fade"
                        role="tabpanel"
                      >
                        <div className="review-items">
                          {/* Hiển thị danh sách người bình luận */}
                          {/* <div className="mb-5">
                            <h4 className="text-xl font-semibold mb-3">
                              Danh sách người đã bình luận:
                            </h4>
                            <ul className="list-disc pl-5">
                              {commentedUsers.map((user, index) => (
                                <li key={index} className="text-gray-600">
                                  {username || "Ẩn danh"}
                                </li>
                              ))}
                            </ul>
                          </div> */}

                          {/* Hiển thị danh sách đánh giá */}
                          {reviews.map((rev: IReviews, index: number) => (
                            <div
                              key={index}
                              className="review-wrap-area flex gap-4 mb-4 border-b pb-4"
                            >
                              {/* <div className="review-thumb">
                                  <img
                                    src={
                                      rev.user_avatar ||
                                      "https://via.placeholder.com/50"
                                    }
                                    alt={rev.user_id || "Ẩn danh"}
                                    className="w-12 h-12 rounded-full object-cover"
                                  />
                                </div> */}
                              <div className="review-content flex-1">
                                <div className="head-area flex flex-wrap gap-2 items-center justify-between">
                                  <div className="cont">
                                    <h5 className="font-semibold">
                                      {rev.username || "Ẩn danh"}
                                    </h5>
                                    <span className="text-gray-500 text-sm">
                                      {rev.created_at}
                                    </span>
                                  </div>
                                  <div className="star">
                                    {Array.from({ length: 5 }, (_, i) => (
                                      <i
                                        key={i}
                                        className={`fa${
                                          i < rev.rating ? "-solid" : "-regular"
                                        } fa-star text-yellow-400`}
                                      />
                                    ))}
                                  </div>
                                </div>
                                <p className="mt-3 text-gray-600">
                                  {rev.review}
                                </p>
                              </div>
                            </div>
                          ))}
                          {reviews.length === 0 && (
                            <p className="text-gray-500">
                              Chưa có đánh giá nào cho sản phẩm này.
                            </p>
                          )}
                          <div className="review-title mt-5 py-5 mb-5">
                            <h4 className="text-xl font-semibold">
                              Đánh giá của bạn
                            </h4>
                            <div className="rate-now flex items-center gap-3 mt-3">
                              <p className="font-medium">Rating của bạn:</p>
                              <div className="star">
                                {Array.from({ length: 5 }, (_, i) => (
                                  <i
                                    key={i}
                                    className={`fa${
                                      i < newReview.rating
                                        ? "-solid"
                                        : "-regular"
                                    } fa-star text-yellow-400 cursor-pointer`}
                                    onClick={() =>
                                      setNewReview({
                                        ...newReview,
                                        rating: i + 1,
                                      })
                                    }
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          {productVariant?.product?.code && (
                            <div className="review-form">
                              <form
                                onSubmit={handleAddReview}
                                id="contact-form"
                                method="POST"
                              >
                                <div className="grid grid-cols-1 gap-4">
                                  <div>
                                    <div className="form-clt">
                                      <label className="block mb-1 font-medium">
                                        Nội dung đánh giá{" "}
                                        <span className="text-red-500">*</span>
                                      </label>
                                      <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Viết nội dung đánh giá"
                                        value={newReview.review}
                                        onChange={(e) =>
                                          setNewReview({
                                            ...newReview,
                                            review: e.target.value,
                                          })
                                        }
                                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                                      ></textarea>
                                    </div>
                                  </div>
                                  <div>
                                    <button
                                      type="submit"
                                      className="theme-btn px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
                                    >
                                      Gửi đánh giá
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          )}
                        </div>
                      </div>
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
