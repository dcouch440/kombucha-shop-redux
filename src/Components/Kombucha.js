import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const KombuchaPage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  .position {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Drinks = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 400px;
  grid-gap: 5px;
  background-color: white;
  @media (max-width: 1000px)
  {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Drink = styled.button`
  all: unset;
  color: white;
  font-family: monospace;
  font-size: calc( 15px + .5vw);
  display: flex;
  text-align: bottom;
  padding: 20px;
  background-color: black;
  position: relative;

  .drink {
    position: absolute;
    display: flex;
    bottom: 25%;
    right: 20px;
    font-size: 160px;
    @media (max-width: 1000px)
    {
      font-size: 100px;
      right: unset;
      left: unset;
    }
  }
  .stock {
    position: absolute;
    bottom: 5%;
  }
  &:hover {
      background-color: dimgrey;
  }
`

const StockButton = styled.button`
  z-index: 9998;
  position: absolute;
  right: 2%;
  bottom: 2%;
`

const Kombucha = ({kombuchas, stockRemoval}) => {

  const [modal, setModal] = useState(false)
  const [show, setShow] = useState('');

  const handleClick = (e, id) => {
    if (e.target.name !== 'remove-stock')
    {
      id&& setShow(id);
      setModal(prev => !prev);
    }
  }

  const handleStockChange = (id) => {
    stockRemoval(id)
  }

  const displayDrink = () => kombuchas.filter(drink => drink.id === show)[0]

  const kombuchaDisplay = kombuchas.map(drink => (
    <Drink onClick={(e) => handleClick(e,drink.id)} >
      <div className="name">{drink.name}</div>
      <div className="stock">In stock: {drink.stock}</div>

      <div className="drink">🥤</div>
      <StockButton name="remove-stock" onClick={() => handleStockChange(drink.id)}>
        One Sold
      </StockButton>
    </Drink>
  ))

  return (
    <>
      <KombuchaPage>
        <div className='position'>
          <Drinks>
            {kombuchaDisplay}
          </Drinks>
          {modal && <Modal drink={ displayDrink() } onClick={handleClick} />}
        </div>
      </KombuchaPage>
    </>
  )
}

Kombucha.prototype = {
  kombuchas: PropTypes.array
}

export default Kombucha;