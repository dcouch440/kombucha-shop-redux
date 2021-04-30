import * as types from '../types';

export const modalToggled = () => ({
  type: types.TOGGLE_MODAL
});

export const setCurrentDrink = payload => ({
  type: types.SET_CURRENT_DRINK, ...payload
});