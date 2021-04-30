import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import PropTypes from 'prop-types';
import { Context } from '../Context';

const KombuchaPage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
  background-color: black;
  .position {
    position: absolute;
    margin-top: 0;
    margin-bottom: auto;
    width: 100%;
    height: 100%;
    padding-top: 100px;
    display: flex;
    justify-content: center;
  }

`;

const Drinks = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 400px;
  grid-gap: 5px;
  background-color: black;
  @media (max-width: 1000px)
  {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px)
  {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Drink = styled.div`
  all: unset;
  color: black;
  font-family: monospace;
  font-size: calc( 15px + .5vw);
  display: flex;
  text-align: bottom;
  padding: 20px;
  background-color: white;
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
    cursor: pointer;
    background-color: #393939bf;
    color: white;
    box-shadow: inset 0 0 9px black;
    transition: .2s;
  }
`;
//  USER REDUX HERE TO CALL FUNCTIONS TO INCREASE THE VALUE
const Kombucha = ({kombuchas, stockRemoval}) => {

  const [modal, setModal] = useState(false);
  const [show, setShow] = useState('');
  const { setScrollBehavior } = useContext(Context);

  const handleClick = (e,id) => {
    id&& setShow(id);
    setModal(prev => !prev);
    setScrollBehavior(prev => !prev);
  }

  const displayDrink = () => kombuchas.filter(drink => drink.id === show)[0];

  const kombuchaDisplay = kombuchas.map(drink => (
    <Drink key={drink.id} onClick={(e) => handleClick(e,drink.id)} >
      <div className="name">{drink.name}</div>
      <div className="stock">In stock: {drink.stock}</div>
      <div className="drink">🥤</div>
    </Drink>
  ))

  return (
    <>
      <KombuchaPage>
        <div className='position'>
          <Drinks>
            {kombuchaDisplay}
          </Drinks>
          {modal && <Modal drink={ displayDrink() } onClick={handleClick} stockRemoval={stockRemoval} />}
        </div>
      </KombuchaPage>
    </>
  );
}

Kombucha.propTypes = {
  kombuchas: PropTypes.array,
  stockRemoval: PropTypes.func,
};

export default Kombucha;