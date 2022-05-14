import React, { useEffect, useState } from 'react';
import PropDrop from '../PropDrop';


const SideBar = (props) => {
  return (
    <div className="side_container">
      <h2>This is housing the sidebar</h2>
      <PropDrop />
    </div>
  );
};

export default SideBar;