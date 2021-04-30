import { initial } from './initial';
import * as types from '../types';

const modalReducer = (state = initial, action) => {
  const { type, ...payload} = action;

  const switchObject =
  {
    [types.TOGGLE_MODAL]: () => ({...state, ...{show: !state.show}}),

    [types.SET_CURRENT_DRINK]: () => ({...state, ...{currentDrink: payload}}),

    [types.DEFAULT]: () => state
  }

  return (switchObject[type] || switchObject[types.DEFAULT])()
}

export default modalReducer;