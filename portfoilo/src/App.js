import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Nav from './components/Nav'
import './App.css';
import './CssFiles/Nav.css'
import './CssFiles/HeroBanner.css'
import './CssFiles/AboutMe.css'

function App() {
  return (
      <BrowserRouter>
      <Nav />
        <Switch>
        <HomePage />
        </Switch>
      </BrowserRouter>
  );
}
export default App;