import React, { Component } from 'react';
import './App.css';
import Quizzer from './Quizzer';
import Start from './Start';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Start />
        {/* <Quizzer /> */}
      </div>
    );
  }
}

export default App;
