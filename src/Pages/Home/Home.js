import React from 'react';
import Banner from '../Banner/Banner';
import Tourist from '../Tourist/Tourist';
import TravelExtaCom from '../TravelExtaCom/TravelExtaCom';
import TravelWith from '../TravelWith/TravelWith';

const Home = () => {
  return (
    <div id="#home">
      <Banner />
      <Tourist />
      <TravelWith></TravelWith>
      <TravelExtaCom></TravelExtaCom>
    </div>
  );
};

export default Home;
