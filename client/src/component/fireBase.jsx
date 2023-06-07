// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD9LkXD_UMajHP3t-WGRFKzQrq74kETS1E',
  authDomain: 'yelpgpt.firebaseapp.com',
  projectId: 'yelpgpt',
  storageBucket: 'yelpgpt.appspot.com',
  messagingSenderId: '153193093085',
  appId: '1:153193093085:web:102e6d2a2e3eee612a0834',
  measurementId: 'G-3FHLH7360E',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Initialize Firebase Authentication and get a reference to the service
export default auth;
