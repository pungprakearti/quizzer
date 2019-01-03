import React, { Component } from 'react';
import QuizHeader from './QuizHeader';
import QuizFooter from './QuizFooter';

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { showQuestion: true };
    this.toggleAnswer = this.toggleAnswer.bind(this);
  }

  toggleAnswer() {
    if (this.state.showQuestion) this.setState({ showQuestion: false });
    else this.setState({ showQuestion: true });
  }

  render() {
    return (
      <React.Fragment>
        <QuizHeader
          category={this.props.category}
          header={this.props.header}
          returnStart={this.props.returnStart}
        />
        <div className="Mobile-border">
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
        </div>
        <QuizFooter
          correctAnswer={this.props.correctAnswer}
          toggleAnswer={this.toggleAnswer}
          wrongAnswer={this.props.wrongAnswer}
          summary={this.props.summary}
          qID={this.props.qID}
        />
      </React.Fragment>
    );
  }
}
