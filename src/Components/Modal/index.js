import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../reducers/kombucha/actions';
import { connect } from 'react-redux';
import {
  ModalDisplay, Message, StockChangePlus, StockChangeMinus, CloseButton
} from './styles';

const Modal = ({ dispatch, drink, onClick }) => (
  <ModalDisplay>
    <Message>
      <div>Name: {drink.name}</div>
      <div>Flavor: {drink.flavor}</div>
      <div>Smell: {drink.smell}</div>
      <div>Ingredients: {drink.ingredients}</div>
      <div>
        Current Stock: {drink.stock === 0 ? 'Out Of Stock' : drink.stock}
      </div>
      <div className="icon">💃</div>
      <div>
        <StockChangePlus onClick={() => dispatch(actions.stockAdded(drink))}>Add Stock</StockChangePlus>
        <StockChangeMinus onClick={() => dispatch(actions.stockRemoved(drink))}>Remove Stock</StockChangeMinus>
      </div>
      <CloseButton onClick={onClick}>x</CloseButton>
    </Message>
  </ModalDisplay>
);

Modal.propTypes = {
  drink: PropTypes.object,
  onClick: PropTypes.func,
  dispatch: PropTypes.func
};

export default connect(state => state)(Modal);