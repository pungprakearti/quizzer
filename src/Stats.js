import React, { Component } from 'react';
import QLink from './QLink';
import './Stats.css';
import QuizHeader from './QuizHeader';
import QuizFooter from './QuizFooter';
import Review from './Review';
import Quiz from './Quiz';

export default class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = { showReview: false, q: {} };
    this.showReview = this.showReview.bind(this);
    this.summary = this.summary.bind(this);
    this.review = '';
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
    // this.review = <Review q={q} question={this.props.questions[q]} />;
    this.review = (
      <Quiz
        question={this.props.questions[q]}
        category="Review"
        // nextQuestion={this.nextQuestion}
        // wrongAnswer={this.wrongAnswer}
        summary={this.summary}
        header={q}
        qID={q}
      />
    );
  }

  summary() {
    this.setState({ showReview: false });
  }

  render() {
    let questions = this.sortQuestions();
    let total = Object.keys(this.props.questions).length;
    return this.state.showReview ? (
      this.review
    ) : (
      <div className="Stats-cont">
        <QuizHeader
          header={`${this.props.currCorrect} / ${total}`}
          category="quiz summary"
        />
        <div className="Stats-review-cont">
          Questions to review
          <br />
          <br />
          {questions.reverse().map(q => {
            return (
              <React.Fragment key={q[0]}>
                <QLink
                  q={q}
                  questions={this.props.questions}
                  showReview={this.showReview}
                />
              </React.Fragment>
            );
          })}
        </div>
        <QuizFooter restart={this.props.restart} />
      </div>
    );
  }
}
