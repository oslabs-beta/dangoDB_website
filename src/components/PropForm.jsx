import * as React from 'react';
import TypeButton from './buttons/TypeButton';
import SetRequiredButton from './buttons/SetRequiredButton';
import SetUniqueButton from './buttons/SetUniqueButton';
// import Buttons from './buttons/Buttons';

const PropForm = (props) => {

  const [unique, setUnique] = React.useState(false);
  const [required, setRequired] = React.useState(false);
  const [type, setType] = React.useState('number');

  return (
    <form>

      <label>
        Property Name:
        <input type="text" />
      </label>

      <TypeButton 
        type={type}
        setType={setType}
        />

      <label>
        Default Value:
        <input type="text" />
      </label>

      <label>
        Required:
        <SetRequiredButton 
          required={required}
          setRequired={setRequired}
          />
      </label>

      <label>Unique:
        <SetUniqueButton
          unique= {unique}
          setUnique={setUnique}
         />
      </label>

      <label>
        Validation Function:
        <input type="checkbox"></input>
      </label>

      <button>Save Property</button>

    </form>

  );
};

export default PropForm;
