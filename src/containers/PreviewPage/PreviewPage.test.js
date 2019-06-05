import React from 'react';
import { shallow } from 'enzyme';
import { PreviewPage } from './PreviewPage';
import * as mock from '../../mockData'

describe('PreviewPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PreviewPage />);
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    const defaultState = { zipcode: '', distance: '' }
    expect(wrapper.state()).toEqual(defaultState);
  });
});