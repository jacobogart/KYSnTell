import { combineReducers } from 'redux';
import { locationsReducer } from './locationsReducer';

export const rootReducer = combineReducers({
  locations: locationsReducer
  }
);