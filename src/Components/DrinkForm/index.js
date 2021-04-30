import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as formActions from '../../reducers/form/actions';
import * as kombuchaActions from '../../reducers/kombucha/actions';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { Form, FormPage, Dancer, Input } from './styles';

const DrinkForm = ({formReducer :form, dispatch}) => {
  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(formActions.updateForm({input: 'id', value: v4()}));
    dispatch(kombuchaActions.drinkAdded(form));
    dispatch(formActions.clearForm());
    history.push('/drinks')
  }

  const handleChange = e => {
    const {name, value} = e.target
    dispatch(formActions.updateForm({input: name, value}))
  }

  return (
    <FormPage>
      <div className="dancer-title">Enter Your Drink</div>
      <Dancer>💃</Dancer>
      <Form onSubmit={handleSubmit}>
        <label>Name</label>
        <Input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          />
        <label>Flavor</label>
        <Input
          name="flavor"
          value={form.flavor}
          onChange={handleChange}
          required
          />
        <label>Smell</label>
        <Input
          name="smell"
          value={form.smell}
          onChange={handleChange}
          required
        />
        <label>Ingredients</label>
        <Input
          name="ingredients"
          value={form.ingredients}
          onChange={handleChange}
          required
          />
        <button type="submit">
          Submit
        </button>
      </Form>
    </FormPage>
  );

}

DrinkForm.propTypes = {
  formReducer: PropTypes.object,
  dispatch: PropTypes.func,
};

export default connect(state => state)(withRouter(DrinkForm));