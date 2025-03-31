
import book from "../../../assets/img/hero/book.png";
import frame from "../../../assets/img/hero/frame.png";
import frame2 from "../../../assets/img/hero/frame-2.png";
import xstar from "../../../assets/img/hero/xstar.png";
import frameShape from "../../../assets/img/hero/frame-shape.png";
import bgshape from "../../../assets/img/hero/bg-shape.png";
import bgshape2 from "../../../assets/img/hero/bg-shape2.png";
import heroGirl from "../../../assets/img/hero/hero-girl.png";
const Banner = () => {
    return (
        <div className="hero-section hero-1 fix">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-xl-8 col-lg-6">
                        <div className="hero-items">
                            <div className="book-shape">
                                <img src={book} alt="shape-img" />
                            </div>
                            <div className="frame-shape1 float-bob-x">
                                <img src={frame} alt="shape-img" />
                            </div>
                            <div className="frame-shape2 float-bob-y">
                                <img src={frame2} alt="shape-img" />
                            </div>
                            <div className="frame-shape3">
                                <img src={xstar} alt="img" />
                            </div>
                            <div className="frame-shape4 float-bob-x">
                                <img src={frameShape} alt="img" />
                            </div>
                            <div className="bg-shape1">
                                <img src={bgshape} alt="img" />
                            </div>
                            <div className="bg-shape2">
                                <img src={bgshape2} alt="shape-img" />
                            </div>
                            <div className="hero-content">
                                <h6 className="wow fadeInUp" data-wow-delay=".3s">
                                    Giảm giá lên đến 30%
                                </h6>
                                <h1 className="wow fadeInUp" data-wow-delay=".5s">
                                    Nhận sách mới của bạn với giá tốt nhất
                                </h1>
                                <div className="form-clt wow fadeInUp" data-wow-delay=".9s">
                                    <button type="submit" className="theme-btn">
                                        Mua Ngay <i className="fa-solid fa-arrow-right-long"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 col-lg-6">
                        <div className="girl-image">
                            <img className="float-bob-x" src={heroGirl} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner