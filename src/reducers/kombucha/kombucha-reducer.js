import initial from './initial';
import * as types from '../types';

const kombuchaReducer = (state = initial, action) => {
  const { id, type, ...payload} = action;

  const switchObject =
  {

    [types.addStock]: () => ({ ...state, ...{
      [id] : {
        ...state[id],
        ...{stock: state[id].stock  += 1}
      }
    }}),

    [types.removeStock]: () => ({ ...state, ...{
      [id] : {
        ...state[id],
        ...{stock: state[id].stock -= 1}
      }
    }}),

    [types.noAction]: () => state

  }

  return (switchObject[type] || switchObject[types.noAction])
}

export default kombuchaReducer;