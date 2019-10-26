import React, { Component } from "react";

class ClassCounter extends Component {
  state = {
    counter: 0
  };

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <button onClick={this.incrementCounter}>
        Count {this.state.counter}
      </button>
    );
  }
}

export default ClassCounter;
