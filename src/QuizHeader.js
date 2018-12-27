import React, { Component } from 'react';

export default class QuizHeader extends Component {
  render() {
    return (
      <div>
        {this.props.category}
        <br />
        {this.props.numRemaining}
      </div>
    );
  }
}
