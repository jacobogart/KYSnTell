import React from 'react';
import { shallow } from 'enzyme';
import { Map } from './Map';
import * as mock from '../../mockData'

describe('Map', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Map point={mock.origin}/>)
    expect(wrapper).toMatchSnapshot();
  });
})