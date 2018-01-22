import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire';
import firebase from 'firebase';
import firestore from 'firebase/firestore';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Jumbotron } from 'reactstrap';
import { RingLoader } from 'react-spinners';
import Radio1to5 from './Radio1to5';

  class Questions extends Component {
    constructor() {
      super();
      this.state = { answers: { likesboss: 2 } }

      this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount(){

        var db = firebase.firestore();
        const docRef = db.doc("tests/egyszeru-kultura");
        var _this = this;
        docRef.get().then(function(doc){
          if (doc && doc.exists) {
            const stuff = doc.data();
            _this.setState({stuff: stuff});
            
            
          }
        }).catch(function(error) {
            console.log("fk this...", error);
          })
    }


    handleChange(id, value) {
      console.log(id+"="+ value);
    }
    
    renderAllQuestions() {      
      var things= this.state.stuff.questions;
      const listItems = things.map((q) => 
        <Radio1to5 key={q.question} question={q} value={this.state.answers[q.id]} handleChange={this.handleChange} />
      );     
          
      
      return(
        <div>
          <p>Kérdések:</p>
          {listItems}
        </div>
      )
    }



    render(){
      if (this.state.stuff) {
        return(
          <div>
            {this.renderAllQuestions()}
          </div> 
          );  
      } else {
        return(
          <div>
            <RingLoader color={'#123abc'}/>
          </div> 
        );

      }
    }

}





  export default Questions;