import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire';
import firebase from 'firebase';
import firestore from 'firebase/firestore';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Jumbotron } from 'reactstrap';
import Questions from './questions';



class Radio1to5 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: props.value,
        question: props.question,
        handleChange: props.handleChange
      }
      this.handleChange=this.handleChange.bind(this);

    }

    handleChange(value) {
        this.state.handleChange(this.state.question.id, value);
        console.log(value)

    }
    
    render(){
      return(
        
          <React.Fragment>
            <h2>{this.state.question.question}</h2>
            <div className="btn-group" data-toggle="buttons">
              <label className="btn btn-primary active">
                <input type="radio" name="options" id="option1" autoComplete="off" onClick={this.handleChange} value={1} /> 1
              </label>
              <label className="btn btn-primary">
                <input type="radio" name="options" id="option2" autoComplete="off" onClick={this.handleChange} value={2} /> 2
              </label>
              <label className="btn btn-primary">
                <input type="radio" name="options" id="option3" autoComplete="off" onClick={this.handleChange} value={3} /> 3
              </label>
            </div>
          </React.Fragment>
        
      );
    }
  }

  export default Radio1to5;