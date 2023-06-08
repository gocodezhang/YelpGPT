import React, { useContext } from 'react';
import $ from 'jquery';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import auth from './fireBase.jsx';
import { RestaurantContext } from './App.jsx';

/* eslint "react/self-closing-comp":0 */

function Auth() {
  const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
  const { setCurrentUser } = useContext(RestaurantContext);

  ui.start('#firebaseui-auth-container', {
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: false,
      },
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      },
    ],
    callbacks: {
      signInSuccessWithAuthResult(authResult) {
        console.log(authResult);
        $('.modal').css('display', 'none');
        setCurrentUser(authResult.user.uid);
      },
    },
    // Other config options...
  });

  function clickHandler() {
    $('.modal').css('display', 'none');
  }

  return (
    <div className="modal" style={{ display: 'none' }}>
      <div id="firebaseui-auth-container"></div>
      <button type="button" onClick={clickHandler}>X</button>
    </div>
  );
}

export default Auth;
