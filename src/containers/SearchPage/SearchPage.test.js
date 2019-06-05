import React from 'react';
import { shallow } from 'enzyme';
import { SearchPage, mapDispatchToProps } from './SearchPage';
import * as mock from '../../mockData'
import { fetchLatLong } from '../../api/fetchLatLong';
import { fetchLocations } from '../../api/fetchLocations';
import { setLocations, setUserLocation } from '../../actions';


jest.mock('../../api/fetchLatLong');
jest.mock('../../api/fetchLocations');


describe('SearchPage', () => {
  let wrapper, instance;

  fetchLatLong.mockImplementation(() => Promise.resolve(mock.origin));
  fetchLocations.mockImplementation(() => Promise.resolve(mock.cleanLocations));

  beforeEach(() => {
    wrapper = shallow(
      <SearchPage 
        history={mock.history}
        setUserLocation={mock.setUserLocation}
        setLocations={mock.setLocations}
      />);
    instance = wrapper.instance();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when loading is true', () => {
    instance.setState({ isLoading: true })
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual(mock.searchDefaultState);
  });

  describe('Event Listeners', () => {
    it('should invoke handleSubmit when the form submits', () => {
      wrapper.find('.SearchPage').simulate('submit', mock.submitEvent);
      expect(mock.submitEvent.preventDefault).toHaveBeenCalled();
    });

    it('should invoke handleChange when an input is changed', () => {
      wrapper.find('.search-input').first().simulate('change', mock.searchChangeEvent);
      expect(wrapper.state('zipcode')).toEqual('64081');
    });
  });

  describe('handleChange', () => {
    it('should set the correct piece of state to the correct value', () => {
      expect(wrapper.state('zipcode')).toEqual('');
      instance.handleChange(mock.searchChangeEvent);
      expect(wrapper.state('zipcode')).toEqual('64081');
    });
  });

  describe('handleSubmit', () => {
    it('should set isLoading and error pieces of state', () => {
      instance.setState({ isLoading: false, error: true });
      instance.handleSubmit(mock.submitEvent);
      expect(wrapper.state('isLoading')).toEqual(true);
      expect(wrapper.state('error')).toEqual(false);
    });

    it('should call fetchLatLong with the correct params', () => {
      instance.handleChange(mock.searchChangeEvent);
      instance.handleSubmit(mock.submitEvent);
      expect(fetchLatLong).toHaveBeenCalledWith('64081');
    });

    it('should invoke the setUserLocation dispatch', () => {
      instance.handleSubmit(mock.submitEvent);
      expect(mock.setUserLocation).toHaveBeenCalledWith(mock.origin);
    });

    it('should invoke fetchLocations', async () => {
      instance.setState({ distance: '2' });
      await instance.handleSubmit(mock.submitEvent);
      expect(fetchLocations).toHaveBeenCalledWith(mock.origin, '2');
    });

    it('should set isLoading to false', async () => {
      await instance.handleSubmit(mock.submitEvent);
      expect(wrapper.state('isLoading')).toEqual(false);
    });

    it('should invoke the setLocations dispatch if there are results', async () => {
      await instance.handleSubmit(mock.submitEvent);
      expect(mock.setLocations).toHaveBeenCalledWith(mock.cleanLocations);
    });

    it('should push to the correct route if there are results', () => {
      instance.handleSubmit(mock.submitEvent);
      expect(mock.history.push).toHaveBeenCalledWith('/kys/locations');
    });

    it('should set error to true if there are no results', async () => {
      fetchLocations.mockImplementation(() => Promise.resolve([]));
      await instance.handleSubmit(mock.submitEvent);
      expect(wrapper.state('error')).toEqual(true);
    });
  });

  describe('mapDispatchToProps', () => {
    let mappedProps, mockDispatch;

    beforeEach(() => {
      mockDispatch = jest.fn();
      mappedProps = mapDispatchToProps(mockDispatch);
    });

    it('should dispatch a setLocations action', () => {
      const actionToDispatch = setLocations(mock.cleanLocations);
      mappedProps.setLocations(mock.cleanLocations);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should dispatch a setUserLocation action', () => {
      const actionToDispatch = setUserLocation(mock.origin);
      mappedProps.setUserLocation(mock.origin);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});