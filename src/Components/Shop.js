import React, { Component } from 'react'
import Kombucha from './Kombucha';
import DrinkForm from './DrinkForm';
import { kombuchaMachine } from '../stock/stock-factory';
import { Switch, Route } from 'react-router-dom';


class Shop extends Component
{
  constructor(props)
  {
    super(props)
    this.initialState = kombuchaMachine;
    this.state = {
      drinks: this.initialState
    };
  }

  getFormValues = (newDrink) => {
    console.log(newDrink)
    this.setState(prev => ({
      ...prev,
      drinks: [...prev.drinks, newDrink]
    }))
  }

  handleStockChange = (id) => {
    const newState = [...this.state.drinks];
    const findStock = (drink) => drink.id === id
    const indexOfDrink = this.state.drinks.findIndex(findStock);
    const stateWeWant = {...newState[indexOfDrink]}
    const newStock = {
      ...stateWeWant,
      stock: stateWeWant.stock -= 1
    }
    const newStockArray = [
      ...newState.slice(0, indexOfDrink),
      newStock,
      ...newState.slice(indexOfDrink + 1)
    ]
    this.setState(prev => ({
      ...prev,
      drinks: newStockArray
    }));
  }

  render()
  {
    return (
      <Switch>
        <Route exact path={'/drinks'}>
          <Kombucha kombuchas={this.state.drinks} stockRemoval={this.handleStockChange}/>
        </Route>
        <Route exact path={'/drinks/new'}>
          <DrinkForm getFormValues={this.getFormValues} />
        </Route>
      </Switch>
    )
  }
}


export default Shop;