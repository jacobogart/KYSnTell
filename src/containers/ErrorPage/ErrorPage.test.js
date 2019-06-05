import React from 'react';
import { shallow } from 'enzyme';
import { ErrorPage, mapStateToProps } from './ErrorPage';
import * as mock from '../../mockData';

describe('ErrorPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ErrorPage
        contacts={mock.contacts}
      />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return the correct piece of state', () => {
      const { contacts, user } = mock;
      const defaultState = { contacts, user };
      const result = mapStateToProps(defaultState);
      expect(result).toEqual({ contacts })
    });
  });
});