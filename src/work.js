import React from 'react';
import prfImg from './images/work-1.jpg';
import pfPhoto from './images/work-2.jpg';
import rkImg from './images/work-3.jpg';
import rkImg1 from './images/work-4.jpg';
import rkImg2 from './images/work-5.jpg';
import rkImg3 from './images/work-6.jpg';
import rkImg4 from './images/work-7.jpg';
import rkImg5 from './images/work-8.jpg';
import rkImg6 from './images/work-9.jpg';

import { Link } from 'react-router-dom';

function Workpage(){
    return(
        <>
  <title>Pretty - Free Bootstrap 4 Template by Colorlib</title>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css" />
  <link rel="stylesheet" href="css/animate.css" />
  <link rel="stylesheet" href="css/owl.carousel.min.css" />
  <link rel="stylesheet" href="css/owl.theme.default.min.css" />
  <link rel="stylesheet" href="css/magnific-popup.css" />
  <link rel="stylesheet" href="css/aos.css" />
  <link rel="stylesheet" href="css/ionicons.min.css" />
  <link rel="stylesheet" href="css/bootstrap-datepicker.css" />
  <link rel="stylesheet" href="css/jquery.timepicker.css" />
  <link rel="stylesheet" href="css/flaticon.css" />
  <link rel="stylesheet" href="css/icomoon.css" />
  <link rel="stylesheet" href="css/style.css" />
  <div
    className="hero-wrap js-fullheight"
    style={{backgroundImage: `url(${require('./images/photo10.jpg')})`}}
    data-stellar-background-ratio="0.5"
  >
    <div className="overlay" />
    <div className="container">
      <div
        className="row no-gutters slider-text js-fullheight align-items-center justify-content-center"
        data-scrollax-parent="true"
      >
        <div
          className="col-md-8 ftco-animate text-center"
          data-scrollax=" properties: { translateY: '70%' }"
        >
          <div className="icon">
            <a href="index.html" className="logo">
              <span className="flaticon-flower" />
              <h1>Pretty</h1>
            </a>
          </div>
          <h1
            className="mb-3 mt-5 bread"
            data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
          >
            Work
          </h1>
          <p
            className="breadcrumbs"
            data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
          >
            <span className="mr-2">
              <a href="index.html">Home</a>
            </span>{" "}
            <span>Work</span>
          </p>
        </div>
      </div>
    </div>
  </div>
  <nav
    className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    id="ftco-navbar"
  >
    <div className="container">
      <a className="navbar-brand" href="index.html">
        Pretty
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="oi oi-menu" /> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
            <li className="nav-item"><Link to="/service" className="nav-link">Services</Link></li>
            <li className="nav-item active"><Link to="/work" className="nav-link">Work</Link></li>
            <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </div>
    </div>
  </nav>
  {/* END nav */}
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 heading-section text-center ftco-animate">
          <h2 className="mb-4">Our Work</h2>
          <p className="work-category">
            <span className="px-2">
              <a href="#" className="active">
                All
              </a>
            </span>
            <span className="px-2">
              <a href="#">Make Up</a>
            </span>
            <span className="px-2">
              <a href="#">Massage</a>
            </span>
            <span className="px-2">
              <a href="#">Facial</a>
            </span>
            <span className="px-2">
              <a href="#">Spa</a>
            </span>
            <span className="px-2">
              <a href="#">Hair</a>
            </span>
            <span className="px-2">
              <a href="#">Nail</a>
            </span>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 ftco-animate">
          <a href="#" className="work-entry">
            <img
              src={pfPhoto}
              className="img-fluid"
              alt="Colorlib Template"
            />
            <div className="info d-flex align-items-center">
              <div>
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-search" />
                </div>
                <h3>Lips Makeover</h3>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 ftco-animate">
          <a href="#" className="work-entry">
            <img
              src={prfImg}
              className="img-fluid"
              alt="Colorlib Template"
            />
            <div className="info d-flex align-items-center">
              <div>
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-search" />
                </div>
                <h3>Hair Style</h3>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 ftco-animate">
          <a href="#" className="work-entry">
            <img
              src={rkImg}
              className="img-fluid"
              alt="Colorlib Template"
            />
            <div className="info d-flex align-items-center">
              <div>
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-search" />
                </div>
                <h3>Makeup</h3>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 ftco-animate">
          <a href="#" className="work-entry">
            <img
              src={rkImg1}
              className="img-fluid"
              alt="Colorlib Template"
            />
            <div className="info d-flex align-items-center">
              <div>
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-search" />
                </div>
                <h3>Lips Makeover</h3>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 ftco-animate">
          <a href="#" className="work-entry">
            <img
              src={rkImg2}
              className="img-fluid"
              alt="Colorlib Template"
            />
            <div className="info d-flex align-items-center">
              <div>
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-search" />
                </div>
                <h3>Hair Style</h3>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 ftco-animate">
          <a href="#" className="work-entry">
            <img
              src={rkImg3}
              className="img-fluid"
              alt="Colorlib Template"
            />
            <div className="info d-flex align-items-center">
              <div>
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-search" />
                </div>
                <h3>Makeup</h3>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 ftco-animate">
          <a href="#" className="work-entry">
            <img
              src={rkImg4}
              className="img-fluid"
              alt="Colorlib Template"
            />
            <div className="info d-flex align-items-center">
              <div>
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-search" />
                </div>
                <h3>Lips Makeover</h3>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 ftco-animate">
          <a href="#" className="work-entry">
            <img
              src={rkImg5}
              className="img-fluid"
              alt="Colorlib Template"
            />
            <div className="info d-flex align-items-center">
              <div>
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-search" />
                </div>
                <h3>Hair Style</h3>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 ftco-animate">
          <a href="#" className="work-entry">
            <img
              src={rkImg6}
              className="img-fluid"
              alt="Colorlib Template"
            />
            <div className="info d-flex align-items-center">
              <div>
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-search" />
                </div>
                <h3>Makeup</h3>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col text-center">
          <div className="block-27">
            <ul>
              <li>
                <a href="#">&lt;</a>
              </li>
              <li className="active">
                <span>1</span>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">&gt;</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="ftco-footer ftco-section img">
    <div className="overlay" />
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-3">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">About Us</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
              <li className="ftco-animate">
                <a href="#">
                  <span className="icon-twitter" />
                </a>
              </li>
              <li className="ftco-animate">
                <a href="#">
                  <span className="icon-facebook" />
                </a>
              </li>
              <li className="ftco-animate">
                <a href="#">
                  <span className="icon-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Recent Blog</h2>
            <div className="block-21 mb-4 d-flex">
              <a
                className="blog-img mr-4"
                style={{ backgroundImage: "url(images/image_1.jpg)" }}
              />
              <div className="text">
                <h3 className="heading">
                  <a href="#">
                    Even the all-powerful Pointing has no control about
                  </a>
                </h3>
                <div className="meta">
                  <div>
                    <a href="#">
                      <span className="icon-calendar" /> July 12, 2018
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <span className="icon-person" /> Admin
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <span className="icon-chat" /> 19
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-21 mb-4 d-flex">
              <a
                className="blog-img mr-4"
                style={{ backgroundImage: "url(images/image_2.jpg)" }}
              />
              <div className="text">
                <h3 className="heading">
                  <a href="#">
                    Even the all-powerful Pointing has no control about
                  </a>
                </h3>
                <div className="meta">
                  <div>
                    <a href="#">
                      <span className="icon-calendar" /> July 12, 2018
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <span className="icon-person" /> Admin
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <span className="icon-chat" /> 19
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="ftco-footer-widget mb-4 ml-md-4">
            <h2 className="ftco-heading-2">Spa Center</h2>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="py-2 d-block">
                  Body Care
                </a>
              </li>
              <li>
                <a href="#" className="py-2 d-block">
                  Massage
                </a>
              </li>
              <li>
                <a href="#" className="py-2 d-block">
                  Hydrotherapy
                </a>
              </li>
              <li>
                <a href="#" className="py-2 d-block">
                  Yoga
                </a>
              </li>
              <li>
                <a href="#" className="py-2 d-block">
                  Sauna
                </a>
              </li>
              <li>
                <a href="#" className="py-2 d-block">
                  Aquazone
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Have a Questions?</h2>
            <div className="block-23 mb-3">
              <ul>
                <li>
                  <span className="icon icon-map-marker" />
                  <span className="text">
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </span>
                </li>
                <li>
                  <a href="#">
                    <span className="icon icon-phone" />
                    <span className="text">+2 392 3929 210</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon icon-envelope" />
                    <span className="text">info@yourdomain.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with{" "}
            <i className="icon-heart" aria-hidden="true" /> by{" "}
            <a href="https://www.datadna.in/" target="_blank">
              Data DNA
            </a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </div>
  </footer>
  {/* loader */}
  <div id="ftco-loader" className="show fullscreen">
    <svg className="circular" width="48px" height="48px">
      <circle
        className="path-bg"
        cx={24}
        cy={24}
        r={22}
        fill="none"
        strokeWidth={4}
        stroke="#eeeeee"
      />
      <circle
        className="path"
        cx={24}
        cy={24}
        r={22}
        fill="none"
        strokeWidth={4}
        strokeMiterlimit={10}
        stroke="#F96D00"
      />
    </svg>
  </div>
</>

    );
}
export default Workpage;