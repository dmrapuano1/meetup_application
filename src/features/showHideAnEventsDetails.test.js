import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test('An event element is collapsed by default', ({ given, when, then }) => {
    
    // let AppWrapper = mount(<App/>)
    let EventListWrapper
    given('the events list has loaded', () => {
      // EventListWrapper = AppWrapper.find(EventList);
      EventListWrapper = shallow(<EventList events={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}/>);
    });
    
    when('the event is displayed to the UI', async () => {
      await EventListWrapper.update();
      expect(EventListWrapper.find(Event)).toHaveLength(4);
    });
    
    then('the UI displays the event collapsed by default', () => {
      expect(EventListWrapper.find('visibility')).toHaveLength(0);
    });
  });
  
  test('User can expand an event to see its details', ({ given, when, then }) => {
    
    let EventWrapper;
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
    
    given('the event display is collapsed', () => {
      EventWrapper = shallow(<Event event={event} />)
    });
    
    when('the user clicks the expand button', () => {
      EventWrapper.find('.detailsBtn').at(0).simulate('click');      
    });
    
    then('the UI displays the event expanded', () => { 
      expect(EventWrapper.find('.visibility').text()).toBe('public');      
    });
  }); 
  
  test('User can collapse an event to hide its details', ({ given, when, then }) => {

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
    given('the event display is expanded', () => {
      EventWrapper = shallow(<Event event={event} />)
      EventWrapper.find('.detailsBtn').at(0).simulate('click');
      expect(EventWrapper.find('.visibility').text()).toBe('public'); 
    });
    
    when('the user clicks the minimize button', () => {
      EventWrapper.find('.closeBtn').at(0).simulate('click');      
    });
    
    then('the UI displays the event collapsed', () => { 
      expect(EventWrapper.find('.visibility')).not.toHaveLength(1);      
    });
  });

})