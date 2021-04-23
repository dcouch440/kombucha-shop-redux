import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as utils from '../utils/utils';

const Drinks = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 400px;
  grid-gap: 5px;
  background-color: darkcyan;
`

const Drink = styled.div`
  background-color: red;
`

const Kombucha = ({kombuchas}) => {

  const kombuchaDisplay = kombuchas.map( drink => {
      const categories = Object.entries(drink)
      const mapCategories = categories.map(
        ([category, value]) => {
          return (
            <div className='attr'>
              {utils.capitalize(category)}: {utils.capitalize(value)}
            </div>
          )
        }
      )
      return (
        <Drink>
          {mapCategories}
        </Drink>
      )
  })

  return (
    <>
      <Drinks>
        {kombuchaDisplay}
      </Drinks>
    </>
  )
}

Kombucha.prototype = {
  kombuchas: PropTypes.array
}

export default Kombucha;