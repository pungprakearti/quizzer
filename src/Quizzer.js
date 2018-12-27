import React, { Component } from 'react';
import QuizHeader from './QuizHeader';
import Quiz from './Quiz';
import parseQuestions from './parseQuestions';
import QuizFooter from './QuizFooter';
import { Stats } from 'fs';

export default class Quizzer extends Component {
  constructor(props) {
    super(props);
    this.questions = {};
    this.qQrder = [];
    this.qNum = 0;
    this.wrongList = [];
    this.state = { loading: true };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    //get questions and give them uuid's.
    this.questions = parseQuestions();

    //uuids are random, so sorting the keys gives a random order to questions
    this.qOrder = Object.keys(this.questions).sort();

    this.setState({ loading: false });
  }

  handleClick(evt, id) {
    evt.preventDefault();
    if (evt.target.name === 'wrong') {
      this.wrongList.push(id);
    }
    this.qNum++;
  }

  render() {
    if (!this.state.loading) {
      let question = this.questions[this.qOrder[this.qNum]];
      console.log(
        'this.qNum is: ',
        this.qNum,
        ' this.questions.length is: ',
        this.qOrder.length
      );
      return this.qNum <= this.qOrder.length ? (
        <Quiz
          question={question}
          category={question.category}
          handleClick={this.handleClick}
          numRemaining={`${this.qNum + 1} / ${this.qOrder.length}`}
        />
      ) : (
        <Stats />
      );
    } else {
      console.log('loading');
      return 'Loading';
    }
  }
}
