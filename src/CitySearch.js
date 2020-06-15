import React, { Component } from 'react';
import {getSuggestions, checkStatus} from './api';
import {InfoAlert} from './Alert';

class CitySearch extends Component {

  state = {
    query: '',
    suggestions: []
  }

  handleInputChanged = (event) => {

    const value = event.target.value;
    this.setState({ query: value });
      
    let offline = checkStatus();
    this.props.changeCautionText(offline);

    if (!offline) {
      getSuggestions(value).then(suggestions => {
        this.setState({ suggestions });
        if (value && value.length === 1){
          this.setState({
            infoText: 'Search must have at least 2 characters'
          })
        } else if (value && suggestions.length === 0) {
          this.setState({
            infoText: 'No city was found that matched your search. Please try again.',
          });
        } else {
          this.setState({
            infoText: '',
          });
        }
      });
    }
  }

  handleItemClicked = (value, lat, lon) => {
    this.setState({ query: value, suggestions: [] });
    this.props.updateEvents(lat, lon);
  }

  render() {
    
    return (
      <div className="CitySearch">
        <InfoAlert text={this.state.infoText} />
        <input 
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
        <ul className="suggestions">
          {this.state.suggestions.map(item =>
            <li 
              key={item.name_string}
              onClick= {() => {
                this.handleItemClicked(item.name_string, item.lat, item.lon)
              }}
            >
              {item.name_string}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default CitySearch