import kombuchaReducer from '../reducers/kombucha/kombucha-reducer';
import * as actions from '../reducers/kombucha/actions';

describe('kombuchaReducer', () => {

  const payload = {
    name: 'drink',
    id: 1,
    stock: 0,
    flavor: 'good',
    smell: 'strong',
    ingredients: 'salt'
  };

  const { id } = payload;

  it('Should return and empty object if no action is passed in', () => {
    expect(kombuchaReducer({}, {type: null})).toEqual({});
  });

  it('Should add a new drink', () => {
    expect(kombuchaReducer({}, actions.drinkAdded(payload))).toEqual({ [id]:{ ...payload } });
  });

  it('Should delete a drink', () => {
    expect(kombuchaReducer({[id]: payload}, actions.drinkRemoved(payload))).toEqual({});
  });

  it('should add stock', () => {
    expect(kombuchaReducer({[id] : {...payload }}, actions.stockAdded(payload)))
      .toEqual({ [id] : {...payload, ...{ stock: 1 }} });
  });

  it('should remove stock', () => {
    expect(kombuchaReducer({[id]:{...payload, ...{ stock: 1 }}}, actions.stockRemoved(payload)))
      .toEqual({ [id] : {...payload, ...{ stock: 0 }} });
  });

});