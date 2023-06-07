import React from 'react';
import $ from 'jquery';

function Banner() {
  function signInHanlder() {
    $('.modal').css('display', 'flex');
  }
  return (
    <div id="banner">
      <p>YelpGPT</p>
      <button type="button" onClick={signInHanlder}>Sign in</button>
    </div>
  );
}

export default Banner;
