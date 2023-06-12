import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import RestaurantEntry from './RestaurantEntry.jsx';
// import { yelpExample } from '../sampleData.js';
import { RestaurantContext } from './App.jsx';

function RestaurantList() {
  const { restaurants } = useContext(RestaurantContext);
  return (
    <div className="restaurants">
      <FontAwesomeIcon id="loader" style={{ display: 'none' }} icon={faCircleNotch} spin />
      <p className="error-message" style={{ display: 'none' }}>Too many requests</p>
      {restaurants.length === 0 ? null : (restaurants.map((restaurant) => (
        restaurant ? <RestaurantEntry restaurant={restaurant} key={restaurant.id} /> : null
      )))}
    </div>
  );
}

export default RestaurantList;
