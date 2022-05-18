import React, { useEffect, useState } from 'react';
import moment from 'moment';

import ItemClass from '../ItemClass/ItemClass';

export default class ItemSingle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time,
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
      time: moment(this.props.time).add(this.props.timezone, 'hours'),
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
        <div className="itemWatch">{this.state.time}</div>
      </div>
    );
  }
}
