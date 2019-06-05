import React from 'react';
import { shallow } from 'enzyme';
import  App  from './App';
import * as mock from '../../mockData'

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});