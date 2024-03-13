import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homepages.css';
import { Link } from 'react-router-dom';
import './animate.css';
import bgImg from './images/photo1.jpg';
import prfImg from './images/work-1.jpg';
import pfPhoto from './images/work-2.jpg';
import rkImg from './images/work-3.jpg';
import prtImg1 from './images/partner-1.jpg';
import prtImg2 from './images/partner-2.jpg';
import prtImg3 from './images/partner-3.jpg';
import prtImg4 from './images/partner-4.jpg';
import './flaticon/font/flaticon.css';
import $ from 'jquery';

import 'owl.carousel';
import 'magnific-popup';
import  'scrollax';


import 'react-parallax';


const Homepage=()=>{
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAwake, setIsAwake] = useState(false);
  const [isSleep, setIsSleep] = useState(false);

  useEffect(()=>{

    
    // Full height function
    const fullHeight = () => {
      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(() => {
        $('.js-fullheight').css('height', $(window).height());
      });
    };
    fullHeight();

    // Loader function
    const loader = () => {
      setTimeout(() => {
        if ($('#ftco-loader').length > 0) {
          $('#ftco-loader')[0].classList.remove('show');
        }
      }, 1);
    };
    loader();

    // Scrollax initialization
    $.Scrollax();

    // Carousel function
   

    // Mouseover and mouseout event for dropdown
    $('nav .dropdown').mouseover(function(){
      const $this = $(this);
      $this.addClass('show');
      $this.find('> a').attr('aria-expanded', true);
      $this.find('.dropdown-menu').addClass('show');
    }).mouseout(function(){
      const $this = $(this);
      $this.removeClass('show');
      $this.find('> a').attr('aria-expanded', false);
      $this.find('.dropdown-menu').removeClass('show');
    });

    // Dropdown show event
    $('#dropdown04').on('show.bs.dropdown', function () {
      console.log('show');
    });

    // Scroll event
    const scrollWindow = () => {
      $(window).scroll(() => {
        const $w = $(this),
          st = $w.scrollTop(),
          navbar = $('.ftco_navbar'),
          sd = $('.js-scroll-wrap');

        if (st > 750) {
          setIsScrolled(true);
          navbar.addClass('scrolled');
        } else {
          setIsScrolled(false);
          navbar.removeClass('scrolled sleep');
        }

        if (st > 800) {
          setIsAwake(true);
          navbar.addClass('awake');

          if (sd.length > 0) {
            setIsSleep(true);
            sd.addClass('sleep');
          }
        } else {
          setIsAwake(false);
          navbar.removeClass('awake');

          setIsSleep(false);
          sd.removeClass('sleep');
        }
      });
    };
    scrollWindow();

    // Mobile detection
    const isMobile = {
      Android: () => navigator.userAgent.match(/Android/i),
      BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
      iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
      Opera: () => navigator.userAgent.match(/Opera Mini/i),
      Windows: () => navigator.userAgent.match(/IEMobile/i),
      any: () => (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()),
    };

   
   

    // One page navigation function
    const OnePageNav = () => {
      $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
        e.preventDefault();
        const hash = this.hash,
              navToggler = $('.navbar-toggler');
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 700, 'easeInOutExpo', () => {
          window.location.hash = hash;
        });
        if (navToggler.is(':visible')) {
          navToggler.click();
        }
      });
      $('body').on('activate.bs.scrollspy', function () {
        console.log('nice');
      });
    };
    OnePageNav();

    // Magnific popup initialization
    $('.image-popup').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: 'mfp-no-margins mfp-with-zoom',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      },
      image: {
        verticalFit: true
      },
      zoom: {
        enabled: true,
        duration: 300
      }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });

  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('.number');
          const speed = 200; // Adjust the speed of counting here

          counters.forEach(counter => {
            const updateCount = () => {
              const target = +counter.getAttribute('data-number');
              const count = +counter.innerText;

              // Increment the count by the speed until it reaches the target
              const inc = target / speed;

              if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
              } else {
                counter.innerText = target;
              }
            };

            updateCount();
          });

          observer.unobserve(entry.target);
        }
      });
    });

    document.querySelectorAll('.counter-wrap').forEach(section => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

return (
     <>
     <div>
    <title>Pretty - Free Bootstrap 4 Template by Colorlib</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700" rel="stylesheet" />
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
    <div className="hero-wrap js-fullheight" style={{backgroundImage: `url(${require('./images/photo10.jpg')})`}} data-stellar-background-ratio="0.5">
      <div className="overlay" />
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
          <div className="col-md-8 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
            <div className="icon">
              <a href="" className="logo">
                <span className="flaticon-flower" />
                <h1>Pretty</h1>
              </a>
            </div>
            <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Beauty Salon</h1>
            
            <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><a href="" className="btn btn-white btn-outline-white px-4 py-3">View Our Services</a></p>
          </div>
        </div>
      </div>
    </div>
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="">Pretty</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu" /> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
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
        <div className="row">
          <div className="col-md-4 ftco-animate">
            <div className="media d-block text-center block-6 services">
              <div className="icon d-flex mb-3"><span className="flaticon-facial-treatment" /></div>
              <div className="media-body">
                <h3 className="heading">Skin &amp; Beauty Care</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>      
          </div>
          <div className="col-md-4 ftco-animate">
            <div className="media d-block text-center block-6 services">
              <div className="icon d-flex mb-3"><span className="flaticon-cosmetics" /></div>
              <div className="media-body">
                <h3 className="heading">Makeup Pro</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>      
          </div>
          <div className="col-md-4 ftco-animate">
            <div className="media d-block text-center block-6 services">
              <div className="icon d-flex mb-3"><span className="flaticon-curl" /></div>
              <div className="media-body">
                <h3 className="heading">Hair Style</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>    
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section ftco-animate text-center">
            <h2 className="mb-4">Our Beauty Experts</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 d-flex mb-sm-4 ftco-animate">
            <div className="staff">
              <div className="img mb-4" style={{backgroundImage: `url(${require('./images/prfphoto7.jpg')})`}} />
              <div className="info text-center">
                <h3><a href="teacher-single.html">Mellisa Smith</a></h3>
                <span className="position">Stylist</span>
                <div className="text">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex mb-sm-4 ftco-animate">
            <div className="staff">
              <div className="img mb-4" style={{backgroundImage: `url(${require('./images/prfphoto5.jpg')})`}} />
              <div className="info text-center">
                <h3><a href="teacher-single.html">Marie Mush</a></h3>
                <span className="position">Fashionist</span>
                <div className="text">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex mb-sm-4 ftco-animate">
            <div className="staff">
              <div className="img mb-4" style={{backgroundImage: `url(${require('./images/person_1.jpg')})`}} />
              <div className="info text-center">
                <h3><a href="teacher-single.html">Ana Jacobson</a></h3>
                <span className="position">Makeup Stylist</span>
                <div className="text">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex mb-sm-4 ftco-animate">
            <div className="staff">
              <div className="img mb-4" style={{backgroundImage: `url(${require('./images/person_3.jpg')})`}} />
              <div className="info text-center">
                <h3><a href="teacher-single.html">Ivan Dorchsner</a></h3>
                <span className="position">Nail Specialist</span>
                <div className="text">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section ftco-discount img" style={{backgroundImage: `url(${require('./images/bg_2.jpg')})`}}>
      <div className="overlay" />
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-md-5 discount ftco-animate">
            <h3>Save up to 25% Off</h3>
            <h2 className="mb-4">Student Discount</h2>
            <p className="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
            <p><a href="#" className="btn btn-white btn-outline-white px-4 py-3">Book Now</a></p>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h2 className="mb-4">Our Work</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 ftco-animate">
            <a href="#" className="work-entry">
              <img src={prfImg} className="img-fluid" alt="Colorlib Template" />
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
              <img src={pfPhoto} className="img-fluid" alt="Colorlib Template" />
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
              <img src={rkImg} className="img-fluid" alt="Colorlib Template" />
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
      </div>
    </section>
    <section className="ftco-partner bg-light">
      <div className="container">
        <div className="row partner justify-content-center">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-3 ftco-animate">
                <a href="#" className="partner-entry">
                  <img src={prtImg1} className="img-fluid" alt="Colorlib template" />
                </a>
              </div>
              <div className="col-md-3 ftco-animate">
                <a href="#" className="partner-entry">
                  <img src={prtImg2} className="img-fluid" alt="Colorlib template" />
                </a>
              </div>
              <div className="col-md-3 ftco-animate">
                <a href="#" className="partner-entry">
                  <img src={prtImg3} className="img-fluid" alt="Colorlib template" />
                </a>
              </div>
              <div className="col-md-3 ftco-animate">
                <a href="#" className="partner-entry">
                  <img src={prtImg4} className="img-fluid" alt="Colorlib template" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h2 className="mb-4">Beauty Pricing</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 ftco-animate">
            <div className="pricing-entry pb-5 text-center">
              <div>
                <h3 className="mb-4">Basic</h3>
                <p><span className="price">$24.50</span> <span className="per">/ one trip</span></p>
              </div>
              <ul>
                <li>Nail Cutting &amp; Styling</li>
                <li>Hair Trimming</li>
                <li>Spa Therapy</li>
                <li>Body Massage</li>
                <li>Manicure</li>
              </ul>
              <p className="button text-center"><a href="#" className="btn btn-primary btn-outline-primary px-4 py-3">Order now</a></p>
            </div>
          </div>
          <div className="col-md-3 ftco-animate">
            <div className="pricing-entry pb-5 text-center">
              <div>
                <h3 className="mb-4">Standard</h3>
                <p><span className="price">$34.50</span> <span className="per">/ one trip</span></p>
              </div>
              <ul>
                <li>Nail Cutting &amp; Styling</li>
                <li>Hair Trimming</li>
                <li>Spa Therapy</li>
                <li>Body Massage</li>
                <li>Manicure</li>
              </ul>
              <p className="button text-center"><a href="#" className="btn btn-primary btn-outline-primary px-4 py-3">Order now</a></p>
            </div>
          </div>
          <div className="col-md-3 ftco-animate">
            <div className="pricing-entry active pb-5 text-center">
              <div>
                <h3 className="mb-4">Premium</h3>
                <p><span className="price">$54.50</span> <span className="per">/ one trip</span></p>
              </div>
              <ul>
                <li>Nail Cutting &amp; Styling</li>
                <li>Hair Trimming</li>
                <li>Spa Therapy</li>
                <li>Body Massage</li>
                <li>Manicure</li>
              </ul>
              <p className="button text-center"><a href="#" className="btn btn-primary btn-outline-primary px-4 py-3">Order now</a></p>
            </div>
          </div>
          <div className="col-md-3 ftco-animate">
            <div className="pricing-entry pb-5 text-center">
              <div>
                <h3 className="mb-4">Platinum</h3>
                <p><span className="price">$89.50</span> <span className="per">/ one trip</span></p>
              </div>
              <ul>
                <li>Nail Cutting &amp; Styling</li>
                <li>Hair Trimming</li>
                <li>Spa Therapy</li>
                <li>Body Massage</li>
                <li>Manicure</li>
              </ul>
              <p className="button text-center"><a href="#" className="btn btn-primary btn-outline-primary px-4 py-3">Order now</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section ftco-counter img" id="section-counter" style={{backgroundImage: `url(${require('./images/bg_4.jpg')})`}}>
      <div className="overlay" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <div className="icon"><span className="flaticon-flower" /></div>
                    <span>Makeup Over Done</span>
                    <strong className="number" data-number={3500}>0</strong>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <div className="icon"><span className="flaticon-flower" /></div>
                    <span>Procedure</span>
                    <strong className="number" data-number={1000}>0</strong>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <div className="icon"><span className="flaticon-flower" /></div>
                    <span>Happy Client</span>
                    <strong className="number" data-number={3000}>0</strong>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <div className="icon"><span className="flaticon-flower" /></div>
                    <span>Skin Treatment</span>
                    <strong className="number" data-number={900}>0</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section ftco-animate text-center">
            <h2 className="mb-4">Recent from blog</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <a href="blog-single.html" className="block-20" style={{backgroundImage: `url(${require('./images/image_1.jpg')})`}}>
              </a>
              <div className="text py-4 d-block">
                <div className="meta">
                  <div><a href="#">Sept 10, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                </div>
                <h3 className="heading mt-2"><a href="#">Skin Care for Teen Skin</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <a href="blog-single.html" className="block-20" style={{backgroundImage: `url(${require('./images/image_2.jpg')})`}}>
              </a>
              <div className="text py-4 d-block">
                <div className="meta">
                  <div><a href="#">Sept 10, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                </div>
                <h3 className="heading mt-2"><a href="#">Skin Care for Teen Skin</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <a href="blog-single.html" className="block-20" style={{backgroundImage: `url(${require('./images/image_3.jpg')})`}}>
              </a>
              <div className="text py-4 d-block">
                <div className="meta">
                  <div><a href="#">Sept 10, 2018</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                </div>
                <h3 className="heading mt-2"><a href="#">Skin Care for Teen Skin</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section ftco-appointment">
      <div className="overlay" />
      <div className="container">
        <div className="row d-md-flex align-items-center">
          <div className="col-md-2" />
          <div className="col-md-4 d-flex align-self-stretch ftco-animate">
            <div className="appointment-info text-center p-5">
              <div className="mb-4">
                <h3 className="mb-3">Address</h3>
                <p>	203 Fake St. Mountain View, San Francisco, California, USA</p>
              </div>
              <div className="mb-4">
                <h3 className="mb-3">Phone</h3>
                <p className="day"><strong>000 123 456</strong> or <strong>000 987 654</strong></p>
              </div>
              <div>
                <h3 className="mb-3">Opening Hours</h3>
                <p className="day"><strong>Monday - Friday</strong></p>
                <span>08:00am - 09:00pm</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 appointment pl-md-5 ftco-animate">
            <h3 className="mb-3">Appointments</h3>
            <form action="#" className="appointment-form">
              <div className="row form-group d-flex">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="First Name" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Last Name" />
                </div>
              </div>
              <div className="row form-group d-flex">
                <div className="col-md-6">
                  <div className="input-wrap">
                    <div className="icon"><span className="ion-md-calendar" /></div>
                    <input type="text" id="appointment_date" className="form-control" placeholder="Date" />
                  </div>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Phone" />
                </div>
              </div>
              <div className="form-group">
                <textarea name id cols={30} rows={3} className="form-control" placeholder="Message" defaultValue={""} />
              </div>
              <div className="form-group">
                <input type="submit" defaultValue="Order" className="btn btn-white btn-outline-white py-3 px-4" />
              </div>
            </form>
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
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Recent Blog</h2>
              <div className="block-21 mb-4 d-flex">
                <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_1.jpg)'}} />
                <div className="text">
                  <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                  <div className="meta">
                    <div><a href="#"><span className="icon-calendar" /> July 12, 2018</a></div>
                    <div><a href="#"><span className="icon-person" /> Admin</a></div>
                    <div><a href="#"><span className="icon-chat" /> 19</a></div>
                  </div>
                </div>
              </div>
              <div className="block-21 mb-4 d-flex">
                <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_2.jpg)'}} />
                <div className="text">
                  <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                  <div className="meta">
                    <div><a href="#"><span className="icon-calendar" /> July 12, 2018</a></div>
                    <div><a href="#"><span className="icon-person" /> Admin</a></div>
                    <div><a href="#"><span className="icon-chat" /> 19</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Spa Center</h2>
              <ul className="list-unstyled">
                <li><a href="#" className="py-2 d-block">Body Care</a></li>
                <li><a href="#" className="py-2 d-block">Massage</a></li>
                <li><a href="#" className="py-2 d-block">Hydrotherapy</a></li>
                <li><a href="#" className="py-2 d-block">Yoga</a></li>
                <li><a href="#" className="py-2 d-block">Sauna</a></li>
                <li><a href="#" className="py-2 d-block">Aquazone</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                  <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                  <li><a href="#"><span className="icon icon-envelope" /><span className="text">info@yourdomain.com</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://www.datadna.in/" target="_blank">Data DNA</a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
          </div>
        </div>
      </div>
    </footer>
    {/* loader */}
    <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" /></svg></div>
  </div>
  </>
  );
}
export default Homepage;