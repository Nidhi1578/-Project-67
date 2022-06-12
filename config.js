import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyB73iurEL-Y9imktzgP-AymqE5yOzFVwNk",
    authDomain: "teamvoting-app-9e244.firebaseapp.com",
    databaseURL: "https://teamvoting-app-9e244-default-rtdb.firebaseio.com",
    projectId: "teamvoting-app-9e244",
    storageBucket: "teamvoting-app-9e244.appspot.com",
    messagingSenderId: "348446544319",
    appId: "1:348446544319:web:30d3fc4356bd91157b910a",
    measurementId: "G-TM5E0VEC9S"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();