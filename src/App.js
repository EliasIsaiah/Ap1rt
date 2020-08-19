import React from 'react';
import Calculator from './components/Calculator';
import Container from '@material-ui/core/Container';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        {/*<Container alignContent="center" justifyContent="center">*/}
        <Calculator />
        {/*</Container>*/}
      </div>
    </div>
  );
}

export default App;
