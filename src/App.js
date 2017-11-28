import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire';
import firebase from 'firebase';
import firestore from 'firebase/firestore';

class App extends Component {
  constructor() {
    super();
    this.state = { anduStatus : "...loading..." };
    this.savePressed = this.savePressed.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World!</h1>
        </header>
        <div>
          <h1 className="anduOutput"> Andu egy:</h1>
          <input type="textfield" id="latestAnduStatus" value={this.state.anduStatus} onChange={this.handleChange} />
          <button id="saveButton" onClick={this.savePressed}> save </button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    var db = firebase.firestore();
    const docRef = db.doc("samples/anduData");
    var _this = this;
    docRef.get().then(function(doc){
      if (doc && doc.exists) {
        const anduData = doc.data();
        _this.setState({anduStatus: anduData});
      }
    })
    
  }
  
  handleChange(event) {
    this.setState({ anduStatus : event.target.value });
  }

  savePressed() {
    var db = firebase.firestore();
    const textToSave = this.state.anduStatus;
    console.log("I am going to save " + textToSave + " to firestore");
    const docRef = db.doc("samples/anduData");
    docRef.set({
      anduStatus: textToSave
    }).then(function(){
      console.log("status saved")
    }).catch(function(error){
      console.log("error",error);
    })
  }

}

export default App;
