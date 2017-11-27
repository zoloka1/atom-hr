import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDc2HZZUFaxPb5PS0Qfur85ZnwGNdNQzSM",
    authDomain: "atom-hr.firebaseapp.com",
    databaseURL: "https://atom-hr.firebaseio.com",
    projectId: "atom-hr",
    storageBucket: "atom-hr.appspot.com",
    messagingSenderId: "809115354997"
  };
 
const fire = firebase.initializeApp(config);

export default fire;