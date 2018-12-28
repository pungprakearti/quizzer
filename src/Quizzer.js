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
    this.state = { loading: true, qNum: 0 };
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentDidMount() {
    //get questions and give them uuid's.
    this.questions = parseQuestions();

    //uuids are random, so sorting the keys gives a random order to questions
    this.qOrder = Object.keys(this.questions).sort();

    this.setState({ loading: false });
  }

  nextQuestion() {
    this.setState(st => ({ qNum: st.qNum + 1 }));
  }

  render() {
    if (!this.state.loading) {
      let question = this.questions[this.qOrder[this.state.qNum]];

      return this.qNum <= this.qOrder.length ? (
        <div className="Mobile-cont">
          <Quiz
            question={question}
            category={question.category}
            nextQuestion={this.nextQuestion}
            numRemaining={`${this.state.qNum + 1} / ${this.qOrder.length}`}
          />
        </div>
      ) : (
        <div className="Mobile-cont">
          <Stats />
        </div>
      );
    } else {
      console.log('loading');
      return 'Loading';
    }
  }
}
