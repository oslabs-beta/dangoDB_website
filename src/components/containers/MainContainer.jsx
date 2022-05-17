import * as React from 'react';
import PropForm from '../PropForm';
import SideBar from './SideBar';
import SchemaGenerator from '../SchemaGenerator';

const MainContainer = ({ savedProps, setSavedProps }) => {
  const [currentProp, setCurrentProp] = React.useState({ index: undefined });
  //generate schema button state
  const [generateSchema, setGenerateSchema] = React.useState(false);

  const addProp = (property) => {
    if (currentProp.index === undefined) {
      setSavedProps([...savedProps, property]);
    }
    else {
      //if user edits property, replace relevant index with updated property
      const saved = savedProps.slice();
      saved[currentProp.index] = property;
      setSavedProps(saved);
    }
  };

  //n save send a server request and set a session cookie based on the current saved properties to persist on page reload.
  React.useEffect(() => {
    const response = fetch('/save-schema', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ schema: savedProps })
    })
    .catch((err) => {
      console.log(`${err}`);
    });
  }, [savedProps])

  return (
    <main className="mainContainer">
      {/* <h1>Add Property</h1> */}
      <PropForm
        addProp={addProp}
        // currentProp={currentProp}
        setCurrentProp={setCurrentProp}
      />
        <SchemaGenerator
          generateSchema={generateSchema}
          setGenerateSchema={setGenerateSchema}
          savedProps={savedProps}
        />
      <SideBar
        savedProps={savedProps}
        setSavedProps={setSavedProps}
        currentProp={currentProp}
        // setCurrentProp={setCurrentProp}
      />

      {/* <button onClick={() => console.log(savedProps)}>hi</button> */}
    </main>
  );
};
export default MainContainer;



