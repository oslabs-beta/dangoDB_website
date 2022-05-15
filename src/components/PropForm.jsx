import * as React from 'react';
import TypeButton from './buttons/TypeButton';
import SetRequiredButton from './buttons/SetRequiredButton';
import SetUniqueButton from './buttons/SetUniqueButton';


const PropForm = ({ addProp, setCurrentProp, setGenerateSchema, passToSchema }) => {
  const [propInfo, setPropInfo] = React.useState({
    propName: '',
    type: 'number',
    defaultVal: '',
    required: false,
    unique: false,
    validationFunc: false,
  });

  const handleChangePropName = (event) => {
    setPropInfo({
      ...propInfo,
      propName: event.target.value,
    });
  };

  const handleChangeDefaultVal = (event) => {
    setPropInfo({
      ...propInfo,
      defaultVal: event.target.value,
    });
  };

  const handleChangeFunc = (event) => {
    setPropInfo({
      ...propInfo,
      validationFunc: event.target.checked,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    addProp(propInfo);
    setCurrentProp({
      index: undefined,
    });
    setPropInfo({
      propName: '',
      type: 'number',
      defaultVal: '',
      required: false,
      unique: false,
      validationFunc: false,
    });
  };

 

  return (
    <form>
      <label className="label" >
        Property Name:
        <input
          type="text"
          value={propInfo.propName}
          onChange={handleChangePropName}
        />
      </label>

      <TypeButton
        propInfo={propInfo}
        value={propInfo.type}
        setPropInfo={setPropInfo}
      />

      <label>
        Default Value:
        <input
          type="text"
          value={propInfo.defaultVal}
          onChange={handleChangeDefaultVal}
        />
      </label>

      <label>
        Required:
        <SetRequiredButton propInfo={propInfo} setPropInfo={setPropInfo} />
      </label>

      <label>
        Unique:
        <SetUniqueButton propInfo={propInfo} setPropInfo={setPropInfo} />
      </label>

      <label>
        Validation Function:
        <input
          type="checkbox"
          checked={propInfo.validationFunc}
          onChange={handleChangeFunc}
        />
      </label>

      <button onClick={handleClick}>Save Property</button>
      
    </form>
  );
};

export default PropForm;
