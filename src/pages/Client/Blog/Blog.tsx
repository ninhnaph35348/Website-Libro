import { Link } from "react-router-dom";
import book1 from "../../../assets/img/hero/book1.png";
import book2 from "../../../assets/img/hero/book2.png";
import newsImg05 from "../../../assets/img/news/05.jpg";
import newsImg06 from "../../../assets/img/news/06.jpg";
import newsImg07 from "../../../assets/img/news/07.jpg";
import newsImg08 from "../../../assets/img/news/08.jpg";
import newsImg09 from "../../../assets/img/news/09.jpg";
import newsImg10 from "../../../assets/img/news/10.jpg";
import newsImg11 from "../../../assets/img/news/11.jpg";
import newsImg12 from "../../../assets/img/news/12.jpg";
import newsImg13 from "../../../assets/img/news/13.jpg";
import newsImg14 from "../../../assets/img/news/14.jpg";
import newsImg15 from "../../../assets/img/news/15.jpg";
import newsImg16 from "../../../assets/img/news/16.jpg";
type Props = {};
const Blog = (props: Props) => {
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
            <h1>Blog</h1>
            <div className="page-header">
              <ul
                className="breadcrumb-items wow fadeInUp"
                data-wow-delay=".3s"
              >
                <li>
                  <Link to="/">Trang Chủ</Link>
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i>
                </li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="news-section fix section-padding">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="news-card-items style-2 mt-0">
                <div className="news-image">
                  <img src={newsImg05} alt="img" />
                  <img src={newsImg05} alt="img" />
                  <div className="post-box">Books Store</div>
                </div>
                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fa-light fa-calendar-days"></i>
                      Feb 10, 2024
                    </li>
                    <li>
                      <i className="fa-regular fa-user"></i>
                      By Admin
                    </li>
                  </ul>
                  <h3>
                    <a href="news-details.html">
                      Top 5 Tarot Decks for the Tarot World Summit
                    </a>
                  </h3>
                  <a href="news-details.html" className="theme-btn-2">
                    Read More <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="news-card-items style-2 mt-0">
                <div className="news-image">
                  <img src={newsImg06} alt="img" />
                  <img src={newsImg06} alt="img" />

                  <div className="post-box">Educations</div>
                </div>
                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fa-light fa-calendar-days"></i>
                      Mar 20, 2024
                    </li>
                    <li>
                      <i className="fa-regular fa-user"></i>
                      By Admin
                    </li>
                  </ul>
                  <h3>
                    <a href="news-details.html">
                      Behind the Scenes with Author Victoria Aveyard
                    </a>
                  </h3>
                  <a href="news-details.html" className="theme-btn-2">
                    Read More <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="news-card-items style-2 mt-0">
                <div className="news-image">
                  <img src={newsImg07} alt="img" />
                  <img src={newsImg07} alt="img" />
                  <div className="post-box">Romance</div>
                </div>
                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fa-light fa-calendar-days"></i>
                      Jun 14, 2024
                    </li>
                    <li>
                      <i className="fa-regular fa-user"></i>
                      By Admin
                    </li>
                  </ul>
                  <h3>
                    <a href="news-details.html">
                      Tiny Emporium: Playful Picks for Kids' Delightful Days.
                    </a>
                  </h3>
                  <a href="news-details.html" className="theme-btn-2">
                    Read More <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="news-card-items style-2 mt-0">
                <div className="news-image">
                  <img src={newsImg08} alt="img" />
                  <img src={newsImg08} alt="img" />
                  <div className="post-box">Activities</div>
                </div>
                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fa-light fa-calendar-days"></i>
                      Mar 12, 2024
                    </li>
                    <li>
                      <i className="fa-regular fa-user"></i>
                      By Admin
                    </li>
                  </ul>
                  <h3>
                    <a href="news-details.html">
                      Eu parturient dictumst fames quam tempor
                    </a>
                  </h3>
                  <a href="news-details.html" className="theme-btn-2">
                    Read More <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="news-card-items style-2 mt-0">
                <div className="news-image">
                  <img src={newsImg09} alt="img" />
                  <img src={newsImg09} alt="img" />
                  <div className="post-box">Books Store</div>
                </div>
                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fa-light fa-calendar-days"></i>
                      Feb 10, 2024
                    </li>
                    <li>
                      <i className="fa-regular fa-user"></i>
                      By Admin
                    </li>
                  </ul>
                  <h3>
                    <a href="news-details.html">
                      How to Keep Children Safe Online In Simple Steps
                    </a>
                  </h3>
                  <a href="news-details.html" className="theme-btn-2">
                    Read More <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="news-card-items style-2 mt-0">
                <div className="news-image">
                  <img src={newsImg10} alt="img" />
                  <img src={newsImg10} alt="img" />
                  <div className="post-box">Activities</div>
                </div>
                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fa-light fa-calendar-days"></i>
                      Mar 20, 2024
                    </li>
                    <li>
                      <i className="fa-regular fa-user"></i>
                      By Admin
                    </li>
                  </ul>
                  <h3>
                    <a href="news-details.html">
                      That jerk Form Finance really threw me
                    </a>
                  </h3>
                  <a href="news-details.html" className="theme-btn-2">
                    Read More <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="news-card-items style-2 mt-0">
                <div className="news-image">
                  <img src={newsImg11} alt="img" />
                  <img src={newsImg11} alt="img" />
                  <div className="post-box">Adventure</div>
                </div>
                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fa-light fa-calendar-days"></i>
                      Jun 14, 2024
                    </li>
                    <li>
                      <i className="fa-regular fa-user"></i>
                      By Admin
                    </li>
                  </ul>
                  <h3>
                    <a href="news-details.html">
                      Students Intelligence in Education Building Resilient
                    </a>
                  </h3>
                  <a href="news-details.html" className="theme-btn-2">
                    Read More <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="news-card-items style-2 mt-0">
                <div className="news-image">
                  <img src={newsImg12} alt="img" />
                  <img src={newsImg12} alt="img" />
                  <div className="post-box">Books Store</div>
                </div>
                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fa-light fa-calendar-days"></i>
                      Mar 12, 2024
                    </li>
                    <li>
                      <i className="fa-regular fa-user"></i>
                      By Admin
                    </li>
                  </ul>
                  <h3>
                    <a href="news-details.html">
                      From without content style without{" "}
                    </a>
                  </h3>
                  <a href="news-details.html" className="theme-btn-2">
                    Read More <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="news-card-items style-2 mt-0">
                <div className="news-image">
                  <img src={newsImg13} alt="img" />
                  <img src={newsImg13} alt="img" />
                  <div className="post-box">Romance</div>
                </div>
                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fa-light fa-calendar-days"></i>
                      Feb 10, 2024
                    </li>
                    <li>
                      <i className="fa-regular fa-user"></i>
                      By Admin
                    </li>
                  </ul>
                  <h3>
                    <a href="news-details.html">
                      All Inclusive Ultimate Circle Island Day with Lunch
                    </a>
                  </h3>
                  <a href="news-details.html" className="theme-btn-2">
                    Read More <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="news-card-items style-2 mt-0">
                <div className="news-image">
                  <img src={newsImg14} alt="img" />
                  <img src={newsImg14} alt="img" />
                  <div className="post-box">Adnenture</div>
                </div>
                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fa-light fa-calendar-days"></i>
                      Mar 20, 2024
                    </li>
                    <li>
                      <i className="fa-regular fa-user"></i>
                      By Admin
                    </li>
                  </ul>
                  <h3>
                    <a href="news-details.html">
                      Playful Picks Paradise: Kids' Essentials with Dash.
                    </a>
                  </h3>
                  <a href="news-details.html" className="theme-btn-2">
                    Read More <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="news-card-items style-2 mt-0">
                <div className="news-image">
                  <img src={newsImg15} alt="img" />
                  <img src={newsImg15} alt="img" />
                  <div className="post-box">Educations</div>
                </div>
                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fa-light fa-calendar-days"></i>
                      Jun 14, 2024
                    </li>
                    <li>
                      <i className="fa-regular fa-user"></i>
                      By Admin
                    </li>
                  </ul>
                  <h3>
                    <a href="news-details.html">
                      Tiny Emporium: Playful Picks for Kids' Delightful Days.
                    </a>
                  </h3>
                  <a href="news-details.html" className="theme-btn-2">
                    Read More <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="news-card-items style-2 mt-0">
                <div className="news-image">
                  <img src={newsImg16} alt="img" />
                  <img src={newsImg16} alt="img" />
                  <div className="post-box">Books Store</div>
                </div>
                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fa-light fa-calendar-days"></i>
                      Mar 12, 2024
                    </li>
                    <li>
                      <i className="fa-regular fa-user"></i>
                      By Admin
                    </li>
                  </ul>
                  <h3>
                    <a href="news-details.html">
                      Top 10 Tarot Decks for the Tarot World Summit
                    </a>
                  </h3>
                  <a href="news-details.html" className="theme-btn-2">
                    Read More <i className="fa-regular fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="page-nav-wrap text-center wow fadeInUp"
            data-wow-delay=".3s"
          >
            <ul>
              <li>
                <a className="previous" href="news-grid.html">
                  Previous
                </a>
              </li>
              <li>
                <a className="page-numbers" href="news-grid.html">
                  1
                </a>
              </li>
              <li>
                <a className="page-numbers" href="news-grid.html">
                  2
                </a>
              </li>
              <li>
                <a className="page-numbers" href="news-grid.html">
                  3
                </a>
              </li>
              <li>
                <a className="page-numbers" href="news-grid.html">
                  ...
                </a>
              </li>
              <li>
                <a className="next" href="news-grid.html">
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
