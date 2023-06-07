import React, { useState, createContext } from 'react';
import Chatbox from './Chatbox.jsx';
import RestaurantList from './RestaurantList.jsx';
import Banner from './Banner.jsx';

export const RestaurantContext = createContext('restaurants');

function App() {
  const [restaurants, setRestaurants] = useState([]);
  return (
    <RestaurantContext.Provider value={{ restaurants, setRestaurants }}>
      <Banner />
      <Chatbox />
      <RestaurantList />
    </RestaurantContext.Provider>
  );
}

export default App;
