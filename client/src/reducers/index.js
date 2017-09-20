import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import SessionReducer from './SessionReducer';

export default combineReducers({
  user: UserReducer,
  session: SessionReducer
});
