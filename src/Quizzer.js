import React, { Component } from 'react';
import Quiz from './Quiz';
import Stats from './Stats';

export default class Quizzer extends Component {
  constructor(props) {
    super(props);
    this.questions = this.props.questions;
    this.qOrder = this.props.qOrder;
    this.currCorrect = 0;
    this.state = { loading: false, qNum: 0 };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.wrongAnswer = this.wrongAnswer.bind(this);
    this.correctAnswer = this.correctAnswer.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  nextQuestion() {
    this.setState(st => ({ qNum: st.qNum + 1 }));
  }

  correctAnswer(qID) {
    if (localStorage[qID]) localStorage.setItem(qID, +localStorage[qID] - 1);
    if (localStorage[qID] <= 0) localStorage.removeItem(qID);
    this.currCorrect++;
    this.nextQuestion();
  }

  wrongAnswer(qID) {
    if (localStorage[qID]) localStorage.setItem(qID, +localStorage[qID] + 1);
    else localStorage.setItem(qID, 1);
    this.nextQuestion();
  }

  render() {
    let question = this.props.questions[this.props.qOrder[this.state.qNum]];

    //if there are still questions
    return this.state.qNum < this.props.qOrder.length ? (
      <Quiz
        question={question}
        category={question.category}
        correctAnswer={this.correctAnswer}
        wrongAnswer={this.wrongAnswer}
        header={`${this.state.qNum + 1} / ${this.qOrder.length}`}
        qID={this.qOrder[this.state.qNum]}
        returnStart={this.props.returnStart}
      />
    ) : (
      <Stats
        questions={this.props.questions}
        total={this.qOrder.length}
        currCorrect={this.currCorrect}
        returnStart={this.props.returnStart}
      />
    );
  }
}
