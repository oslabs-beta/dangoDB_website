import React, { useSelector, useEffect } from 'react';
import TypeButton from './buttons/TypeButton';
import SetRequiredButton from './buttons/SetRequiredButton';
import SetUniqueButton from './buttons/SetUniqueButton';
// import Buttons from './buttons/Buttons';

const PropForm = (props) => {
  return (
    <form >
      <label>
        {' '}
        Property Name:
        <input 
          type="text" />
      </label>
      <TypeButton />
      <label>
        {' '}
        Default Value:
        <input type="text" />
      </label>
      <label>
        {' '}
        Required:
        <SetRequiredButton />
      </label>
      <label>
        {' '}
        Unique:
        <SetUniqueButton />
      </label>
      <label>
        {' '}
        Validation Function:
        <input type="checkbox"></input>
      </label>
      <button>Save Property</button>
    </form>
  );
};

export default PropForm;
