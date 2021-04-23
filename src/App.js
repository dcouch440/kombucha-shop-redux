import React, { useContext } from 'react';
import GlobalStyle from './GlobalStyle';
import Shop from './Components/Shop';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Context} from './Context';

const LinkHub = styled.div`
  z-index: 99999;
  position: fixed;
  box-shadow: 0px 0px 2px black;
  right: 2%;
  top: 2%;
  display: flex;
  font-family: monospace;
  & > a {
    color: white;
    text-decoration: none;
    background-color: white;
    color: black;
    padding: 0 10px;
    margin: 0 3px;
  }
`;

function App()
{
  const {scrollBehavior} = useContext(Context);

  return (
    <>
      { !scrollBehavior &&
        <LinkHub>
          <Link to={'/drinks/new'}>New Drinks</Link>
          <Link to={'/drinks'}> Drinks</Link>
        </LinkHub>
      }
      <GlobalStyle stopScroll={scrollBehavior}/>
      <Shop stopScroll={scrollBehavior}/>
    </>
  );
}

export default App;
