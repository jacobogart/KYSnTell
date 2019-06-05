import React from 'react';
import { shallow } from 'enzyme';
import { LocationPage, mapStateToProps } from './LocationPage';
import * as mock from '../../mockData';

describe('LocationPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <LocationPage 
        location={mock.routerLocation}
        locations={mock.cleanLocations}
      />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return the correct piece of state', () => {
      const { locations, user } = mock;
      const defaultState = { locations, user };
      const result = mapStateToProps(defaultState);
      expect(result).toEqual({ locations })
    });
  });
});