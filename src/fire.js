import firebase from 'firebase';
import firestore from 'firebase/firestore';

var config = {
    apiKey: "AIzaSyDc2HZZUFaxPb5PS0Qfur85ZnwGNdNQzSM",
    authDomain: "atom-hr.firebaseapp.com",
    databaseURL: "https://atom-hr.firebaseio.com",
    projectId: "atom-hr",
    storageBucket: "atom-hr.appspot.com",
    messagingSenderId: "809115354997"
  };
 
var fire = firebase.initializeApp(config);

const db = firebase.firestore();
const docRef = db.doc("samples/anduData");
const outputHeader = document.querySelector("#anduOutput");
const inputTextField = document.querySelector("#latestAnduStatus");
const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click", function() {
  const textToSave = inputTextField.value;
  console.log("I am going to save" + textToSave + " to firestore");
  docRef.set({
    anduStatus: textToSave
  }).then(function(){
    console.log("status saved")
  }).catch(function(error){
    console.log("error",error);
  })

})


export default fire;