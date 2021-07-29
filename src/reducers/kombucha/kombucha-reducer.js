import { initial } from './initial';
import * as types from '../types';

const kombuchaReducer = (state = initial, action) => {
  const { id, type, ...payload } = action;

  const switchObject =
  {
    [types.ADD_DRINK]: () => ({ ...state, ...{
      [id]: { ...payload, id }
    } }),

    [types.ADD_STOCK]: () => ({ ...state, ...{
      [id] : {
        ...state[id],
        ...{ stock: state[id].stock  += 1 }
      }
    } }),

    [types.REMOVE_STOCK]: () => ({ ...state, ...{
      [id] : {
        ...state[id],
        ...{ stock: state[id].stock ? state[id].stock -= 1 : 0 }
      }
    } }),

    [types.DEFAULT]: () => state
  };

  return (switchObject[type] || switchObject[types.DEFAULT])();
};

export default kombuchaReducer;