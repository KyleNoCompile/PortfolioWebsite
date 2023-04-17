import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCn8gnWqQ2EgWyE3QMe5sWIM1Wb7491uOA",
  authDomain: "kyle-portfolio-website.firebaseapp.com",
  projectId: "kyle-portfolio-website",
  storageBucket: "kyle-portfolio-website.appspot.com",
  messagingSenderId: "137164621315",
  appId: "1:137164621315:web:0b737441b4119ec4a5f036",
  measurementId: "G-ZX42EXQ2V8"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;