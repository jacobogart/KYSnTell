import React from 'react';
import { shallow } from 'enzyme';
import { DetailsPage } from './DetailsPage';
import * as mock from '../../mockData'

describe('DetailsPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DetailsPage />);
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    const defaultState = { zipcode: '', distance: '' }
    expect(wrapper.state()).toEqual(defaultState);
  });
});