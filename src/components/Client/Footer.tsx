import planeShape from "../../assets/img/plane-shape.png";
import visaLogo from "../../assets/img/visa-logo.png";
import mastercard from "../../assets/img/mastercard.png";
import payoneer from "../../assets/img/payoneer.png";
import affirm from "../../assets/img/affirm.png";
import whiteLogo from "../../assets/img/logo/white-logo.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer-section footer-bg">
      <div className="container">
        <div className="contact-info-area">
          <div className="contact-info-items wow fadeInUp" data-wow-delay=".2s">
            <div className="icon">
              <i className="icon-icon-5" />
            </div>
            <div className="content">
              <h3>
                <a href="tel:+2085550112">034 565 1932</a>
              </h3>
            </div>
          </div>
          <div className="contact-info-items wow fadeInUp" data-wow-delay=".4s">
            <div className="icon">
              <i className="icon-icon-6" />
            </div>
            <div className="content">
              <h3>
                <a href="mailto:example@gmail.com">libro@gmail.com</a>
              </h3>
            </div>
          </div>
          <div className="contact-info-items wow fadeInUp" data-wow-delay=".8s">
            <div className="icon">
              <i className="icon-icon-8" />
            </div>
            <div className="content">
              <h3>Số 2 Đào Duy Anh, HN</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-widgets-wrapper">
        <div className="plane-shape float-bob-y">
          <img src={planeShape} alt="img" />
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <a href="index.html">
                    <img src={whiteLogo} alt="logo-img" />
                  </a>
                </div>
                <div className="footer-content">
                  <p>
                    Libro.com nhận đặt hàng trực tuyến và giao hàng tận nơi.
                    KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng
                    cũng như tất cả Hệ Thống Libro trên toàn quốc.
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Hỗ trợ khách hàng</h3>
                </div>
                <ul className="list-area">
                  <li>
                    <Link to="/contact">
                      <i className="fa-solid fa-chevrons-right" />
                      Liên Hệ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Tài khoản của tôi</h3>
                </div>
                <ul className="list-area">
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-chevrons-right" />
                      Đăng nhập/Tạo mới tài khoản
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-chevrons-right" />
                      Thay đổi địa chỉ khách hàng
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-chevrons-right" />
                      Chi tiết tài khoản
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-chevrons-right" />
                      Lịch sử mua hàng
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Đăng kí nhận bản tin</h3>
                </div>
                <div className="footer-content">
                  <p>
                    Đăng ký nhận bản tin hàng tuần của searing để nhận được
                    thông tin cập nhật mới nhất.
                  </p>
                  <div className="footer-input">
                    <input
                      type="email"
                      id="email2"
                      placeholder="Nhập địa chỉ email của bạn"
                    />
                    <button className="newsletter-btn" type="submit">
                      <i className="fa-regular fa-paper-plane" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="footer-bottom">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft" data-wow-delay=".3s">
              © All Copyright 2024 by <a href="index.html">Bookle</a>
            </p>
            <ul className="brand-logo wow fadeInRight" data-wow-delay=".5s">
              <li>
                <a href="contact.html">
                  <img src={visaLogo} alt="img" />
                </a>
              </li>
              <li>
                <a href="contact.html">
                  <img src={mastercard} alt="img" />
                </a>
              </li>
              <li>
                <a href="contact.html">
                  <img src={payoneer} alt="img" />
                </a>
              </li>
              <li>
                <a href="contact.html">
                  <img src={affirm} alt="img" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
