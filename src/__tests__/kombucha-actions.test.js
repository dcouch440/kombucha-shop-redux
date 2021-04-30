import * as actions from '../reducers/kombucha/actions';

describe('kombucha actions', () => {
  it('returns an add stock constant', () => {
    expect(actions.stockAdded({})).toEqual({type: 'ADD_STOCK', ...{}});
  });
  it('returns an remove stock constant', () => {
    expect(actions.stockRemoved({})).toEqual({type: 'REMOVE_STOCK', ...{}});
  });
  it('returns an add drink constant', () => {
    expect(actions.drinkAdded({})).toEqual({type:'ADD_DRINK', ...{}});
  });
  it('returns an remove drink constant', () => {
    expect(actions.drinkRemoved({})).toEqual({type: 'REMOVE_DRINK', ...{}});
  });
});