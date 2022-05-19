import React from 'react';
import MainContainer from '../containers/MainContainer';

// Schema Page housing Main Container holding all components
function Schema({ savedProps, setSavedProps }) {
  return (
      <main>
        <MainContainer savedProps={savedProps} setSavedProps={setSavedProps} />
      </main>
  );
}

export default Schema;
