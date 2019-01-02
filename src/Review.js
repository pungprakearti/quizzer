import React, { Component } from 'react';
import QuizHeader from './QuizHeader';
import QuizFooter from './QuizFooter';

export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = { showQuestion: true };
  }
  render() {
    console.log(this.props);
    return (
      <div className="Stats-cont">
        <QuizHeader header={this.props.q} category="Review" />
        <div className="Stats-review-cont">
          {/* <div className="Mobile-border"> */}
          {this.state.showQuestion ? (
            <React.Fragment>
              <div className="Quiz-question">{this.props.question.q}</div>
              <div className="Quiz-answer hide">{this.props.question.a}</div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="Quiz-question hide">{this.props.question.q}</div>
              <div className="Quiz-answer">{this.props.question.a}</div>
            </React.Fragment>
          )}
          {/* </div> */}
        </div>
        <QuizFooter />
      </div>
    );
  }
}
