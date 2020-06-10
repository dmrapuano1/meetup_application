import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  state= {
    eventNumber: 32
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ eventNumber: value });

    if (value < 0 || value == 0 || !value) {
      this.setState({
        infoText: 'Value must be at least 1'
      })
      this.props.updateCount(1)
    } else if (value > 250) {
      this.setState({
        infoText: 'Value must be less than 250'
      })
      this.props.updateCount(250)
    } else {
      this.setState({
        infoText: ''
      })
      this.props.updateCount(value);
    }
  }

  render() {
    
    return (
      <div className="NumberOfEvents">
        <ErrorAlert text={this.state.infoText} />
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