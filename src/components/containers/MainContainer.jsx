import React, { useEffect, useState } from 'react';
import PropForm from './PropForm';
import SideBar from './SideBar';
// import CreateProperty from '../../../emilia/CreateProperty';
// import TypeButton from '../../../emilia/TypeButton';

const MainContainer = (props) => {
  //handle click function for adding a prop? should invoke the generate form
  const addProp = () => {};

  return (
    <main className="container">
      <h1>Generate Schema</h1>
      <PropForm />
      <SideBar />
      {/* <CreateProperty /> */}

  
    </main>
  );
};
export default MainContainer;
