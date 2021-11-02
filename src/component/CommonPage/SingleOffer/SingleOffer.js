import React from 'react';

const SingleOffer = ({ service }) => {
  const { name, img, offer, price, details, location } = service;
  return (
    <div className="col-lg-12 col-md-12 col-12">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3>Place{name}</h3>
        <h6>Offer{offer}</h6>
        <h6>Price{price}</h6>
        <h5>Location{location}</h5>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default SingleOffer;










