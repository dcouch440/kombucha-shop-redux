import GlobalStyle from './GlobalStyle';
import Shop from './Components/Shop';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Shop />
      </Router>
    </>
  );
}

export default App;
