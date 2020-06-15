import React, { Component } from 'react';
import './css/App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import {getEvents, checkStatus} from './api';
import {CautionAlert} from './Alert';
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import moment from 'moment';

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
      this.changeCautionText(offline);
      this.setState ({lastCheck: offline})
    }
  }

  changeCautionText(offline) {
      if (offline) {
        this.setState({
          cautionText: 'WARNING: App is running offline. Events will not update until you connect to the internet.'
        })
      } else {
        this.setState({ cautionText: '' })
      }
  }

  countEvents = (date) => {
    let count = 0;
    for (let i = 0; i < this.state.events.length; i += 1) {
      if (this.state.events[i].local_date === date) {
        count += 1;
      }
    }
    return count;
  }

  getData = () => {
    const next7Days = [];
    const currentDate = moment();
    // for loop to give next 7 days
    for (let i = 0; i < 7; i += 1) {
      // Add 1 day to current day, changing current day to +1
      currentDate.add(1, 'days'); 
      const dateString = currentDate.format('YYYY-MM-DD');
      // Uses countEvents to give other axis for table
      const count = this.countEvents(dateString);
      next7Days.push({ date: dateString, number: count });
    }
    return next7Days;
  }

  render () {
    console.log(this.state.cautionText)
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} changeCautionText={offline => this.changeCautionText(offline)}/>
        <NumberOfEvents updateCount={this.updateCount} changeCautionText={offline => this.changeCautionText(offline)}/>
        <CautionAlert text={this.state.cautionText} />
        <ResponsiveContainer height={400}>
          <ScatterChart
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="category" dataKey="date" name="date" />
            <YAxis type="number" dataKey="number" name="number of events" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
