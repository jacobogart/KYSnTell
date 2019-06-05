import React from 'react';
import { shallow } from 'enzyme';
import { DetailsPage, mapStateToProps, mapDispatchToProps } from './DetailsPage';
import * as mock from '../../mockData'
import { setDetails } from '../../actions';

describe('DetailsPage', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(
      <DetailsPage 
        contacts={mock.contacts}
        setDetails={mock.setDetails}
        history={mock.history}
      />);
    instance = wrapper.instance();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    const defaultState = {
      diagnosis: '',
      timeFrame: '',
      additionalNotes: ''
    }
    expect(wrapper.state()).toEqual(defaultState);
  });

  describe('Event Listeners', () => {
    it('should invoke handleSubmit when the form is submited', () => {
      wrapper.find('.details-form').simulate('submit', mock.submitEvent);
      expect(mock.submitEvent.preventDefault).toHaveBeenCalled();
    });

    it('should invoke handleChange when an input is changed', () => {
      wrapper.find('#diagnosis').simulate('change', mock.detailsChangeEvent);
      expect(wrapper.state('diagnosis')).toEqual('Herpes');
    });
  });

  describe('handleChange', () => {
    it('should set the correct piece of state to the correct value', () => {
      instance.handleChange(mock.detailsChangeEvent);
      expect(wrapper.state('diagnosis')).toEqual('Herpes');
    });
  });

  describe('handleSubmit', () => {
    it('should invoke setDetails', () => {
      instance.setState(mock.details);
      instance.handleSubmit(mock.submitEvent);
      expect(mock.setDetails).toHaveBeenCalledWith(mock.details);
    });

    it('should push the router to the correct URL', () => {
      instance.handleSubmit(mock.submitEvent);
      expect(mock.history.push).toHaveBeenCalledWith('/tell/preview')
    });
  });

  describe('mapStateToProps', () => {
    it('should return the correct piece of state', () => {
      const { contacts, user } = mock;
      const defaultState = { contacts, user };
      const result = mapStateToProps(defaultState);
      expect(result).toEqual({ contacts })
    });
  });

  describe('mapDispatchToProps', () => {
    it('should dispatch a setDetails action', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const actionToDispatch = setDetails(mock.details);
      mappedProps.setDetails(mock.details);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});