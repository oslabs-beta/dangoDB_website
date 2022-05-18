import * as React from 'react';
import PropForm from '../PropForm';
import SideBar from './SideBar';
import SchemaGenerator from '../SchemaGenerator';

const MainContainer = ({ savedProps, setSavedProps }) => {
  const [currentProp, setCurrentProp] = React.useState({ index: undefined });
  //generate schema button state
  const [generateSchema, setGenerateSchema] = React.useState(false);
  const [generateProp, setGenerateProp] = React.useState(false);
  const schemaToggler = () => {
    setGenerateSchema(!generateSchema);
  }
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
      <SideBar
        savedProps={savedProps}
        setSavedProps={setSavedProps}
        currentProp={currentProp}
        // setCurrentProp={setCurrentProp}
      />
      <section>
        {generateSchema === false && <PropForm
          addProp={addProp}
          // currentProp={currentProp}
          setCurrentProp={setCurrentProp}
        />}
        {generateSchema === true && <SchemaGenerator
          generateSchema={generateSchema}
          setGenerateSchema={setGenerateSchema}
          savedProps={savedProps}
        />}
      </section>
      <section>
        {generateSchema === true && <button onClick={schemaToggler} className="schemabtn">
          New Property
        </button>}
        {generateSchema === false && <button onClick={schemaToggler}  className="schemabtn">
          Generate Schema
        </button>}
      </section>
   

      {/* <button onClick={() => console.log(savedProps)}>hi</button> */}
    </main>
  );
};
export default MainContainer;



