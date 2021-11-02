import React, { useEffect, useState } from 'react';
import SingleOffer from '../singleOffer/singleOffer';

const PlacesOfferingDetails = () => {
  const [singleDetails, setSingleDetails] = useState({});
  console.log(singleDetails);

  useEffect(() => {
    fetch('https://thawing-caverns-28993.herokuapp.com/addPlace')
      .then(res => res.json())
      .then(data => setSingleDetails(data));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {singleDetails.map(service => (
          <SingleOffer key={service._id} service={service}></SingleOffer>
        ))}
      </div>
    </div>
  );
};

export default PlacesOfferingDetails;
