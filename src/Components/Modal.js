import React from 'react';
import styled from 'styled-components';

const ModalDisplay = styled.div`
  z-index: 999;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #00000073;
  color: whitesmoke;
`

const Message = styled.div`
  position: relative;
  width: 60%;
  height: 60%;
  font-size: 60px;
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
  }
`

const CloseButton = styled.button`
  all: unset;
  color: white;
  position: absolute;
  right: 5%;
  top: 5%;
`

const Modal = ({drink, onClick}) =>(
  <ModalDisplay>
    <Message>
      <div>Name: {drink.name}</div>
      <div>Flavor: {drink.flavor}</div>
      <div>Smell: {drink.smell}</div>
      <div>Ingredients: {drink.ingredients}</div>
      <div className="icon">💃</div>
      <CloseButton onClick={onClick}>X</CloseButton>
    </Message>
  </ModalDisplay>
)

export default Modal