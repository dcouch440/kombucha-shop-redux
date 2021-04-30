import * as actions from '../reducers/form/actions';

describe('form actions', () => {
  it('returns an update constant', () => {
    expect(actions.updateForm({})).toEqual({type: 'UPDATE_FORM', ...{}});
  });
  it('returns an clear form constant', () => {
    expect(actions.clearForm({})).toEqual({type: 'CLEAR_FORM', ...{}});
  });
})