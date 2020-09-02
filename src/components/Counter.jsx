import React, { Component } from 'react';
import '../style/MemorizeBoard.css';

class Counter extends Component {
  render() {
    return (
      <div>
        <p className="tries">Intentos: {this.props.triesNumber}</p>
      </div>
    );
  }
}

export default Counter;