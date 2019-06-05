import React from 'react';
import { shallow } from 'enzyme';
import { Splash } from './Splash';

describe('Splash', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Splash />)
    expect(wrapper).toMatchSnapshot();
  });
});