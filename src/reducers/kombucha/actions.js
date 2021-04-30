import * as types from '../types';

export const stockAdded = payload => ({
  type: types.removeStock, ...payload
})

export const stockRemoved = payload => ({
  type: types.addStock, ...payload
})
