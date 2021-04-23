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

  handleStockRemove = (drink) => {
    console.log(drink)
    const findDrink = (find) => find.id === drink
    const index = this.state.drinks.findIndex(findDrink)
    this.setState(prev => ({
      ...prev,
      drinks: [
        ...prev.drinks,
        prev.drinks[index] = prev.drinks[index].stock -= 1
      ]
    }))
  }

  render()
  {
    return (
      <Switch>
        <Route exact path={'/drinks'}>
          <Kombucha kombuchas={this.state.drinks} stockRemoval={this.handleStockRemove}/>
        </Route>
        <Route exact path={'/drinks/new'}>
          <DrinkForm getFormValues={this.getFormValues} />
        </Route>
      </Switch>
    )
  }
}


export default Shop;