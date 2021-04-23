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
`

const Drink = styled.button`
  all: unset;
  color: white;
  font-family: monospace;
  font-size: 30px;
  display: flex;
  text-align: bottom;
  padding: 20px;
  background-color: black;
  position: relative;
  display: ${({display}) => display};
  & .drink {
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 200px;
  }
  &:hover {
      background-color: dimgrey;
  }
`

const Kombucha = ({kombuchas}) => {

  const [modal, setModal] = useState(false)
  const [show, setShow] = useState('');

  const handleClick = (id) => {
    id&& setShow(id);
    setModal(prev => !prev);
  }

  const displayDrink = () => kombuchas.filter(drink => drink.id === show)[0]

  const kombuchaDisplay = kombuchas.map(drink => (
    <Drink onClick={() => handleClick(drink.id)} >
      {drink.name} <div className={'drink'}>🥤</div>
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