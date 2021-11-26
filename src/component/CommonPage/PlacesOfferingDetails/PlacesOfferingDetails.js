import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PlacesOfferingDetails = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch('https://thawing-caverns-28993.herokuapp.com/addPlace')
      .then(res => res.json())
      .then(data => setPlaces(data));
  }, []);

  // DELETE AN USER
  const handleDeletePlace = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
      const url = `https://thawing-caverns-28993.herokuapp.com/addPlace${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert('deleted successfully');
            const remainingUsers = places.find(place => place._id !== id);
            setPlaces(remainingUsers);
          }
        });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {places.map(place => (
          <li key={place._id}>
            {place.name} :: {place.email}
            <Link to={`/addPlace/update/${place._id}`}>
              <button>Approve</button>
            </Link>
            <button onClick={() => handleDeletePlace(place._id)}>X</button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default PlacesOfferingDetails;
