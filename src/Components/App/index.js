import React from 'react';
import { connect } from 'react-redux';
import GlobalStyle from '../../GlobalStyle';
import PropTypes from 'prop-types';
import Shop from '../Shop';
import { LinkHub } from './styles';
import { Link } from 'react-router-dom';


const App = ({ show }) => (
  <>
    {!show&&
      <LinkHub>
        <Link to={'/drinks/new'}>New Drinks</Link>
        <Link to={'/drinks'}> Drinks</Link>
      </LinkHub>
    }
    <GlobalStyle stopScroll={show}/>
    <Shop stopScroll={show}/>
  </>
);


App.propTypes = {
  show: PropTypes.bool,
};

export default connect(state => state.modalReducer)(App);
