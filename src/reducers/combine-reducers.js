import kombuchaReducer from './kombucha/kombucha-reducer';
import modalReducer from './modal/modal-reducer';

import { combineReducers } from 'redux';

export default combineReducers({
  kombuchaReducer,
  modalReducer
});