import {initial} from './initial';
import * as types from '../types';

const kombuchaReducer = (state = initial, action) => {
  const { id, type, ...payload} = action;
  console.log(id);
  console.log(state)
  const switchObject =
  {

    [types.addDrink]: () => ({...state, ...{
      [id]: {...payload, id}
    }}),

    [types.removeDrink]: () => {
      const prev = {...state};
      delete prev[id];
      return prev;
    },

    [types.addStock]: () => ({ ...state, ...{
      [id] : {
        ...state[id],
        ...{stock: state[id].stock  += 1}
      }
    }}),

    [types.removeStock]: () => ({ ...state, ...{
      [id] : {
        ...state[id],
        ...{stock: state[id].stock ? state[id].stock -= 1 : 0}
      }
    }}),

    [types.noAction]: () => state

  }

  return (switchObject[type] || switchObject[types.noAction])()
}

export default kombuchaReducer;