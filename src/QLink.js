import React, { Component } from 'react';
import './QLink.css';

export default class QLink extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.showReview(this.props.q[0]);
  }
  render() {
    return (
      <div className="QLink-cont" onClick={this.handleClick}>
        <div>{this.props.q[0]}</div>
        <div>-{this.props.q[1]}</div>
      </div>
    );
  }
}
