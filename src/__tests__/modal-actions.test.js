import * as actions from '../reducers/modal/actions';

describe('form actions', () => {

  const TEST = 'TEST'

  it('returns an modal constant', () => {
    expect(actions.modalToggled()).toEqual({ type: 'TOGGLE_MODAL' });
  });

  it('returns an current drink constant', () => {
    expect(actions.setCurrentDrink({TEST})).toEqual({ type: 'SET_CURRENT_DRINK', ...{TEST} });
  });

});