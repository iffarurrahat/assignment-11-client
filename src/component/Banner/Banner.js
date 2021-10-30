import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img "
          src={'https://i.ibb.co/g3Xwn01/Banner-1.jpg'}
          alt="First slide"
        />
        <Carousel.Caption className="slider-details">
          <h2>Amazing Tour In madagascar </h2>
          <h5>7 Days, 8 Night Tour</h5>
          <button>Book Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src={'https://i.ibb.co/nkMXb02/Banner-2.jpg'}
          alt="Second slide"
        />

        <Carousel.Caption className="slider-details">
          <h2>Amazing Tour In Indonesia </h2>
          <h5>7 Days, 8 Night Tour</h5>
          <button>Book Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src={'https://i.ibb.co/gFQBTt4/Banner-3.jpg'}
          alt="Third slide"
        />

        <Carousel.Caption className="slider-details">
          <h2>Amazing Tour In Hampshire </h2>
          <h5>7 Days, 8 Night Tour</h5>
          <button>Book Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
