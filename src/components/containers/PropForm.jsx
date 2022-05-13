import React, { useSelector, useEffect } from 'react';
// import Buttons from '../../../emilia/Buttons';
// import CreateProperty from '../../../emilia/CreateProperty';
import TypeButton from '../../../emilia/TypeButton';
// import Buttons from '../../../emilia/Buttons';
import SetRequiredButton from '../../../emilia/SetRequiredButton';
import SetUniqueButton from '../../../emilia/SetUniqueButton';

const PropForm = (props) => {
  return (
    <form>
      <label>
        {' '}
        Property Name:
        <input type="text" />
      </label>
      <TypeButton />
      <label>
        {' '}
        Default Value:
        <input type="text" />
      </label>
      {/* <button onClick={handleClick}>CHOOSE TYPE</button> */}
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
    </form>
  );
};

export default PropForm;
