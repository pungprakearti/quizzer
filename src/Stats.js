import React, { Component } from 'react';
import QLink from './QLink';
import './Stats.css';
import QuizHeader from './QuizHeader';
import QuizFooter from './QuizFooter';

export default class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = { showReview: false, q: {} };
  }

  sortQuestions() {
    let localArray = Object.keys(localStorage).map(key => {
      return [key, +localStorage[key]];
    });
    localArray.sort(function(a, b) {
      return a[1] - b[1];
    });
    return localArray;
  }

  showReview(q) {
    this.setState({ showReview: true, q });
  }

  render() {
    let questions = this.sortQuestions();
    let total = Object.keys(this.props.questions).length;
    return this.state.showReview ? (
      <div className="Stats-cont">
        <QuizHeader
          header={`${this.props.currCorrect} / ${total}`}
          category="quiz summary"
        />
        <div className="Stats-review-cont">
          Questions to review
          <br />
          {questions.reverse().map(q => {
            return (
              <React.Fragment>
                <QLink q={q} questions={this.props.questions} />
              </React.Fragment>
            );
          })}
        </div>
        <QuizFooter restart={this.props.restart} />
      </div>
    ) : (
      ''
    );
  }
}
