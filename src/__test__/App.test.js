import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockEvents, unmountedMockEvents } from '../mockEvents';

describe('<App /> component', () => {
  
  let AppWrapper
  beforeAll(() => {
    AppWrapper = shallow(<App />)
  })

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('render NumberOfEvents', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});

describe('<App /> integration, mounted', () => {

  let AppWrapper;
  beforeAll(() => {
    AppWrapper = mount(<App />);
  })

  afterAll(() => {
    AppWrapper.unmount();
  });

  test('app renders list of events without input', () => {
    expect(AppWrapper.state('events')).toEqual(unmountedMockEvents.events);
  });

  test('get list of events after user selects a city', async () => {
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    CitySearchWrapper.instance().handleItemClicked('value', 4, 11);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(4, 11);
  });

  test('render correct list of events', () => {
    AppWrapper.setState({ events: mockEvents.events });
    expect(AppWrapper.find('.event')).toHaveLength(3);
  });

  test('App renders 32 events if none are specified', () => {
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    expect(NumberOfEventsWrapper.state('eventNumber')).toBe(32)
  })

  test('App changes number of events when value is changed in search bar', () => {
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    const eventObject = { target: { value: 5 }};
    NumberOfEventsWrapper.find('.totalEvents').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('eventNumber')).toBe(5)
  })
});

describe('<App /> integration, shallow', () => {

  test('change state after get list of events', async () => {
    const AppWrapper = shallow(<App />)
    AppWrapper.instance().updateEvents(4, 11);
    await AppWrapper.update();
    expect(AppWrapper.state('events')).toEqual(mockEvents.events);
  });
});