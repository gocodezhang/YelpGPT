import React, { useState, useContext } from 'react';
import axios from 'axios';
import $ from 'jquery';
import { RestaurantContext } from './App.jsx';

/* eslint "jsx-a11y/control-has-associated-label":0 */
/* eslint "react/self-closing-comp":0 */
function Chatbox() {
  const { setRestaurants, inputObj, setInputObj } = useContext(RestaurantContext);
  const [displayLocation, setDisplayLocation] = useState(true);

  function inputHanlder(e) {
    setInputObj({ ...inputObj, [e.target.name]: e.target.value });
  }

  // function queryDifferentiator() {
  //   let params;
  //   if (inputObj.sendLocation) {
  //     params = {
  //       location: inputObj.location,
  //       textParams: inputObj.textParams,
  //     };
  //   } else {
  //     params = {
  //       location: '',
  //       textParams: inputObj.textParams,
  //     };
  //   }
  //   return axios.get('/chats', { params });
  // }

  function submitHandler(e) {
    e.preventDefault();

    if (displayLocation) {
      setDisplayLocation(false);
      $('#chatbox-input').addClass('rotate');
    } else {
      $('#loader').toggle();
      axios.get('/chats', { params: inputObj })
        .then((result) => {
          console.log(result);
          $('#loader').toggle();
          setRestaurants(result.data);
          if (inputObj.type === 'initial') {
            $('.modify').toggle();
          }
          setInputObj({ ...inputObj, textParams: '', type: 'ongoing' });
        })
        .catch((err) => {
          console.log(err);
          $('#loader').toggle();
          setRestaurants([]);
          $('.error-message').toggle();
        });
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
