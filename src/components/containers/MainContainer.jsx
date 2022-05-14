import * as React from 'react';
import PropForm from '../PropForm';
import SideBar from './SideBar';

//sidebar needs setcurrentprop

const MainContainer = (props) => {
  const [savedProps, setSavedProps] = React.useState([]);
  const [currentProp, setCurrentProp] = React.useState({ index: undefined });

  //handle click function for adding a prop? should invoke the generate form

  const addProp = (currentProp) => {
    //update val of associated array with value of current props if index is defined
    setSavedProps([...savedProps, currentProp]);
  };

  return (
    <main className="container">
      <h1>Add Property</h1>
      <PropForm
        addProp={addProp}

        currentProp={currentProp}

        setCurrentProp={setCurrentProp}
      />
      {/* <SideBar /> */}
      <button onClick= {() => console.log(savedProps)}>hi</button>
    </main>
  );
};
export default MainContainer;
