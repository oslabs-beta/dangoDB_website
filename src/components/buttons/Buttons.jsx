import React from 'react';
import SetRequiredButton from './SetRequiredButton';
import SetUniqueButton from './SetUniqueButton';


// Button components for Property Form
const Buttons = () => {
  return (
    <div>
      <TypeButton />
      <SetRequiredButton />
      <SetUniqueButton />
    </div>
  );
};

export default Buttons;
