import React from 'react';
import { shallow } from 'enzyme';
import { PreviewPage, mapStateToProps, mapDispatchToProps } from './PreviewPage';
import * as mock from '../../mockData'
import { fetchSendMessage } from '../../api/fetchSendMessage';
import { setContacts } from '../../actions';

jest.mock('../../api/fetchSendMessage')

describe('PreviewPage', () => {
  let wrapper, instance;

  fetchSendMessage.mockImplementation(() => Promise.resolve(mock.resolvedMessages))

  beforeEach(() => {
    wrapper = shallow(
      <PreviewPage 
        details={mock.details}
        contacts={mock.contacts}
        history={mock.history}
        setContacts={mock.setContacts}
      />);
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

  describe('Event Listeners', () => {
    it('should invoke toggleEdit when edit-btn is clicked', () => {
      expect(wrapper.state('contEdit')).toEqual(false);
      wrapper.find('.edit-btn').simulate('click', mock.previewEvent);
      expect(wrapper.state('contEdit')).toEqual(true);
    });

    it('should invoke handleSend when send-btn is clicked', () => {
      wrapper.find('.send-btn').simulate('click');
      expect(fetchSendMessage).toHaveBeenCalled();
    });
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

  describe('handleSend', () => {
    it('should call fetchSendMessage', () => {
      instance.handleSend();
      expect(fetchSendMessage).toHaveBeenCalledWith(mock.contacts, mock.fullMessage);
    });

    it('should push the router if all responses are ok', async () => {
      await instance.handleSend();
      expect(mock.history.push).toHaveBeenCalledWith('/tell/success');
    });

    it('should invoke handleError is there are any failed fetches', async () => {
      fetchSendMessage.mockImplementation(() => Promise.resolve([...mock.resolvedMessages, { ok: false, contact: mock.contact}]));
      jest.spyOn(instance, 'handleError');
      await instance.handleSend();
      expect(instance.handleError).toHaveBeenCalled();
    });
  });

  describe('handleError', () => {
    it('should invoke setContacts', () => {
      instance.handleError(mock.rejectedMessages);
      expect(mock.setContacts).toHaveBeenCalledWith([mock.contact])
    });

    it('should push the router to the error page', () => {
      instance.handleError(mock.rejectedMessages);
      expect(mock.history.push).toHaveBeenCalledWith('/tell/error');
    });
  });

  describe('mapStateToProps', () => {
    it('should return the correct pieces of state', () => {
      const { contacts, details, user } = mock;
      const mockState = { contacts, details, user };
      const expected = { contacts, details }
      const result = mapStateToProps(mockState);
      expect(result).toEqual(expected);
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