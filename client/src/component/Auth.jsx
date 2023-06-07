import React from 'react';
import $ from 'jquery';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import auth from './fireBase.jsx';

/* eslint "react/self-closing-comp":0 */

function Auth() {
  const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

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
      },
    },
    // Other config options...
  });

  return (
    <div className="modal" style={{ display: 'none' }}>
      <div id="firebaseui-auth-container"></div>
    </div>
  );
}

export default Auth;
