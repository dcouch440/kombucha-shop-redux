import * as types from '../types';

export const stockAdded = payload => ({
  type: types.ADD_STOCK, ...payload
});

export const stockRemoved = payload => ({
  type: types.REMOVE_STOCK, ...payload
});

export const drinkAdded = payload => ({
  type: types.ADD_DRINK, ...payload
});

export const drinkRemoved = payload => ({
  type: types.REMOVE_DRINK, ...payload
});
