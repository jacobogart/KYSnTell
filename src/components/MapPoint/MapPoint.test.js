import React from 'react';
import { shallow } from 'enzyme';
import { MapPoint } from './MapPoint';

describe('MapPoint', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<MapPoint />)
    expect(wrapper).toMatchSnapshot();
  });
})