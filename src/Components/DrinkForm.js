import React, {Component} from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

const Input = styled.input`

`

class DrinkForm extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      name: '',
      id: v4(),
      flavor: '',
      smell: '',
      ingredients: '',
    };

    this.getFormValues = this.props.getFormValues;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getFormValues(this.state);
  }

  handleChange = (e) => {
    const {name, value} = e.target
    return this.setState({
      [name]: value
    })
  }

  render()
  {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Input
          name="flavor"
          value={this.state.flavor}
          onChange={this.handleChange}
        />
        <Input
          name="smell"
          value={this.state.smell}
          onChange={this.handleChange}
        />
        <Input
          name="ingredients"
          value={this.state.ingredients}
          onChange={this.handleChange}
        />
        <button type="submit">
          Submit
        </button>
      </form>
    )
  }
}

export default DrinkForm