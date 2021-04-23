import React, { Component } from 'react'
import { kombuchaMachine } from '../stock/stock-factory';


class Shop extends Component {
  constructor(props)
  {
    super(props)
    this.initialState = kombuchaMachine(6);
    this.state = this.initialState;
  }

  render()
  {
    return(
      <h1>Hi</h1>
    )
  }
}


export default Shop;