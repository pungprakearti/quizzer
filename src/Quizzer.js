import React, { Component } from 'react';
import Quiz from './Quiz';
import parseQuestions, { shuffle } from './parseQuestions';
// import QuizHeader from './QuizHeader';
// import QuizFooter from './QuizFooter';
import Stats from './Stats';

export default class Quizzer extends Component {
  constructor(props) {
    super(props);
    this.questions = {};
    this.qQrder = [];
    this.currCorrect = 0;
    this.state = { loading: true, qNum: 0 };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.wrongAnswer = this.wrongAnswer.bind(this);
    this.restart = this.restart.bind(this);
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
    this.currCorrect++;
  }

  wrongAnswer(qID) {
    if (localStorage[qID]) localStorage.setItem(qID, +localStorage[qID] + 1);
    else localStorage.setItem(qID, 1);
    this.nextQuestion();
    this.currCorrect--;
  }

  restart() {
    //shuffle keys and store
    this.qOrder = shuffle(Object.keys(this.questions));
    this.setState({ qNum: 0 });
    this.currCorrect = 0;
  }

  render() {
    if (!this.state.loading) {
      let question = this.questions[this.qOrder[this.state.qNum]];

      //if there are still questions
      return this.state.qNum < this.qOrder.length ? (
        <div className="Mobile-cont">
          <Quiz
            question={question}
            category={question.category}
            nextQuestion={this.nextQuestion}
            wrongAnswer={this.wrongAnswer}
            header={`${this.state.qNum + 1} / ${this.qOrder.length}`}
            qID={this.qOrder[this.state.qNum]}
          />
        </div>
      ) : (
        <div className="Mobile-cont">
          <Stats
            questions={this.questions}
            currCorrect={this.currCorrect}
            restart={this.restart}
          />
        </div>
      );
    } else {
      console.log('loading');
      return 'Loading';
    }
  }
}
