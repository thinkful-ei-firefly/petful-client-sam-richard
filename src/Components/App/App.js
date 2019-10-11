import React from 'react';
import { Route } from 'react-router-dom';

import LandingPage from '../LandingPage/LandingPage'
import PetPage from '../PetPage/PetPage'

import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path ='/' component={LandingPage} />
      <Route exact path ='/pets' component={PetPage} />
    </div>
  );
}

export default App;
