import * as types from '../types';

export const stockAdded = payload => ({
  type: types.addStock, ...payload
});

export const stockRemoved = payload => ({
  type: types.removeStock, ...payload
});

export const drinkAdded = payload => ({
  type: types.addDrink, ...payload
});

export const drinkRemoved = payload => ({
  type: types.removeDrink, ...payload
});
