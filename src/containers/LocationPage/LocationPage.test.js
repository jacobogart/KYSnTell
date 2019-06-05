import React from 'react';
import { shallow } from 'enzyme';
import { LocationPage } from './LocationPage';
import * as mock from '../../mockData'

describe('LocationPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LocationPage />);
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    const defaultState = { zipcode: '', distance: '' }
    expect(wrapper.state()).toEqual(defaultState);
  });
});