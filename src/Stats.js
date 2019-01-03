import React, { Component } from 'react';
import QLink from './QLink';
import './Stats.css';
import QuizHeader from './QuizHeader';
import QuizFooter from './QuizFooter';
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
    this.review = (
      <Quiz
        question={this.props.questions[q]}
        category="review"
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
    let total = this.props.total;

    //Check if there are any wrong answers to review.
    let qToReview;
    if (questions.length > 0) {
      qToReview = (
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
      );

      //No wrong answers, time to apply for more jobs!
    } else {
      qToReview = (
        <div className="Mobile-border" style={{ flexDirection: 'column' }}>
          <div style={{ fontSize: '50px', fontWeight: 'bold' }}>100%</div>
          <br />
          You're all caught up.
          <br />
          <br />
          Get a job already you bum!
        </div>
      );
    }

    return this.state.showReview ? (
      this.review
    ) : (
      <div className="Stats-cont">
        <QuizHeader
          header={`${this.props.currCorrect} / ${total}`}
          category="quiz summary"
        />
        {qToReview}
        <QuizFooter returnStart={this.props.returnStart} />
      </div>
    );
  }
}
