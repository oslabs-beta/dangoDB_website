import React from 'react';
import MainContainer from '../containers/MainContainer';

// function Schema(props) {
function Schema({ savedProps, setSavedProps }) {
  return (
    <main>
      <h1>this is the homepage???</h1>
      <MainContainer savedProps={savedProps} setSavedProps={setSavedProps} />
    </main>
  );
}

export default Schema;
