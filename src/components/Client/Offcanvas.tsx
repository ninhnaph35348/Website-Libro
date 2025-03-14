
const Offcanvas = () => {
    return (
        // Offcanvas Area start 
        <>
            <div className="fix-area">
                <div className="offcanvas__info">
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <a href="index.html">
                                        <img src="assets/img/logo/black-logo.svg" alt="logo-img" />
                                    </a>
                                </div>
                                <div className="offcanvas__close">
                                    <button>
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            <p className="text d-none d-xl-block">
                                Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a
                                feugiat leo urna eget eros. Duis Aenean a imperdiet risus.
                            </p>
                            <div className="mobile-menu fix mb-3" />
                            <div className="offcanvas__contact">
                                <h4>Contact Info</h4>
                                <ul>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon">
                                            <i className="fal fa-map-marker-alt" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a target="_blank" href="checkout.html">Main Street, Melbourne, Australia</a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-envelope" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a href="mailto:info@example.com"><span className="mailto:info@example.com">info@example.com</span></a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-clock" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a target="_blank" href="checkout.html">Mod-friday, 09am -05pm</a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="far fa-phone" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a href="tel:+11002345909">+11002345909</a>
                                        </div>
                                    </li>
                                </ul>
                                <div className="header-button mt-4">
                                    <a href="contact.html" className="theme-btn text-center">
                                        Get A Quote <i className="fa-solid fa-arrow-right-long" />
                                    </a>
                                </div>
                                <div className="social-icon d-flex align-items-center">
                                    <a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a>
                                    <a href="https://x.com/"><i className="fab fa-twitter" /></a>
                                    <a href="https://www.youtube.com/"><i className="fab fa-youtube" /></a>
                                    <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offcanvas__overlay" />
        </>
    )
}

export default Offcanvas