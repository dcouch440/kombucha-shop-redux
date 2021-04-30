import modalReducer from '../reducers/modal/modal-reducer';
import * as actions from '../reducers/modal/actions';

describe('formReducer', () => {

  const initial = {
    show: false,
    currentDrink: ''
  }

  it('should update the given value', () => {
    expect(modalReducer(initial, actions.modalToggled()))
      .toEqual({...initial, ...{show: true} });
  })

  it('should save the current drink', () => {
    const currentDrink = { id: 1, veryYummy: 'super good'}

    expect(modalReducer(initial, actions.setCurrentDrink(currentDrink) ))
      .toEqual({...initial, currentDrink});
  })


})