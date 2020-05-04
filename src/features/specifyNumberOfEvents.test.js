import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    
    let NumberOfEventsWrapper
    given('the user hasn’t specified a number of events to display', () => {

    });
    
    when('the events page loads', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents updateCount={() => {}}/>);
    });
    
    then('32 events will display by default', () => {
      expect(NumberOfEventsWrapper.find('.totalEvents').prop('value')).toBe(32)
    });
  });
  
  test('User can change the number of events they want to see', ({ given, when, then }) => { 
    
    let NumberOfEventsWrapper
    given('the application is displaying events', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents updateCount={() => {}}/>);
    });
    
    when('the user edits the number of events to display', () => {
      const eventObject = { target: { value: 5 }};
      NumberOfEventsWrapper.find('.totalEvents').simulate('change', eventObject);
    });
    
    then('the entered number of events will display', () => {
      expect(NumberOfEventsWrapper.state('eventNumber')).toBe(5);
    });
  });   

})