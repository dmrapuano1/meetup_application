import React, { Component } from 'react';
import './css/App.css'
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import {getEvents} from './api'

class App extends Component {

  state ={
    events: [],
    lat: null,
    lon: null,
    num: 32
  }

  updateEvents = (lat, lon) => {
    getEvents(lat, lon, this.state.num).then(events => this.setState({ events }));
    this.setState({ lat, lon });
  }

  updateCount = (num) => {
    getEvents(this.state.lat, this.state.lon, num).then(events => this.setState({ events }));
    this.setState({ num });
  }

  componentDidMount () {
    getEvents().then(events => this.setState({ events }));
  }

  render () {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents updateCount={this.updateCount}/>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
