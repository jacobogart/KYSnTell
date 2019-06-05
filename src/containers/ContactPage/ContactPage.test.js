import React from 'react';
import { shallow } from 'enzyme';
import { ContactPage, mapDispatchToProps } from './ContactPage';
import * as mock from '../../mockData'
import { setContacts } from '../../actions';

describe('ContactPage', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(
      <ContactPage 
        setContacts={mock.setContacts}
        history={mock.history}
      />);
    instance = wrapper.instance();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should match snapshot if error is true', () => {
    instance.setState({ error: true })
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    const defaultState = { contacts: [], input: '', error: false }
    expect(wrapper.state()).toEqual(defaultState);
  });

  describe('Event Listeners', () => {
    it('should invoke handleSubmit when the form submits', () => {
      wrapper.find('.contact-form').simulate('submit', mock.submitEvent);
      expect(mock.submitEvent.preventDefault).toHaveBeenCalled();
    });

    it('should invoke handleChange when the input is changed', () => {
      wrapper.find('.contact-input').simulate('change', mock.contactChangeEvent);
      expect(wrapper.state('input')).toEqual(mock.contact);
    })
  });

  describe('handleChange', () => {
    it('should set state to the input value', () => {
      instance.handleChange(mock.contactChangeEvent);
      expect(wrapper.state('input')).toEqual(mock.contact);
    });

    it('should set the error property to false', () => {
      instance.setState({ error: true });
      instance.handleChange(mock.contactChangeEvent);
      expect(wrapper.state('error')).toEqual(false);
    });
  });

  describe('handleSubmit', () => {
    it('should add the contact to state if it is correct', () => {
      expect(wrapper.state('contacts')).toEqual([]);
      instance.handleChange(mock.contactChangeEvent);
      instance.handleSubmit(mock.submitEvent);
      expect(wrapper.state('contacts')).toEqual([mock.contact]);
    });

    it('should set the error state to true is contact is not correct', () => {
      expect(wrapper.state('error')).toEqual(false);
      instance.handleChange(mock.contactBadChangeEvent);
      expect(wrapper.state('error')).toEqual(false);
    });

    it('should reset the input value either way', () => {
      instance.handleChange(mock.contactChangeEvent);
      expect(wrapper.state('input')).toEqual(mock.contact);
      instance.handleSubmit(mock.submitEvent);
      expect(wrapper.state('input')).toEqual('');

      instance.handleChange(mock.contactBadChangeEvent);
      expect(wrapper.state('input')).toEqual('test');
      instance.handleSubmit(mock.submitEvent);
      expect(wrapper.state('input')).toEqual('');
    });
  });

  describe('storeContacts', () => {
    it('should invoke setContacts', () => {
      instance.handleChange(mock.contactChangeEvent);
      instance.handleSubmit(mock.submitEvent);
      instance.storeContacts();
      expect(mock.setContacts).toHaveBeenCalledWith([mock.contact]);
    });

    it('should push the router to the correct route', () => {
      instance.storeContacts();
      expect(mock.history.push).toHaveBeenCalledWith('/tell/details')
    });
  });

  describe('mockDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    const actionToDispatch = setContacts(mock.contacts);
    mappedProps.setContacts(mock.contacts);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});