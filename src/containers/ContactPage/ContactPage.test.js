import React from 'react';
import { shallow } from 'enzyme';
import { ContactPage } from './ContactPage';
import * as mock from '../../mockData'

describe('ContactPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ContactPage />);
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    const defaultState = { zipcode: '', distance: '' }
    expect(wrapper.state()).toEqual(defaultState);
  });
});