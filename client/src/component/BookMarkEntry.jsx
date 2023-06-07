import React from 'react';

function BookMarkEntry({ markRestaurant }) {
  return (
    <li><a href={markRestaurant.url}>{markRestaurant.name}</a></li>
  );
}

export default BookMarkEntry;
