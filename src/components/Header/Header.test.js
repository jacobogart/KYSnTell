import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header', () => {
  const mockRouterProps = { pathname: '/tell'}
  it('should match snapshot', () => {
    const wrapper = shallow(<Header location={mockRouterProps}/>)
    expect(wrapper).toMatchSnapshot();
  });
})