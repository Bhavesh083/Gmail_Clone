import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAbUy2-7jKfU62r3Fu_eJ1oWBFfWgKypkA",
    authDomain: "clone-gmai1l.firebaseapp.com",
    projectId: "clone-gmai1l",
    storageBucket: "clone-gmai1l.appspot.com",
    messagingSenderId: "996589313031",
    appId: "1:996589313031:web:3461244a0e524d89f0dea2",
    measurementId: "G-1R5V4SLZ35"
  };

  const  firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};