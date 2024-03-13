import React from 'react';

import { Link } from 'react-router-dom';

function Aboutpage(){

    return (
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
            About
          </h1>
          <p
            className="breadcrumbs"
            data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
          >
            <span className="mr-2">
              <a href="index.html">Home</a>
            </span>{" "}
            <span>About</span>
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
            <li className="nav-item active"><Link to="/about" className="nav-link">About</Link></li>
            <li className="nav-item"><Link to="/service" className="nav-link">Services</Link></li>
            <li className="nav-item"><Link to="/work" className="nav-link">Work</Link></li>
            <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
        </div>
    </div>
  </nav>
  {/* END nav */}
  <section className="ftco-section">
    <div className="container">
      <div className="row d-flex">
        <div className="col-md-6 d-flex ftco-animate">
          <div
            className="img img-about align-self-stretch"
            style={{backgroundImage: `url(${require('./images/image_2.jpg')})`, width: "100%" }}
          />
        </div>
        <div className="col-md-6 pl-md-5 ftco-animate">
          <h2 className="mb-4">Welcome to Pretty A Beauty Salon Website</h2>
          <p>
            The Big Oxmox advised her not to do so, because there were thousands
            of bad Commas, wild Question Marks and devious Semikoli, but the
            Little Blind Text didn’t listen. She packed her seven versalia, put
            her initial into the belt and made herself on the way.
          </p>
          <p>
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            "and" and the Little Blind Text should turn around and return to its
            own, safe country. But nothing the copy said could convince her and
            so it didn’t take long until a few insidious Copy Writers ambushed
            her, made her drunk with Longe and Parole and dragged her into their
            agency, where they abused her for their.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section bg-light">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 heading-section ftco-animate text-center">
          <h2 className="mb-4">Our Beauty Experts</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 d-flex mb-sm-4 ftco-animate">
          <div className="staff">
            <div
              className="img mb-4"
              style={{backgroundImage: `url(${require('./images/person_3.jpg')})`}}
            />
            <div className="info text-center">
              <h3>
                <a href="teacher-single.html">Mellisa Smith</a>
              </h3>
              <span className="position">Stylist</span>
              <div className="text">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 d-flex mb-sm-4 ftco-animate">
          <div className="staff">
            <div
              className="img mb-4"
              style={{backgroundImage: `url(${require('./images/person_4.jpg')})`}}
            />
            <div className="info text-center">
              <h3>
                <a href="teacher-single.html">Marie Mush</a>
              </h3>
              <span className="position">Fashionist</span>
              <div className="text">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 d-flex mb-sm-4 ftco-animate">
          <div className="staff">
            <div
              className="img mb-4"
              style={{backgroundImage: `url(${require('./images/person_2.jpg')})`}}
            />
            <div className="info text-center">
              <h3>
                <a href="teacher-single.html">Ana Jacobson</a>
              </h3>
              <span className="position">Makeup Stylist</span>
              <div className="text">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 d-flex mb-sm-4 ftco-animate">
          <div className="staff">
            <div
              className="img mb-4"
              style={{backgroundImage: `url(${require('./images/person_1.jpg')})`}}
            />
            <div className="info text-center">
              <h3>
                <a href="teacher-single.html">Ivan Dorchsner</a>
              </h3>
              <span className="position">Nail Specialist</span>
              <div className="text">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
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
export default Aboutpage;