import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import './QuizHeader.css';

export default class QuizHeader extends Component {
  render() {
    let x;
    if (
      this.props.category !== 'quiz summary' &&
      this.props.category !== 'review'
    ) {
      x = (
        <div className="QuizHeader-x" onClick={this.props.returnStart}>
          <FaTimes />
        </div>
      );
    }
    return (
      <div className="QuizHeader-cont">
        {x}
        <div className="QuizHeader-header">{this.props.header}</div>
        <div className="QuizHeader-category">{this.props.category}</div>
      </div>
    );
  }
}
