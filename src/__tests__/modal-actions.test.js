import * as actions from '../reducers/modal/actions';

describe('form actions', () => {
  it('returns an update constant', () => {
    expect(actions.modalToggled({})).toEqual({type: 'TOGGLE_MODAL', ...{}});
  });
  it('returns an clear form constant', () => {
    expect(actions.setCurrentDrink({})).toEqual({type: 'SET_CURRENT_DRINK', ...{}});
  });
})