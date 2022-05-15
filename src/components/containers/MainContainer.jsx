import * as React from 'react';
import PropForm from '../PropForm';
import SideBar from './SideBar';

const MainContainer = (props) => {
  const [savedProps, setSavedProps] = React.useState([]);
  const [currentProp, setCurrentProp] = React.useState({ index: undefined });

  const addProp = (property) => {
    if (currentProp.index === undefined)
      setSavedProps([...savedProps, property]);
    else {
      //if user edits property, replace relevant index with updated property
      const saved = savedProps.slice();
      saved[currentProp.index] = property;
    }
  };

  return (
    <main className="container">
      <h1>Add Property</h1>
      <PropForm
        addProp={addProp}
        // currentProp={currentProp}
        setCurrentProp={setCurrentProp}
      />
      <SideBar 
        savedProps={savedProps}
        setSavedProps={setSavedProps}
        currentProp={currentProp}
        setCurrentProp={setCurrentProp}
        />
      {/* <button onClick= {() => console.log(savedProps)}>hi</button> */}
    </main>
  );
};
export default MainContainer;
