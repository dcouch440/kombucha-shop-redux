import formReducer from '../reducers/form/form-reducer';
import * as actions from '../reducers/form/actions';

describe('formReducer', () => {

  const initial = {
    name: '',
    id: '',
    stock: 15,
    flavor: '',
    smell: '',
    ingredients: '',
  }

  describe('on input change', () => {

    ['name', 'flavor', 'smell', 'ingredients'].forEach(name  => {
      it('should update the given value', () => {
        expect(formReducer(initial, actions.updateForm({input: name, value: 'Updated'})))
          .toEqual({...initial, ...{[name]: 'Updated'}});
      })
    })

  })

  it('resets the value', () => {
    expect(formReducer({cats: 'lol'}, actions.clearForm())).toEqual(initial);
  })

})