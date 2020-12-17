import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Nav from './components/Nav'
import './App.css';

function App() {
  return (
      <BrowserRouter>
      <Nav />
      <HomePage />
      <navBar />
        <Switch>
          
        </Switch>
      </BrowserRouter>
  );
}
export default App;