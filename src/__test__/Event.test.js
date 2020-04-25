import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Event from '../Event';

describe('<Event /> component', () => {

  let EventWrapper
  let event={
    "id": "hrzvqrybchbcc",
    "name": "Featured Speaker this week:  RICK MELVILLE of Fairway Independent Mortgage Co!",
    "local_date": "2020-05-14",
    "local_time": "07:30",
    "yes_rsvp_count": 1,
    "group": {
      "name": "Business Links BNI"
    }
  }

  beforeAll(() => {
    EventWrapper = shallow(<Event event={event} />)
  })

  test('render events', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('event date and time renders', () => {
    expect(EventWrapper.find('.dateAndTime').text()).toBe('07:30 - 2020-05-14');
  });

  test('event name renders', () => {
    expect(EventWrapper.find('.eventName').text()).toBe('Featured Speaker this week:  RICK MELVILLE of Fairway Independent Mortgage Co!');
  });

  test('group name renders', () => {
    expect(EventWrapper.find('.groupName').text()).toBe('Group: Business Links BNI');
  });

  test('RSVP count yes renders', () => {
    expect(EventWrapper.find('.peopleGoing').text()).toBe('1 people are going');
  });

  test('detail button renders', () => {
    expect(EventWrapper.find('.detailsBtn')).toHaveLength(1);
  });

  test('address is not present before click', () => {
    expect(EventWrapper.find('.description')).not.toHaveLength(1);
  });
})

describe('<Event /> component after click', () => {

  let EventWrapper
  let event = {
    "id": "hrzvqrybchbcc",
    "name": "Featured Speaker this week:  RICK MELVILLE of Fairway Independent Mortgage Co!",
    "local_date": "2020-05-14",
    "local_time": "07:30",
    "yes_rsvp_count": 1,
    "venue": {
      "address_1": "130 Matthews Station St",
      "city": "Matthews",
      "zip": "28105",
      "state": "NC"
    },
    "group": {
      "name": "Business Links BNI",
    },
    "link": "https://www.meetup.com/Business-Links-BNI/events/hrzvqrybchbcc/",
    "description": "<p>COME VISIT one of the most exciting BNI groups in the Charlotte NC area! We meet at Panera Bread, 3207 Pineville-Matthews Rd, Charlotte, NC 28226 @ 7:30 a.m. every Thursday morning.</p> <p>We have a dynamic, “family like” group which enjoys meeting and helping one another grow our businesses. We believe that “givers” truly do “gain”.</p> <p>If you are a best-of-class business professional, interested in adding about 35 new people to your marketing team, consider joining us! Allow us to share with you … all our contacts and prospects. Let’s grow our businesses together!</p> <p>Feel free to reach out to me if you would like to learn more. I’d love to meet you and see how we can help. How you have a FANTASTIC day! (Bob Barton Cell:[masked])</p> <p>Thank you.</p> <p>Bob Barton, BNI Business Links<br/>Secretary/Treasurer</p> ",
    "visibility": "public"
  }

  beforeAll(() => {
    EventWrapper = shallow(<Event event={event}/>)
    EventWrapper.find('.detailsBtn').at(0).simulate('click');
  })

  test('event details should load when details button is clicked', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  })

  test('event date and time renders', () => {
    expect(EventWrapper.find('.dateAndTime').text()).toBe('07:30 - 2020-05-14');
  });

  test('event name renders', () => {
    expect(EventWrapper.find('.eventName').text()).toBe('Featured Speaker this week:  RICK MELVILLE of Fairway Independent Mortgage Co!');
  });

  test('group name renders', () => {
    expect(EventWrapper.find('.groupName').text()).toBe('Group: Business Links BNI');
  });

  test('RSVP count yes renders', () => {
    expect(EventWrapper.find('.peopleGoing').text()).toBe('1 people are going');
  });

  // test('click on description should display address', () => {
  //   expect(EventWrapper.find('.address').text()).toBe('130 Matthews Station St, Matthews, NC 28105');
  // });

  test('click on description should display description', () => {
    expect(EventWrapper.find('.description').text()).toBe('<p>COME VISIT one of the most exciting BNI groups in the Charlotte NC area! We meet at Panera Bread, 3207 Pineville-Matthews Rd, Charlotte, NC 28226 @ 7:30 a.m. every Thursday morning.</p> <p>We have a dynamic, “family like” group which enjoys meeting and helping one another grow our businesses. We believe that “givers” truly do “gain”.</p> <p>If you are a best-of-class business professional, interested in adding about 35 new people to your marketing team, consider joining us! Allow us to share with you … all our contacts and prospects. Let’s grow our businesses together!</p> <p>Feel free to reach out to me if you would like to learn more. I’d love to meet you and see how we can help. How you have a FANTASTIC day! (Bob Barton Cell:[masked])</p> <p>Thank you.</p> <p>Bob Barton, BNI Business Links<br/>Secretary/Treasurer</p> ');
  });

  test('click on description should display visibility', () => {
    expect(EventWrapper.find('.visibility').text()).toBe('public');
  });

  test('click on description should display link', () => {
    expect(EventWrapper.find('.link')).toHaveLength(1);
  });

  test('click on description should display close button', () => {
    expect(EventWrapper.find('.closeBtn')).toHaveLength(1);
  });

  test('click on close button when displayed should close details', () => {
    EventWrapper.find('.closeBtn').at(0).simulate('click');
    expect(EventWrapper.find('.description')).not.toHaveLength(1);
  })

});