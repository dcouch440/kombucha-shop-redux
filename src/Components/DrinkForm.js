import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as formActions from '../reducers/form/actions';
import * as kombuchaActions from '../reducers/kombucha/actions';
import { v4 } from 'uuid';

const FormPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .dancer-title {
    font-size: 30px;
  }
`;

const Form = styled.form`
  font-family: monospace;
  display: flex;
  color: white;
  & > * {
    padding: 2px;
    margin: 0 2px;
  }
  @media (max-width: 1200px)
  {
    flex-direction: column;
  }
`;

const Dancer = styled.div`
  font-size: 500px;
  background-color: black;
  padding: 0px 20px;
  margin-bottom: 30px;
  @media (max-width: 1000px)
  {
    font-size: 250px;
  }
`;

const Input = styled.input``;


const DrinkForm = (props) => {

  const {dispatch, formReducer :form} = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(formActions.updateForm({input: 'id', value: v4()}));
    dispatch(kombuchaActions.drinkAdded(form));
    props.history.push('/drinks');
  }

  const handleChange = (e) => {
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
          />
        <label>Flavor</label>
        <Input
          name="flavor"
          value={form.flavor}
          onChange={handleChange}
          />
        <label>Smell</label>
        <Input
          name="smell"
          value={form.smell}
          onChange={handleChange}
        />
        <label>Ingredients</label>
        <Input
          name="ingredients"
          value={form.ingredients}
          onChange={handleChange}
          />
        <button type="submit">
          Submit
        </button>
      </Form>
    </FormPage>
  );

}


export default connect(state => state)(withRouter(DrinkForm));