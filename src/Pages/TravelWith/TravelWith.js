import React from 'react';
import { FiUsers } from 'react-icons/fi';
import { FaAward, FaBalanceScale, FaStudiovinari } from 'react-icons/fa';
import {} from 'react-icons/fa';
import './TravelWith.css';

const TravelWith = () => {
  return (
    <div className="travel-bg my-5">
      <div className="container">
        <div className="row">
          <h5 className="travel-top-title mb-2 mt-5">Why TourX</h5>
          <h2 className="text-title mb-5">Why you are travel with tourx</h2>
          <div className="col-lg-3 col-m-4 col-6">
            <div className="travel-card">
              <div className="card-img">
                <FiUsers />
              </div>
              <h5 className="travel-text">2000+ Our worldwide guide</h5>
            </div>
          </div>
          <div className="col-lg-3 col-m-4 col-6">
            <div className="travel-card">
              <div className="card-img">
                <FaBalanceScale />
              </div>
              <h5 className="travel-text">100% trusted travel agency</h5>
            </div>
          </div>
          <div className="col-lg-3 col-m-4 col-6">
            <div className="travel-card">
              <div className="card-img">
                <FaAward />
              </div>
              <h5 className="travel-text">10+ year of travel experience</h5>
            </div>
          </div>
          <div className="col-lg-3 col-m-4 col-6">
            <div className="travel-card">
              <div className="card-img">
                <FaStudiovinari />
              </div>
              <h5 className="travel-text">90% of our traveller happy</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelWith;
