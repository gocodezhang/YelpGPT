import React, { useContext } from 'react';
import BookMarkEntry from './BookMarkEntry.jsx';
import { RestaurantContext } from './App.jsx';

function BookMarkList() {
  const { markRestaurants } = useContext(RestaurantContext);
  return markRestaurants.length === 0 ? null : (
    <div className="mark-restaurants">
      <p>Your BookMark</p>
      <div className="mark-restaurant-contain">
        {markRestaurants.map((restaurant) => (
          <BookMarkEntry markRestaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    </div>
  );
}

export default BookMarkList;
