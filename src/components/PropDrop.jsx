import React, { useState } from 'react';

const input = {
  prop: 'something',
  prop2: 'something else',
  prop3: 'something more'
};
// Propery dropdown 'button'

const PropDrop = (props) => {
  const dropdownRef = useRef(null);
  // state setter
  const [isActive, setIsActive] = useState(false);
  // click to initiate dropdown
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="dropprop-container">
      <button onClick={onClick} className="dropprop-trigger">
        <span>Property</span>
      </button>
      <div ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        
      </div>
    </div>
  )
};

export default PropDrop;