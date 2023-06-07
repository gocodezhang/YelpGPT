import React, { useState, createContext } from 'react';
import Chatbox from './Chatbox.jsx';
import RestaurantList from './RestaurantList.jsx';
import Banner from './Banner.jsx';
import Auth from './Auth.jsx';

export const RestaurantContext = createContext('restaurants');

/* eslint "react/jsx-no-constructed-context-values":0 */
function App() {
  const [restaurants, setRestaurants] = useState([]);
  return (
    <RestaurantContext.Provider value={{ restaurants, setRestaurants }}>
      <Banner />
      <Chatbox />
      <RestaurantList />
      <Auth />
    </RestaurantContext.Provider>
  );
}

export default App;
