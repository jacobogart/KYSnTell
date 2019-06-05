import React from 'react';
import { shallow } from 'enzyme';
import { ResultsPage, mapStateToProps } from './ResultsPage';
import * as mock from '../../mockData'

describe('ResultsPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ResultsPage 
        locations={mock.cleanLocations}
        user={mock.user}
      />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return the appropriate pieces of state', () => {
      const expected = { locations: mock.cleanLocation, user: mock.user };
      const defaultState = { ...expected, test: 'test' }
      const result = mapStateToProps(defaultState);
      expect(result).toEqual(expected);
    });
  });
});