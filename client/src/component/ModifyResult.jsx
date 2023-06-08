import React, { useContext } from 'react';
import axios from 'axios';
import $ from 'jquery';
import { RestaurantContext } from './App.jsx';

function ModifyResult() {
  const { inputObj, setInputObj, setRestaurants } = useContext(RestaurantContext);

  function inputHandler(e) {
    setInputObj({ ...inputObj, [e.target.name]: e.target.value });
  }

  function saveHandler(e) {
    if (e.key === 'Enter') {
      e.target.blur();
      const params = {
        location: inputObj.location,
        textParams: inputObj.textParams,
        type: 'changeLocation',
      };
      $('#loader').toggle();
      axios.get('/chats', { params })
        .then((result) => {
          console.log(result.data);
          $('#loader').toggle();
          setRestaurants(result.data);
        })
        .catch((err) => {
          console.log(err);
          $('#loader').toggle();
          setRestaurants([]);
          $('.error-message').toggle();
        });
    }
  }

  function regenerateHandler(e) {
    const params = {
      location: inputObj.location,
      textParams: inputObj.textParams,
      type: e.target.name,
    };
    $('.error-message').css('display', 'none');
    $('#loader').toggle();
    axios.get('/chats', { params })
      .then((result) => {
        console.log(result.data);
        $('#loader').toggle();
        setRestaurants(result.data);
      })
      .catch((err) => {
        console.log(err);
        $('#loader').toggle();
        setRestaurants([]);
        $('.error-message').toggle();
      });
  }
  return (
    <div className="modify" style={{ display: 'none' }}>
      <div className="button-like">
        <i className="fa-solid fa-location-dot"></i>
        <input id="update-location" type="text" name="location" value={inputObj.location} onChange={inputHandler} onKeyDown={saveHandler}
          onFocus={(e) => (e.target.style.background = 'pink')}
          onBlur={(e) => (e.target.style.background = "")}
        />
      </div>
      <input id="regenerate" type="button" value="Regenerate" name="regenerate" onClick={regenerateHandler} />
    </div>
  );
}

export default ModifyResult;
