import React from 'react';
import Star from './Star.jsx';
import Tags from './Tags.jsx';

function RestaurantEntry({ restaurant }) {
  return (
    <div className="restaurant">
      <img src={restaurant.image_url} alt="food" />
      <ul className="restaurant-info">
        <li><a href={restaurant.url}>{restaurant.name}</a></li>
        <li><Star rating={restaurant.rating} /></li>
        <li><Tags categories={restaurant.categories} /></li>
        <li><small>{restaurant.price}</small></li>
        <li><small>{`${restaurant.location.address1}, ${restaurant.location.city}, ${restaurant.location.state} ${restaurant.location.zip_code}`}</small></li>
      </ul>
    </div>
  );
}

export default RestaurantEntry;
