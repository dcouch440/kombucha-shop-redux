import * as actions from '../reducers/form/actions';

describe('form actions', () => {

  const TEST = 'TEST';

  it('returns an update constant', () => {
    expect(actions.updateForm({ TEST })).toEqual({ type: 'UPDATE_FORM', ...{ TEST } });
  });

  it('returns an clear form constant', () => {
    expect(actions.clearForm()).toEqual({ type: 'CLEAR_FORM' });
  });

});