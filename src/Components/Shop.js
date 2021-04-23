import React, { Component } from 'react'
import Kombucha from './Kombucha';
import { kombuchaMachine } from '../stock/stock-factory';


class Shop extends Component {
  constructor(props)
  {
    super(props)
    this.initialState = kombuchaMachine(6);
    this.state = {
      drinks: this.initialState
    };
  }

  render()
  {
    return(
      <Kombucha kombuchas={this.state.drinks} />
    )
  }
}


export default Shop;