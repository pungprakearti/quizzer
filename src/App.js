import React, { Component } from 'react';
import './App.css';
import Quizzer from './Quizzer';
import parseQuestions from './parseQuestions';

class App extends Component {
  render() {
    const localPath = '/data/questions.txt';
    parseQuestions();
    return (
      <div className="App">
        <Quizzer />
      </div>
    );
  }
}

export default App;
