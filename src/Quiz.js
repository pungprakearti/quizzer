import React, { Component } from 'react';
import QuizHeader from './QuizHeader';
import QuizFooter from './QuizFooter';

export default class Quiz extends Component {
  render() {
    return (
      <div className="Mobile-cont">
        <QuizHeader />
        <QuizFooter />
      </div>
    );
  }
}
