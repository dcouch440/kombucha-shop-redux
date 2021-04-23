import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { v4 } from 'uuid';

const FormPage = styled.div`
  width: 100%;
  height: 100%;
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
  color: black;
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

class DrinkForm extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      name: '',
      id: v4(),
      stock: 15,
      flavor: '',
      smell: '',
      ingredients: '',
    };

    this.getFormValues = this.props.getFormValues;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getFormValues(this.state);
    this.props.history.push('/drinks');
  }

  handleChange = (e) => {
    const {name, value} = e.target
    return this.setState({
      [name]: value
    });
  }

  render()
  {
    return (
      <FormPage>
        <div className="dancer-title">Enter Your Drink</div>
        <Dancer>💃</Dancer>
        <Form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <Input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            />
          <label>Flavor</label>
          <Input
            name="flavor"
            value={this.state.flavor}
            onChange={this.handleChange}
            />
          <label>Smell</label>
          <Input
            name="smell"
            value={this.state.smell}
            onChange={this.handleChange}
          />
          <label>Ingredients</label>
          <Input
            name="ingredients"
            value={this.state.ingredients}
            onChange={this.handleChange}
            />
          <button type="submit">
            Submit
          </button>
        </Form>
      </FormPage>
    );
  }
}

DrinkForm.propTypes = {
  getFormValues: PropTypes.func
};

export default withRouter(DrinkForm);