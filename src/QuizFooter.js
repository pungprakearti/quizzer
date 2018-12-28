import React, { Component } from 'react';
import './QuizFooter.css';
import { FaCheck, FaTimes } from 'react-icons/fa';

export default class QuizFooter extends Component {
  constructor(props) {
    super(props);
    this.state = { showQuestion: true };
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleX = this.handleX.bind(this);
  }

  handleAnswer() {
    this.props.toggleAnswer();
    this.setState({ showQuestion: false });
  }

  handleCheck() {
    this.props.nextQuestion();
    this.setState({ showQuestion: true });
    this.props.toggleAnswer();
  }

  handleX() {}

  render() {
    return (
      <div className="QuizFooter-cont">
        {this.state.showQuestion ? (
          <React.Fragment>
            <div className="QuizFooter-answer" onClick={this.handleAnswer}>
              answer
            </div>
            <div className="QuizFooter-check hide">
              <FaCheck />
            </div>
            <div className="QuizFooter-x hide">
              <FaTimes />
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="QuizFooter-answer hide">answer</div>
            <div className="QuizFooter-check" onClick={this.handleCheck}>
              <FaCheck />
            </div>
            <div className="QuizFooter-x" onClick={this.handleX}>
              <FaTimes />
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}
