import React from 'react';
import './TravelExtaCom.css';

const TravelExtaCom = () => {
  return (
    <div className="travel-com">
      <div className="container">
        <div className="row">
          <h5 className="section-h5 mt-5 mb-3">Feature Tours</h5>
          <h2 className="section-h2 mb-5">See Our Best Popular Destinations</h2>
          <div className="col lg-6">
            <div className="card mb-3" style={{ 'max-width': '540px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={'https://i.ibb.co/YjCcmkH/travel-group-1.png'}
                    className=" rounded-start client-img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title">
                      Group Travel Go To Bea Amsterdam
                    </h3>
                    <h5>7K + Rating</h5>
                    <h3>$150</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col lg-6">
            <div className="card mb-3" style={{ 'max-width': '540px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={'https://i.ibb.co/sV43JL4/travel-group-2.png'}
                    className="rounded-start client-img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title">
                      Group Travel Go To Bea Amsterdam
                    </h3>
                    <h5>7K + Rating</h5>
                    <h3>$150</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelExtaCom;
