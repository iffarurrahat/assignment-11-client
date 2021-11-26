import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './PlacesOffering.css';
import { BiCalendar } from 'react-icons/bi';
import { FiMapPin } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';

const PlacesOffering = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch('https://thawing-caverns-28993.herokuapp.com/addPlace')
      .then(res => res.json())
      .then(data => setPlaces(data));
  }, []);

  const history = useHistory();

  const handleDetails = key => {
    const uri = `/placesOfferingDetails/${key}`;
    history.push(uri);
  };

  return (
    <div className="container my-5">
      <div className="row g-4">
        <div className="package-head">
          <h5>Choose Your Package</h5>
          <h2>
            Select Your best Package <br /> For Your Travel
          </h2>
        </div>
        {places.map(place => (
          <div className="col-lg-4 col-md-6 col-12" key={place.key}>
            <div className="card h-100 border-0 shadow-box">
              <div className="package-img">
                <img src={place.img} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="package-info">
                    <span>${place.price}</span>/Per Person
                  </h5>
                  <h5 className=" d-flex align-items-center package-info-2">
                    <BiCalendar />
                    <span className="ms-1">{place.offer}</span>
                  </h5>
                </div>
                <h5 className="card-title text-start d-flex align-items-center">
                  <FiMapPin />
                  <span className="package-title ms-1">{place.name}</span>
                </h5>
                <div className="text-start">
                  <Link to={`/placesOfferingDetails/${place.key} `}>Click</Link>
                  <BsArrowRight />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesOffering;

// {places.map(place => (
//   <PlacesOfferingContent
//     place={place}
//     key={place.key}
//   ></PlacesOfferingContent>
// ))}
