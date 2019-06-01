import { combineReducers } from 'redux';
import { locationsReducer } from './locationsReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  locations: locationsReducer,
  user: userReducer
  }
);