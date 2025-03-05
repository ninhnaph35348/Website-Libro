import planeShape from "../../assets/img/plane-shape.png";
import visaLogo from "../../assets/img/visa-logo.png";
import mastercard from "../../assets/img/mastercard.png";
import payoneer from "../../assets/img/payoneer.png";
import affirm from "../../assets/img/affirm.png";
import whiteLogo from "../../assets/img/logo/white-logo.svg";
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
                            <p>Call Us 7/24</p>
                            <h3>
                                <a href="tel:+2085550112">+208-555-0112</a>
                            </h3>
                        </div>
                    </div>
                    <div className="contact-info-items wow fadeInUp" data-wow-delay=".4s">
                        <div className="icon">
                            <i className="icon-icon-6" />
                        </div>
                        <div className="content">
                            <p>Make a Quote</p>
                            <h3>
                                <a href="mailto:example@gmail.com">example@gmail.com</a>
                            </h3>
                        </div>
                    </div>
                    <div className="contact-info-items wow fadeInUp" data-wow-delay=".6s">
                        <div className="icon">
                            <i className="icon-icon-7" />
                        </div>
                        <div className="content">
                            <p>Opening Hour</p>
                            <h3>
                                Sunday - Fri: 9 aM - 6 pM
                            </h3>
                        </div>
                    </div>
                    <div className="contact-info-items wow fadeInUp" data-wow-delay=".8s">
                        <div className="icon">
                            <i className="icon-icon-8" />
                        </div>
                        <div className="content">
                            <p>Location</p>
                            <h3>
                                4517 Washington ave.
                            </h3>
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
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <a href="index.html">
                                        <img src={whiteLogo} alt="logo-img" />
                                    </a>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur
                                        lacinia mollis
                                    </p>
                                    <div className="social-icon d-flex align-items-center">
                                        <a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a>
                                        <a href="https://x.com/"><i className="fab fa-twitter" /></a>
                                        <a href="https://www.youtube.com/"><i className="fab fa-youtube" /></a>
                                        <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Costumers Support</h3>
                                </div>
                                <ul className="list-area">
                                    <li>
                                        <a href="shop.html">
                                            <i className="fa-solid fa-chevrons-right" />
                                            Store List
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contact.html">
                                            <i className="fa-solid fa-chevrons-right" />
                                            Opening Hours
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contact.html">
                                            <i className="fa-solid fa-chevrons-right" />
                                            Contact Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contact.html">
                                            <i className="fa-solid fa-chevrons-right" />
                                            Return Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".6s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Categories</h3>
                                </div>
                                <ul className="list-area">
                                    <li>
                                        <a href="shop.html">
                                            <i className="fa-solid fa-chevrons-right" />
                                            Novel Books
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop.html">
                                            <i className="fa-solid fa-chevrons-right" />
                                            Poetry Books
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contact.html">
                                            <i className="fa-solid fa-chevrons-right" />
                                            Political Books
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contact.html">
                                            <i className="fa-solid fa-chevrons-right" />
                                            History Books
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Newsletter</h3>
                                </div>
                                <div className="footer-content">
                                    <p>Sign up to searing weekly newsletter to get the latest updates.</p>
                                    <div className="footer-input">
                                        <input type="email" id="email2" placeholder="Enter Email Address" />
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
            <div className="footer-bottom">
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
            </div>
        </footer>

    )
}

export default Footer