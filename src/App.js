import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire';
import firebase from 'firebase';
import firestore from 'firebase/firestore';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Jumbotron } from 'reactstrap';
import Questions from './questions';


class App extends Component {
  constructor() {
    super();
    this.state = {template: "loading..."} 
    
  }

  componentDidMount() {
    var id = this.getIdFromUrl();
    var db = firebase.firestore();
    const docRef = db.doc("forms/"+id);
    var _this = this;
    docRef.get().then(function(doc){
      if (doc && doc.exists) {
        const stuff = doc.data();
        _this.setState({template: stuff.template});

      }
    }).catch(function(error){
        console.log("fk this...", error);
      })
    
  }

  getIdFromUrl(url)  {
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
    var obj = {};
    if (queryString) {
      queryString = queryString.split('#')[0];
      var arr = queryString.split('&');
      for (var i=0; i<arr.length; i++) {
        var a = arr[i].split('=');
        var paramValue = typeof(a[1])==='undefined' ? true : a[1];
        obj = paramValue;
      }
    }
    return obj;
  }



  render() {
    return (
      <div>
        <Jumbotron>
          <Questions />
        </Jumbotron>
      </div>
    );
  }

  

}

export default App;
