import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContainer from './components/containers/MainContainer';
import NavBar from './components/website/navbar/NavBar';

const App = () => {
  return (
    <div className="container">
      <h1>hello world </h1>
      <NavBar />
      <MainContainer />
    </div>
  );
};

export default App;
