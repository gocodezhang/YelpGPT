import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import Chatbox from './Chatbox.jsx';
import RestaurantList from './RestaurantList.jsx';
import Banner from './Banner.jsx';
import Auth from './Auth.jsx';
import BookMarkList from './BookMarkList.jsx';

export const RestaurantContext = createContext('restaurants');

/* eslint "react/jsx-no-constructed-context-values":0 */
function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [markRestaurants, setMarkRestaurants] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (currentUser) {
      axios.get('/favrestaurants', {
        params: {
          uid: currentUser,
        },
      })
        .then((result) => {
          console.log(result);
          const fetchMarkRestaurants = result.data.map((obj) => (obj.restaurant));
          setMarkRestaurants(fetchMarkRestaurants);
        })
        .catch((err) => (console.log(err)));
    }
  }, [currentUser, refresh]);

  return (
    <RestaurantContext.Provider value={{
      restaurants,
      setRestaurants,
      markRestaurants,
      setMarkRestaurants,
      currentUser,
      setCurrentUser,
      refresh,
      setRefresh,
    }}
    >
      <Banner />
      <Chatbox />
      <RestaurantList />
      <Auth />
      <BookMarkList />
    </RestaurantContext.Provider>
  );
}

export default App;
