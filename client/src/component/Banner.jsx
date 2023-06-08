import React, { useContext } from 'react';
import $ from 'jquery';
import { RestaurantContext } from './App.jsx';

function Banner() {
  const { buttonSwitch, setButtonSwitch } = useContext(RestaurantContext);
  function signInHanlder() {
    $('.modal').css('display', 'flex');
    setButtonSwitch(!buttonSwitch);
  }

  function backHanlder() {
    $('.modal').css('display', 'none');
    setButtonSwitch(!buttonSwitch);
  }
  return (
    <div id="banner">
      <p>YelpGPT</p>
      {buttonSwitch ? (<button type="button" onClick={signInHanlder}>Sign In</button>) : (
        <button type="button" onClick={backHanlder}>Back</button>
      )}
    </div>
  );
}

export default Banner;
