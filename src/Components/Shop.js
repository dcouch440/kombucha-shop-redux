import React from 'react';
import Kombucha from './Kombucha';
import DrinkForm from './DrinkForm';
import { Switch, Route, Redirect } from 'react-router-dom';

// THIS CLASS GETS STATE FROM BELOW

const Shop  = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/drinks" />
        </Route>
        <Route exact path={'/drinks'}>
          <Kombucha />
        </Route>
        <Route exact path={'/drinks/new'}>
          <DrinkForm getFormValues={() => ('sdf')} />
        </Route>
      </Switch>
    </>
  );
}


export default Shop;