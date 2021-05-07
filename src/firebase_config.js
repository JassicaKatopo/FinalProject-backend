import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCZSvEl_WJe_nSbISMm5-5z2_KQfM5wOzQ",
    authDomain: "todoapp-f599a.firebaseapp.com",
    projectId: "todoapp-f599a",
    storageBucket: "todoapp-f599a.appspot.com",
    messagingSenderId: "146486050481",
    appId: "1:146486050481:web:f0603c8b74a02ca35dec90"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {db};