import * as types from '../types';

export const updateForm = payload => ({type: types.UPDATE_FORM, ...payload})
export const clearForm = () => ({type: types.CLEAR_FORM})