import React, { Component } from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';


class Event extends Component {

  state = {
    extend: false
  }

  findDetails = () => {
    this.setState({
      extend: true
    });
  };

  hideDetails = () => {
    this.setState({
      extend: false
    });
  }

  render() {

    let {extend} = this.state
    let {event} = this.props

    let description = event.description
    description = description.replace(/<[^>]+>/g, '');
    
    let data = [
      { name: 'Availability', value: (event.rsvp_limit - event.yes_rsvp_count) },
      { name: 'RSVP Yes', value: (event.yes_rsvp_count) }
    ];

    if (extend === false && event.rsvp_limit) {
      return (
        <div className="event" key={event.id}>
          <div className="dateAndTime">{event.local_time} - {event.local_date}</div>
          <div className="eventName">{event.name}</div>
          <div className="groupName">Group: {event.group.name}</div>
          <div className="peopleGoing">{event.yes_rsvp_count} people are going</div>
          <PieChart width={150} height={75}>
            <Pie dataKey="value" isAnimationActive={false} data={data} outerRadius={32} fill='#0000FF' label />
            <Tooltip />
          </PieChart>
          <button className="detailsBtn" onClick={ () => this.findDetails() }>Details</button>
        </div>
      )
    }

    if (extend === false && !event.rsvp_limit) {  
      return (
        <div className="event" key={event.id}>
          <div className="dateAndTime">{event.local_time} - {event.local_date}</div>
          <div className="eventName">{event.name}</div>
          <div className="groupName">Group: {event.group.name}</div>
          <div className="peopleGoing">{event.yes_rsvp_count} people are going</div>
          <button className="detailsBtn" onClick={ () => this.findDetails() }>Details</button>
        </div>
      )    
    }
    
    if (extend === true && event.venue !== undefined) {
      return (
        <div className="event" key={event.id}>
          <div className="dateAndTime">{event.local_time} - {event.local_date}</div>
          <div className="eventName">{event.name}</div>
          <div className="groupName">Group: {event.group.name}</div>
          <div className="peopleGoing">{event.yes_rsvp_count} people are going</div>
          <div className="address">{event.venue.address_1}, {event.venue.city}, {event.venue.state} {event.venue.zip}</div>
          <div className="description">{description}</div>
          <div className="visibility">{event.visibility}</div>
          <div><a className="link" href={event.link} target="_blank" rel="noopener noreferrer">Event link</a></div>
          <button className="closeBtn" onClick={ () => this.hideDetails() }>Close</button>
        </div>
      )
    } else {
      return (
        <div className="event" key={event.id}>
          <div className="dateAndTime">{event.local_time} - {event.local_date}</div>
          <div className="eventName">{event.name}</div>
          <div className="groupName">Group: {event.group.name}</div>
          <div className="peopleGoing">{event.yes_rsvp_count} people are going</div>
          <div className="description">{description}</div>
          <div className="visibility">{event.visibility}</div>
          <div><a className="link" href={event.link} target="_blank" rel="noopener noreferrer">Event link</a></div>
          <button className="closeBtn" onClick={ () => this.hideDetails() }>Close</button>
        </div>
      )
    }
  }

}

export default Event;

// Event used just in case needed again

// event: [
//   {
//     "created": 1584626377000,
//     "duration": 5400000,
//     "id": "hrzvqrybchbcc",
//     "name": "Featured Speaker this week:  RICK MELVILLE of Fairway Independent Mortgage Co!",
//     "date_in_series_pattern": false,
//     "status": "upcoming",
//     "time": 1589455800000,
//     "local_date": "2020-05-14",
//     "local_time": "07:30",
//     "updated": 1584629708000,
//     "utc_offset": -14400000,
//     "waitlist_count": 0,
//     "yes_rsvp_count": 1,
//     "venue": {
//       "id": 26065470,
//       "name": "Beantown Tavern",
//       "lat": 35.11639404296875,
//       "lon": -80.71941375732422,
//       "repinned": true,
//       "address_1": "130 Matthews Station St",
//       "city": "Matthews",
//       "country": "us",
//       "localized_country_name": "USA",
//       "zip": "28105",
//       "state": "NC"
//     },
//     "group": {
//       "created": 1429194833000,
//       "name": "Business Links BNI",
//       "id": 18550364,
//       "join_mode": "open",
//       "lat": 35.060001373291016,
//       "lon": -80.80999755859375,
//       "urlname": "Business-Links-BNI",
//       "who": "Member",
//       "localized_location": "Charlotte, NC",
//       "state": "NC",
//       "country": "us",
//       "region": "en_US",
//       "timezone": "US/Eastern"
//     },
//     "link": "https://www.meetup.com/Business-Links-BNI/events/hrzvqrybchbcc/",
//     "description": "<p>COME VISIT one of the most exciting BNI groups in the Charlotte NC area! We meet at Panera Bread, 3207 Pineville-Matthews Rd, Charlotte, NC 28226 @ 7:30 a.m. every Thursday morning.</p> <p>We have a dynamic, “family like” group which enjoys meeting and helping one another grow our businesses. We believe that “givers” truly do “gain”.</p> <p>If you are a best-of-class business professional, interested in adding about 35 new people to your marketing team, consider joining us! Allow us to share with you … all our contacts and prospects. Let’s grow our businesses together!</p> <p>Feel free to reach out to me if you would like to learn more. I’d love to meet you and see how we can help. How you have a FANTASTIC day! (Bob Barton Cell:[masked])</p> <p>Thank you.</p> <p>Bob Barton, BNI Business Links<br/>Secretary/Treasurer</p> ",
//     "visibility": "public",
//     "member_pay_fee": false
//   }
// ]