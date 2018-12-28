import React, { Component } from 'react';
import Quiz from './Quiz';
import parseQuestions, { shuffle } from './parseQuestions';
// import QuizHeader from './QuizHeader';
// import QuizFooter from './QuizFooter';
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
    //create POJO from questions data
    this.questions = parseQuestions();

    //shuffle keys and store
    this.qOrder = shuffle(Object.keys(this.questions));

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
