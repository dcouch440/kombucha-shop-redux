import * as types from '../types';

export const modalToggled = () => ({
  type: types.modalToggled
});

export const setCurrentDrink = payload => ({
  type: types.currentDrink, ...payload
});