import React, { useEffect, useState } from 'react';
import moment from 'moment';

import ItemClass from '../ItemClass/ItemClass';

export default class ItemSingle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate(oldProps, oldState) {}

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    return (
      <div className="Item">
        <div className="itemTitle">
          {this.props.title}
          <span className="remove" onClick={this.props.onRemove}>
            X
          </span>
        </div>
        <div className="itemWatch">hoursGMT0: {this.props.hoursGMT0}</div>
        <div className="itemWatch">hoursDiff: {this.props.hoursDiff}</div>
        <div className="itemWatch">TIME: {this.state.time}</div>
      </div>
    );
  }
}
