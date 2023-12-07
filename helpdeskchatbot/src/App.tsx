import React from 'react';
import './App.css';
import NavBar from './components/Nav';

import SelectForm from './components/SelectForm';
// import AccountDetails from './components/AccountDetails';

function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <div className='form'> <SelectForm/></div>
      {/* <div className='detailscard'> <AccountDetails/></div> */}
     
    </div>
  );
}

export default App;
