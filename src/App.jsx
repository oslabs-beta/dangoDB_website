import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/website/navbar/NavBar';
import Home from './components/website/HomePage';
import Demo from './components/website/DemoPage';
import Docs from './components/website/DocsPage';
import Schema from './components/website/SchemaPage';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact element={<Home/>} path="/" />
          <Route element={<Demo/>} path="/demo" />
          <Route element={<Docs/>} path="/docs" />
          <Route element={<Schema/>} path="/schema" />
        </Routes>
      </BrowserRouter>

      {/* <MainContainer /> */}
    </div>
  );
};

export default App;