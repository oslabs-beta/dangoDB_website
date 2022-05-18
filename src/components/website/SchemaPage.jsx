import React from 'react';
import MainContainer from '../containers/MainContainer';

// function Schema(props) {
function Schema({ savedProps, setSavedProps }) {
  return (
    <div className="schema_container">
      <main>
        {/* <h1>this is the gui</h1> */}
        <MainContainer savedProps={savedProps} setSavedProps={setSavedProps} />
      </main>
    </div>
  );
}

export default Schema;
