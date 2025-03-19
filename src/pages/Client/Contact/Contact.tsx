import React from "react";
import book1 from "../../../assets/img/hero/book1.png";
import book2 from "../../../assets/img/hero/book2.png";
import contact from "../../../assets/img/contact.jpg";

import { Link } from "react-router-dom";

type Props = {};
const Contact = (props: Props) => {
  return (
    <>
      <div className="breadcrumb-wrapper">
        <div className="book1">
          <img src={book1} alt="book" />
        </div>
        <div className="book2">
          <img src={book2} alt="book" />
        </div>
        <div className="container">
          <div className="page-heading">
            <h1>Contact Us</h1>
            <div className="page-header">
              <ul
                className="breadcrumb-items wow fadeInUp"
                data-wow-delay=".3s"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i>
                </li>
                <li>
                  <Link to="/contact">Contacts</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="contact-section fix section-padding">
        <div className="container">
          <div className="contact-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-4">
                <div className="contact-left-items">
                  <div className="contact-info-area-2">
                    <div className="contact-info-items mb-4">
                      <div className="icon">
                        <i className="icon-icon-10"></i>
                      </div>
                      <div className="content">
                        <p>Call Us 7/24</p>
                        <h3>
                          <a href="tel:+2085550112">+208-555-0112</a>
                        </h3>
                      </div>
                    </div>
                    <div className="contact-info-items mb-4">
                      <div className="icon">
                        <i className="icon-icon-11"></i>
                      </div>
                      <div className="content">
                        <p>Make a Quote</p>
                        <h3>
                          <a href="mailto:example@gmail.com">
                            example@gmail.com
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="contact-info-items border-none">
                      <div className="icon">
                        <i className="icon-icon-12"></i>
                      </div>
                      <div className="content">
                        <p>Location</p>
                        <h3>4517 Washington ave.</h3>
                      </div>
                    </div>
                  </div>
                  <div className="video-image">
                    <img src={contact} alt="img" />
                    <div className="video-box">
                      <a
                        href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                        className="video-btn ripple video-popup"
                      >
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="contact-content">
                  <h2>Ready to Get Started?</h2>
                  <p>
                    Nunc tincidunt cursus lectus ac semper. Aenean ullamcorper
                    quis arcu molestie consequat. Interdum et malesuada fames ac
                    ante ipsum primis in faucibus. Ut nec lobortis elit, eu
                    ultrices justo. Fusce auctor erat est, non fringilla nibh
                    tempus quis. Aenean dignissim
                  </p>
                  <form
                    action="https://gramentheme.com/html/bookle/contact.php"
                    id="contact-form"
                    method="POST"
                    className="contact-form-items"
                  >
                    <div className="row g-4">
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="form-clt">
                          <span>Your name*</span>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="form-clt">
                          <span>Your Email*</span>
                          <input
                            type="text"
                            name="email"
                            id="email123"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <div className="form-clt">
                          <span>Write Message*</span>
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Write Message"
                          ></textarea>
                        </div>
                      </div>
                      <div
                        className="col-lg-7 wow fadeInUp"
                        data-wow-delay=".9s"
                      >
                        <button type="submit" className="theme-btn">
                          Send Message{" "}
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="map-section">
        <div className="map-items">
          <div className="googpemap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9549433996463!2d105.7467681!3d21.0381298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455e940879933%3A0xcf10b34e9f1a03df!2zVHLGsOG7nW5nIENhbyDEkMaw4bujbmcgRlBUIFBvbHl0ZWNobmlj!5e0!3m2!1svi!2s!4v1641984054261!5m2!1svi!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
