import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-bg  pt-100 pb-70">
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <Link to="/home">
              <img
                src={'https://i.ibb.co/HBGvLKP/footer-logo.png'}
                className="my-5"
                alt=""
              />
            </Link>
            <div className="footer_li text-start">
              <p className="text-start">
                Trusted results for Travel Insurance For Usa. Check Visymo
                Search for the best results! Unlimited Access. 100% Secure.
                Always Facts. Privacy Friendly.
              </p>
              <h5>Follow us:</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <h4 className="footer-title my-5">Contact Us</h4>
            <div className="footer_li">
              <span className="d-flex text-center align-items-center ms-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone-fill me-2 footer-icon"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                +8801704999062
              </span>
              <br />
              <span className="d-flex align-items-start ms-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill me-2 mt-2 footer-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                <p>
                  iffarurrahat2018@gmail.com <br />
                  iffarurrahat1720@gmail.com
                </p>
              </span>
              <span className="d-flex align-items-start ms-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill me-2 mt-2 footer-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                <p className="text-start">
                  Shamsher Nagar Road, <br /> Moulvibazar
                </p>
              </span>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-12">
            <h4 className="footer-title my-5">Support</h4>
            <div className="footer_li text-center">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Destinations</li>
              <li>Our Blogs</li>
              <li>Package</li>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <h4 className="footer-title my-5">We Accepts:</h4>
            <div className="footer_li">
              <div>
                <img
                  src={'https://i.ibb.co/Ssxw4b4/footer-1.png'}
                  className="footer-img"
                  alt=""
                />
                <img
                  src={'https://i.ibb.co/928Pzz4/footer-2.png'}
                  className="footer-img"
                  alt=""
                />
              </div>
              <div>
                <img
                  src={'https://i.ibb.co/cw2X9Q8/footer-3.png'}
                  className="footer-img"
                  alt=""
                />
                <img
                  src={'https://i.ibb.co/LCFLQzd/footer-4.png'}
                  className="footer-img"
                  alt=""
                />
              </div>
              <div>
                <img
                  src={'https://i.ibb.co/NNmPPMx/footer-5.png'}
                  className="footer-img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="copyrigth-area">
              <p className="text-white">
                &copy;Copyright 2021 TourX Landing Designed by Love Developed by
                Iffarur Rahat. All Rights Reserved{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
