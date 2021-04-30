import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as actions from '../reducers/kombucha/actions';
import { connect } from 'react-redux';

const ModalDisplay = styled.div`
  z-index: 999;
  position: fixed;
  top: 0px;
  bottom: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #00000073;
  color: whitesmoke;
`;

const Message = styled.div`
  position: relative;
  width: 60%;
  height: 60%;
  font-size: 40px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 20px solid white;
  border-radius: 20px;
  padding: 15px;
  .icon {
    position: absolute;
    align-self: flex-end;
    padding: 50px;
    font-size: 250px;
    text-decoration: underline;
  }
  @media (max-width: 1200px)
  {
    display: flex;
    font-size: 30px;
    .icon {
      bottom: 5px;
      font-size: 85px;
    }
  }
`;

const CloseButton = styled.button`
  font-family: arial !important;
  font-weight: 100;
  position: absolute;
  all: unset;
  cursor: pointer;
  color: white;
  position: absolute;
  right: 2%;
  color: white;
  top: 5%;
  padding: 5px;
  border: 2px solid white;
  font-size: 12px;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const StockChangePlus = styled.button`
  font-family: arial !important;
  font-weight: 100;
  all: unset;
  cursor: pointer;
  color: white;
  right: 13%;
  top: 5%;
  border: 2px solid white;
  color: white;
  padding: 5px;
  font-size: 10px;
  &:hover {
    background-color: white;
    color: black;
  }
`;
const StockChangeMinus = styled.button`
  font-family: arial !important;
  font-weight: 100;
  all: unset;
  cursor: pointer;
  color: white;
  top: 5%;
  border: 2px solid white;
  color: white;
  padding: 5px;
  font-size: 10px;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const Modal = ({drink, onClick, ...props}) => {
  const {
    dispatch,
  } = props

  const currentStock = drink.stock === 0 ? 'Out Of Stock' : drink.stock;

  return (
    <ModalDisplay>
      <Message>
        <div>Name: {drink.name}</div>
        <div>Flavor: {drink.flavor}</div>
        <div>Smell: {drink.smell}</div>
        <div>Ingredients: {drink.ingredients}</div>
        <div>Current Stock: {currentStock}</div>
        <div className="icon">💃</div>
        <div>
          <StockChangePlus onClick={() => dispatch(actions.stockAdded(drink))}>Add Stock</StockChangePlus>
          <StockChangeMinus onClick={() => dispatch(actions.stockRemoved(drink))}>Remove Stock</StockChangeMinus>
        </div>
        <CloseButton onClick={onClick}>x</CloseButton>
      </Message>
    </ModalDisplay>
  );
}

Modal.propTypes = {
  drink: PropTypes.object,
  onClick: PropTypes.func,
};

export default connect(state => state)(Modal);