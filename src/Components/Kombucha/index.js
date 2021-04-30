import React from 'react';
import Modal from '../Modal';
import PropTypes from 'prop-types';
import * as modalActions from '../../reducers/modal/actions';
import { connect } from 'react-redux';
import { KombuchaPage, Drink, Drinks} from './styles'

const Kombucha = ({kombuchaReducer, modalReducer :modal, dispatch}) => {

  const kombuchas = Object.values(kombuchaReducer);

  const handleClick = (e, drink) => {
    drink&& dispatch(modalActions.setCurrentDrink(drink));
    dispatch(modalActions.modalToggled())
  };

  const displayDrink = () => kombuchas.filter(drink => drink.id === modal.currentDrink.id)[0];

  const kombuchaDisplay = kombuchas.map(drink => (
    <Drink key={drink.id} onClick={(e) => handleClick(e, drink)} >
      <div className="name">{drink.name}</div>
      <div className="stock">In stock: {drink.stock}</div>
      <div className="drink">🥤</div>
    </Drink>
  ));

  return (
    <>
      <KombuchaPage>
        <div className='position'>
          <Drinks>
            {kombuchaDisplay}
          </Drinks>
          {modal.show && <Modal drink={displayDrink()} onClick={handleClick} /> }
        </div>
      </KombuchaPage>
    </>
  );
};

Kombucha.propTypes = {
  kombuchaReducer: PropTypes.object,
  modalReducer: PropTypes.object,
  dispatch: PropTypes.func,
};

export default connect(state => state)(Kombucha);