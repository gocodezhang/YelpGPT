import React, { useContext } from 'react';
import axios from 'axios';
import Star from './Star.jsx';
import Tags from './Tags.jsx';
import { RestaurantContext } from './App.jsx';

/* eslint "jsx-a11y/control-has-associated-label":0 */
/* eslint "react/self-closing-comp":0 */
function RestaurantEntry({ restaurant }) {
  const {
    currentUser,
    refresh,
    setRefresh,
  } = useContext(RestaurantContext);

  function markHandler() {
    axios.post('/favrestaurants', {
      uid: currentUser,
      restaurant,
    })
      .then(() => (setRefresh(!refresh)))
      .catch((err) => (console.log(err)));
  }
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
      <button className="add-fav" type="button" style={{ display: currentUser ? '' : 'none' }} onClick={markHandler}><i className="fa-solid fa-bookmark"></i></button>
    </div>
  );
}

export default RestaurantEntry;
