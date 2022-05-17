import React from 'react';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/website/navbar/NavBar';
import Home from './components/website/HomePage';
import Demo from './components/website/DemoPage';
import Docs from './components/website/DocsPage';
import Schema from './components/website/SchemaPage';
import Footer from './components/Footer'


const App = () => {
  
  const [savedProps, setSavedProps] = React.useState([]);

  React.useEffect(() => {
     
    fetch('/save-schema')
      .then((res) => res.json())
      .then((data) => {
      setSavedProps(data)
    })
    .catch((err) => {
      console.log(`${err}`);
    });
  }, []);


  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Routes>
          {/* <Route exact element={<Home />} path="/" /> */}
       
          <Route
            exact
            element={
              <Home />
            }
            path="/"
          />
          <Route element={<Demo />} path="/demo" />
          <Route element={<Docs />} path="/docs" />
          <Route element={<Schema savedProps={savedProps} setSavedProps={setSavedProps} />} path="/schema" />
          
        </Routes>
        <Footer/>
      </HashRouter>

      {/* <MainContainer /> */}
    </div>
  );
};

export default App;
