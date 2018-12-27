import React, { Component } from 'react';
import QuizHeader from './QuizHeader';
import Quiz from './Quiz';
import uuid from 'uuid/v4';

export default class Quizzer extends Component {
  constructor(props) {
    super(props);

    this.ids = [uuid()];
    this.state = {
      questions: {
        [this.ids[0]]: {
          JavaScript: {
            q: 'What is the difference between map and filter?',
            a:
              '.map() runs a callback on each item and returns a new array with said items. ' +
              '.filter() returns an array of the same or smaller length based on a callback that' +
              'evaluates to a boolean.',
            priority: 0
          }
        }
      }
    };
  }

  componentDidMount() {
    //if questions in localstorage, set state to that. Else use the defaults
    console.log(this.state);
  }
  render() {
    return JSON.stringify(this.state.questions);
  }
}
