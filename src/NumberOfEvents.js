import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state= {
    eventNumber: 32
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ eventNumber: value });
    this.props.updateCount(value);
  }

  render() {
    
    return (
      <div className="NumberOfEvents">
        Show
        <input 
          type="number"
          className="totalEvents"
          value={this.state.eventNumber}
          onChange={this.handleInputChanged}
        />
        Events
      </div>
    );
  }
}

export default NumberOfEvents