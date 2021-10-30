import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PlacesOfferingDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [singleDetails, setSingleDetails] = useState({});

  useEffect(() => {
    fetch('/facekdata.json')
      .then(res => res.json())
      .then(data => setDetails(data));
  }, []);

  useEffect(() => {
    if (details.length > 0) {
      const matchedData = details.find(detail => detail.key == id);
      setSingleDetails(matchedData);
    }
  }, [details]);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12 text-center">
          <div>
            <img className="my-3" src={singleDetails.img} alt="" />
          </div>
          <div>
            <h3>Place Name:{singleDetails.name}</h3>
            <h6>
              City Name: {singleDetails.city} Population:
              {singleDetails.population}
            </h6>
            <h5>
              Per/Person: {singleDetails.price}$ Offer:{singleDetails.offer}
            </h5>
            <h5>Location: {singleDetails.location}</h5>
            <p>About this Place:{singleDetails.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacesOfferingDetails;
