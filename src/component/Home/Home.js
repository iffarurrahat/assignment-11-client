import React from 'react';
import Banner from '../Banner/Banner';
import PlacesOffering from '../PlacesOffering/PlacesOffering';
import TravelExtaCom from './../CommonPage/TravelExtaCom/TravelExtaCom';
import TravelWith from './../CommonPage/TravelWith/TravelWith';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PlacesOffering></PlacesOffering>
      <TravelExtaCom></TravelExtaCom>
      <TravelWith></TravelWith>
    </div>
  );
};

export default Home;
