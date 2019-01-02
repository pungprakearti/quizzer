import React, { Component } from 'react';
import parseQuestions, { shuffle } from './parseQuestions';
import Quizzer from './Quizzer';
import Stats from './Stats';
import './Start.css';

export default class Start extends Component {
  constructor(props) {
    super(props);

    this.state = { show: '' };

    this.handleClick = this.handleClick.bind(this);
    this.returnStart = this.returnStart.bind(this);
  }

  componentDidMount() {
    //create POJO from questions data
    this.questions = parseQuestions();

    //shuffle keys and store
    this.qOrder = shuffle(Object.keys(this.questions));
  }

  returnStart() {
    this.setState({
      show: ''
    });
  }

  handleClick(evt) {
    if (evt.target.textContent !== 'summary') {
      if (evt.target.textContent === 'quick') {
        this.qOrder = this.qOrder.slice(0, this.qOrder.length / 3);
      }

      if (evt.target.textContent === 'half') {
        this.qOrder = this.qOrder.slice(0, this.qOrder.length / 2);
      }

      //remap questions with new qOrder
      this.newQuestions = {};
      for (let qID of this.qOrder) {
        let question = this.questions[qID];
        this.newQuestions = {
          ...this.newQuestions,
          [qID]: {
            q: question.q,
            a: question.a,
            category: question.category
          }
        };
      }

      this.setState({
        show: (
          <Quizzer
            qOrder={this.qOrder}
            newQuestions={this.newQuestions}
            questions={this.questions}
          />
        )
      });
    } else {
      this.setState({
        show: (
          <Stats
            questions={this.questions}
            currCorrect={0}
            returnStart={this.returnStart}
            total={this.qOrder.length}
          />
        )
      });
    }
  }

  render() {
    return (
      <div className="Mobile-cont">
        {!this.state.show ? (
          <div className="Start-cont">
            <div className="Start-header">Web Development Quizzer</div>
            <div
              className="Start-btn"
              style={{ backgroundColor: 'rgb(48, 108, 103)' }}
              onClick={this.handleClick}
            >
              quick
            </div>
            <div
              className="Start-btn"
              style={{ backgroundColor: 'rgb(39, 133, 170)' }}
              onClick={this.handleClick}
            >
              half
            </div>
            <div
              className="Start-btn"
              style={{ backgroundColor: 'rgb(103, 84, 160)' }}
              onClick={this.handleClick}
            >
              full
            </div>
            <div
              className="Start-btn"
              style={{ backgroundColor: 'rgb(150, 105, 66)' }}
              onClick={this.handleClick}
            >
              summary
            </div>
            <div className="Start-footer">
              <a href="https://github.com/pungprakearti/quizzer">github repo</a>
            </div>
          </div>
        ) : (
          this.state.show
        )}
      </div>
    );

    // return this.state.show;
  }
}

//style={{ backgroundColor: 'rgb(150, 105, 66)'}}
