import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  state= {
    eventNumber: 32
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ eventNumber: value });

    if (value < 1 || !value) {
      this.setState({
        warningText: 'Value must be at least 1'
      })
      this.props.updateCount(1)
    } else if (value > 250) {
      this.setState({
        warningText: 'Value must be less than 250'
      })
      this.props.updateCount(250)
    } else {
      this.setState({
        warningText: ''
      })
      this.props.updateCount(value);
    }  
  }

  render() {
    
    return (
      <div className="NumberOfEvents">
        <ErrorAlert text={this.state.warningText} />
        <div>
          Show
          <input 
            type="number"
            className="totalEvents"
            value={this.state.eventNumber}
            onChange={this.handleInputChanged}
          />
          Events
        </div>
      </div>
    );
  }
}

export default NumberOfEvents