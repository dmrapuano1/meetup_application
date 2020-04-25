import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  
  let NumberOfEventsWrapper
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateCount={() => {}}/>);
  })

  test('element renders properly', () => {
    expect(NumberOfEventsWrapper.find('.NumberOfEvents').text()).toBe('ShowEvents');
  })

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.totalEvents')).toHaveLength(1);
  });

  test('default number of events is 32', () => {
    expect(NumberOfEventsWrapper.find('.totalEvents').prop('value')).toBe(32)
  })

  test('render number input correctly', () => {
    const eventNumber = NumberOfEventsWrapper.state('eventNumber');
    expect(NumberOfEventsWrapper.find('.totalEvents').prop('value')).toBe(eventNumber);
  });

  test('change state when number input changes', () => {
    const eventObject = { target: { value: 5 }};
    NumberOfEventsWrapper.find('.totalEvents').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('eventNumber')).toBe(5);
  })

});