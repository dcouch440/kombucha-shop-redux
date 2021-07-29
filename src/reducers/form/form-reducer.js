import { initial } from './initial';
import * as types from '../types';

const formReducer = (state = initial, action) => {
  const { input, value, type } = action;

  const switchObject =
  {
    [types.UPDATE_FORM]: () => ({ ...state, ...{ [input]: value } }),

    [types.CLEAR_FORM]: () => ({ ...initial }),

    [types.DEFAULT]: () => state
  };

  return (switchObject[type] || switchObject[types.DEFAULT])();
};

export default formReducer;