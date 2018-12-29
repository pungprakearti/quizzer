import React, { Component } from 'react';
import './QLink.css';

export default class QLink extends Component {
  render() {
    return (
      <div className="QLink-cont">
        <div>{this.props.q[0]}</div>
        <div>-{this.props.q[1]}</div>
      </div>
    );
  }
}
