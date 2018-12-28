import React, { Component } from 'react';
import './QuizHeader.css';

export default class QuizHeader extends Component {
  render() {
    return (
      <div className="QuizHeader-cont">
        <div className="QuizHeader-numRemaining">{this.props.numRemaining}</div>
        <div className="QuizHeader-category">{this.props.category}</div>
      </div>
    );
  }
}
