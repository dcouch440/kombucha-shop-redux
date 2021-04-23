import React, { Component } from 'react'
import Kombucha from './Kombucha';
import DrinkForm from './DrinkForm';
import { kombuchaMachine } from '../stock/stock-factory';
import { Switch, Route } from 'react-router-dom';


class Shop extends Component {
  constructor(props)
  {
    super(props)
    this.initialState = kombuchaMachine;
    this.state = {
      drinks: this.initialState
    };
  }

  getFormValues = (newDrink) => {
    this.setState(prev => ({
      ...prev,
      drinks: [...prev.drinks, ...newDrink]
    }))
  }

  render()
  {
    console.log(this.state.drinks);
    return(
      <Switch>
        <Route exact path={'/drinks'}>
          <Kombucha kombuchas={this.state.drinks} />
        </Route>
        <Route exact path={'/drinks/new'}>
          <DrinkForm getFormValues={this.getFormValues} />
        </Route>
      </Switch>
    )
  }
}


export default Shop;