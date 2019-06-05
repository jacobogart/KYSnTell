import React from 'react';
import { shallow } from 'enzyme';
import { PreviewPage } from './PreviewPage';
import * as mock from '../../mockData'

describe('PreviewPage', () => {
  let wrapper, instance;
  const message = React.createRef();

  beforeEach(() => {
    wrapper = shallow(
      <PreviewPage 
        details={mock.details}
        contacts={mock.contacts}
      />, { context: message });
    instance = wrapper.instance();
    instance.message.current = mock.messageContext;
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    wrapper = shallow(
      <PreviewPage
        details={mock.details}
        contacts={mock.contacts}
      />, { disableLifecycleMethods: true });
    const defaultState = {
      message: '',
      contEdit: false
    };

    expect(wrapper.state()).toEqual(defaultState);
  });

  it('should invoke setMessage on mount', () => {
    jest.spyOn(instance, 'setMessage');
    instance.componentDidMount();
    expect(instance.setMessage).toHaveBeenCalled();
  });

  describe('setMessage', () => {
    it('should set state to the message', () => {
      instance.setMessage();
      expect(wrapper.state('message')).toEqual(mock.fullMessage);
    });

    it('should not include additionalNotes if there are none', () => {
      wrapper = shallow(
        <PreviewPage
          details={ {...mock.details, additionalNotes: ''}}
          contacts={mock.contacts}
        />, { context: mock.messageContext});
      expect(wrapper.state('message')).toEqual(mock.messageWONotes);
    });
  });

  describe('toggleEdit', () => {
    it('should invoke blur on the target element if contEdit is false', () => {
      instance.toggleEdit(mock.previewEvent);
      expect(mock.previewEvent.target.blur).toHaveBeenCalled();
    });

    it('should invoke focus on the message if contEdit is false', () => {
      instance.toggleEdit(mock.previewEvent);
      expect(instance.message.current.focus).toHaveBeenCalled();
    });

    it('should set state to the update message if contEdit is true', () => {
      instance.setState({ contEdit: true });
      instance.toggleEdit(mock.previewEvent);
      expect(wrapper.state('message')).toEqual('Test');
    });

    it('should blur the message if contEdit is true', () => {
      instance.setState({ contEdit: true });
      instance.toggleEdit(mock.previewEvent);
      expect(instance.message.current.blur).toHaveBeenCalled();
    });

    it('should toggle the contEdit piece of state', () => {
      expect(wrapper.state('contEdit')).toEqual(false);
      instance.toggleEdit(mock.previewEvent);
      expect(wrapper.state('contEdit')).toEqual(true);
      instance.toggleEdit(mock.previewEvent);
      expect(wrapper.state('contEdit')).toEqual(false);
    });
  });
});