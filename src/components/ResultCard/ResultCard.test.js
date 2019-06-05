import React from 'react';
import { shallow } from 'enzyme';
import { ResultCard } from './ResultCard';
import * as mock from '../../mockData';
import { fetchDistance } from '../../api/fetchDistance';

jest.mock('../../api/fetchDistance');

describe('ResultCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ResultCard
        {...mock.cleanLocation}
        user={mock.user}
      />);
    });

    fetchDistance.mockImplementation(() => Promise.resolve(mock.distance))
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    const defaultState = { distance: '' };

    wrapper = shallow(
      <ResultCard
        {...mock.cleanLocation}
        user={mock.user}
      />, { disableLifecycleMethods: true });
    expect(wrapper.state()).toEqual(defaultState);
  });

  it('should invoke fetchDistance on mount', () => {
    const args = [mock.user.location, mock.cleanLocation.point]
    expect(fetchDistance).toHaveBeenCalledWith(...args);
  });

  it('should set state to the correct distance on mount', () => {
    expect(wrapper.state('distance')).toEqual(mock.distance)
  });
});