import React from 'react';
import { shallow } from 'enzyme';
import { SuccessPage } from './SuccessPage';

describe('SuccessPage', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<SuccessPage />)
    expect(wrapper).toMatchSnapshot();
  });
});