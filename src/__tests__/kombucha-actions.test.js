import * as actions from '../reducers/kombucha/actions';

describe('kombucha actions', () => {

  const TEST = 'TEST'

  it('returns an add stock constant', () => {
    expect(actions.stockAdded({TEST})).toEqual({ type: 'ADD_STOCK', ...{TEST} });
  });

  it('returns an remove stock constant', () => {
    expect(actions.stockRemoved({TEST})).toEqual({ type: 'REMOVE_STOCK', ...{TEST} });
  });

  it('returns an add drink constant', () => {
    expect(actions.drinkAdded({TEST})).toEqual({ type:'ADD_DRINK', ...{TEST} });
  });

});