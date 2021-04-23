import React, { Component } from 'react';
import Kombucha from './Kombucha';
import DrinkForm from './DrinkForm';
import styled from 'styled-components';
import { kombuchaMachine } from '../stock/stock-factory';
import { Switch, Route, Link } from 'react-router-dom';

const LinkHub = styled.div`
  z-index: 99999;
  position: fixed;
  right: 2%;
  top: 2%;
  display: flex;
  border-radius: 10px;
  background-color: black;
  padding: 6px;
  font-family: monospace;
  & > a {
    color: white;
    border-radius: 10px;
    text-decoration: none;
    background-color: white;
    color: black;
    padding: 0 10px;
    margin: 0 15px;
  }
`;

class Shop extends Component
{
  constructor(props)
  {
    super(props);
    this.initialState = kombuchaMachine;
    this.state = {
      drinks: this.initialState
    };
  }

  getFormValues = (newDrink) => {
    this.setState(prev => ({
      ...prev,
      drinks: [...prev.drinks, newDrink]
    }));
  }

  handleStockChange = (id) => {
    const newState = [...this.state.drinks];
    const findStock = (drink) => drink.id === id;
    const indexOfDrink = this.state.drinks.findIndex(findStock);
    const stateWeWant = {...newState[indexOfDrink]};
    if (stateWeWant.stock === 0) return;
    const newStock = {
      ...stateWeWant,
      stock: stateWeWant.stock -= 1
    };
    const newStockArray = [
      ...newState.slice(0, indexOfDrink),
      newStock,
      ...newState.slice(indexOfDrink + 1)
    ];
    this.setState(prev => ({
      ...prev,
      drinks: newStockArray
    }));
  }

  render()
  {
    return (
      <>
        <LinkHub>
          <Link to={'/drinks/new'}>New Drinks</Link>
          <Link to={'/drinks'}> Drinks</Link>
        </LinkHub>
        <Switch>
          <Route exact path={'/drinks'}>
            <Kombucha
              kombuchas={this.state.drinks}
              stockRemoval={this.handleStockChange}
            />
          </Route>
          <Route exact path={'/drinks/new'}>
            <DrinkForm getFormValues={this.getFormValues} />
          </Route>
        </Switch>
      </>
    );
  }
}


export default Shop;