import * as React from 'react';
import PropForm from '../PropForm';
import SideBar from './SideBar';
import SchemaGenerator from '../SchemaGenerator';

// Main container on Schema Page holding all components
const MainContainer = ({ savedProps, setSavedProps }) => {

  // Setting state for Generate Schema and New Property buttons
  const [currentProp, setCurrentProp] = React.useState({ index: undefined });
  const [generateSchema, setGenerateSchema] = React.useState(false);

  const schemaToggler = () => {
    setGenerateSchema(!generateSchema);
  }
  const addProp = (property) => {
    if (currentProp.index === undefined) {
      setSavedProps([...savedProps, property]);
    }
    else {
      const saved = savedProps.slice();
      saved[currentProp.index] = property;
      setSavedProps(saved);
    };
  };

  // Server request and setting session cookie to save on page reload
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
  }, [savedProps]);

  return (
    <main className="mainContainer">
      {/* <SideBar
        savedProps={savedProps}
        setSavedProps={setSavedProps}
        currentProp={currentProp}
      /> */}
      <div className="center_cont">
        <section>
          {generateSchema === false && <PropForm
            addProp={addProp}
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
      </div>
    </main>
  );
};

export default MainContainer;



