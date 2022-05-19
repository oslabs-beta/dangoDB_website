import * as React from 'react';
import TypeButton from './buttons/TypeButton';
import SetRequiredButton from './buttons/SetRequiredButton';
import SetUniqueButton from './buttons/SetUniqueButton';

// Property form for storing property object for later use - passed onto Property Button
const PropForm = ({ addProp, setCurrentProp }) => {

  // Schema field needed in dangoDB;
  const [propInfo, setPropInfo] = React.useState({
    propName: '',
    type: 'number',
    required: false,
    unique: false,
    defaultVal: '',
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

  // saving schema session data via cookies and reseting Property Form fields
  const handleClick = (event) => {
    event.preventDefault();
    addProp(propInfo);
    setCurrentProp({
      index: undefined,
    });
    setPropInfo({
      propName: '',
      type: 'number',
      required: false,
      unique: false,
      defaultVal: '',
      validationFunc: false,
    });
  };

  return (
    
    <div className="Form">
      <h1>Property Generator</h1>
      <div className="outerbrdr">
        <form>
          <div className="form-row">

            <label htmlFor="prop-type"> Property Name:</label>
            <input
              id="prop-type"
              type="text"
              value={propInfo.propName}
              onChange={handleChangePropName}
            />
          </div>  
          <div className="form-row">
            <TypeButton
              propInfo={propInfo}
              value={propInfo.type}
              setPropInfo={setPropInfo}
            />
          </div>
          <div className="form-row">
            <label>
            Required:</label>
            <SetRequiredButton propInfo={propInfo} setPropInfo={setPropInfo} />
          </div>
          <div className="form-row">
            <label className="unique"> Unique: </label>
            <SetUniqueButton propInfo={propInfo} setPropInfo={setPropInfo} />
          </div>
          <div className="form-row">
            <label htmlFor="defaultval"> Default Value: </label>
            <input
              id="defaultval"
              type="text"
              value={propInfo.defaultVal}
              onChange={handleChangeDefaultVal}
            />
          </div>
          <div className="form-row">
            <label htmlFor="checkb">
              Validation Function:
            </label>
            <input
              id="checkb"
              type="checkbox"
              checked={propInfo.validationFunc}
              onChange={handleChangeFunc}
            />
          </div>
        </form>
      </div>
      <div className="form-row">
        <button className="btn_form" onClick={handleClick}>Save Property</button>
      </div>
    </div>
  );
};


export default PropForm;