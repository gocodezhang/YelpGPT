import React, { useContext } from 'react';
import RestaurantEntry from './RestaurantEntry.jsx';
// import { yelpExample } from '../sampleData.js';
import { RestaurantContext } from './App.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

function RestaurantList() {
  const { restaurants } = useContext(RestaurantContext);
  return restaurants.length === 0
    ? (<div className="restaurants"><FontAwesomeIcon id="loader" style={{ display: 'none' }} icon={faCircleNotch} spin /></div>) : (
      <div className="restaurants">
        {restaurants.map((restaurant) => (
          <RestaurantEntry restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    );
}

export default RestaurantList;
