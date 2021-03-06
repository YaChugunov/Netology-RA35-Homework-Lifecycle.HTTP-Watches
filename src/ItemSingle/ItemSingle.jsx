import React, { useEffect, useState } from 'react';
import moment from 'moment';

import ItemClass from '../ItemClass/ItemClass';

export default class ItemSingle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
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
      date: new Date(),
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
        <div className="itemWatch">
          {/* {moment().utcOffset(this.timezone, true).format('HH:mm:ss')} */}
          {this.state.date.getHours() +
            ':' +
            this.state.date.getMinutes() +
            ':' +
            this.state.date.getSeconds()}
        </div>
      </div>
    );
  }
}
