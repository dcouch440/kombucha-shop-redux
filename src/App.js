import React, { useContext } from 'react';
import GlobalStyle from './GlobalStyle';
import Shop from './Components/Shop';
import {Context} from './Context';

function App()
{
  const {scrollBehavior} = useContext(Context);
  return (
    <>
      <GlobalStyle stopScroll={scrollBehavior}/>
      <Shop />
    </>
  );
}

export default App;
