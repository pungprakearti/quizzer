import React, { Component } from 'react';
import QuizHeader from './QuizHeader';
import QuizFooter from './QuizFooter';

export default class Quiz extends Component {
  render() {
    console.log('getting to Quiz');
    return (
      <div className="Mobile-cont">
        <QuizHeader
          category={this.props.category}
          numRemaining={this.props.numRemaining}
        />
        <div className="Quiz-question">{this.props.question.q}</div>
        <div className="Quiz-answer">{this.props.question.a}</div>
        <QuizFooter handleClick={this.props.handleClick} />
      </div>
    );
  }
}
