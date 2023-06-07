import React, { useState, useContext } from 'react';
import axios from 'axios';
import $ from 'jquery';
import { RestaurantContext } from './App.jsx';

function Chatbox() {
  const { setRestaurants } = useContext(RestaurantContext);
  const [displayLocation, setDisplayLocation] = useState(true);
  const [inputObj, setInputObj] = useState({
    location: '',
    textParams: '',
  });

  function inputHanlder(e) {
    setInputObj({ ...inputObj, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();

    if (displayLocation) {
      setDisplayLocation(false);
      $('#chatbox-input').addClass('rotate');
    } else {
      $('#loader').toggle();
      axios.get('/chats', {
        params: inputObj,
      })
        .then((result) => {
          console.log(result);
          $('#loader').toggle();
          setRestaurants(result.data);
          setInputObj({
            location: '',
            textParams: '',
          });
        })
        .catch((err) => (console.log(err)));
    }
  }

  return (
    <div id="chatbox">
      <h2>Explore local restaurants with AI</h2>
      <div id="chatbox-input">
        {displayLocation ? (
          <input type="text" name="location" value={inputObj.location} placeholder="tell us your location" onChange={inputHanlder} />
        ) : null}
        {displayLocation ? null : <input type="text" name="textParams" value={inputObj.textParams} placeholder="throw some key words" onChange={inputHanlder} />}
        <button type="button" onClick={submitHandler}><i className="fa-solid fa-paper-plane"></i></button>
      </div>
    </div>
  );
}

export default Chatbox;
