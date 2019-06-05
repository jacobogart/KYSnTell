import React from 'react';
import { shallow } from 'enzyme';
import { ResultsPage } from './ResultsPage';
import * as mock from '../../mockData'

describe('ResultsPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ResultsPage />);
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    const defaultState = { zipcode: '', distance: '' }
    expect(wrapper.state()).toEqual(defaultState);
  });
});