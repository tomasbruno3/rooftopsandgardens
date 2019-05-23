import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyApyFL2mLQGdjwr7DeJsW40m7DrJJwI97Q",
    authDomain: "rooftops-and-gardens.firebaseapp.com",
    databaseURL: "https://rooftops-and-gardens.firebaseio.com",
    projectId: "rooftops-and-gardens",
    storageBucket: "rooftops-and-gardens.appspot.com",
    messagingSenderId: "583798648840"
  };


  firebase.initializeApp(config);
  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true });

  export default firebase;
