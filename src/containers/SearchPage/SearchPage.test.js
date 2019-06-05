import React from 'react';
import { shallow } from 'enzyme';
import { SearchPage } from './SearchPage';
import * as mock from '../../mockData'

describe('SearchPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchPage />);
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    const defaultState = { zipcode: '', distance: '' }
    expect(wrapper.state()).toEqual(defaultState);
  });
});