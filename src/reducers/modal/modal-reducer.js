import { initial } from './initial';
import * as types from '../types';

const modalReducer = (state = initial, action) => {
  const { type, ...payload} = action;

  const switchObject =
  {

    [types.modalToggled]: () => ({...state, ...{show: !state.show}}),

    [types.currentDrink]: () => ({...state, ...{currentDrink: payload}}),

    [types.noAction]: () => state

  }

  return (switchObject[type] || switchObject[types.noAction])()
}

export default modalReducer;