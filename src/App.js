import React, { Component } from 'react';
import './css/App.css'
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import {getEvents, checkStatus} from './api'
import {CautionAlert} from './Alert'

class App extends Component {

  state ={
    events: [],
    lat: null,
    lon: null,
    num: 32,
    cautionText: ''
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
    getEvents().then(events  => this.setState({ events }))
  }

  componentDidUpdate () {
    let offline = checkStatus();
    if (offline !== this.state.lastCheck) {
      if (offline) {
        this.setState({
          cautionText: 'WARNING: App is running offline. Events will not update until you connect to the internet.'
        })
      } else {
        this.setState({ cautionText: '' })
      }
      this.setState ({lastCheck: offline})
    }
  }

  render () {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents updateCount={this.updateCount}/>
        <CautionAlert text={this.state.cautionText} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
