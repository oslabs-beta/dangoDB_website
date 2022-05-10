import React, { useState, useEffect } from 'react';


const schemaObject = {}; 

const SchemaProperty = ({ propertyName, type, defaultValue, required, unique, validationFunc }) => {
    const [propertyName, setPropertyName] = useState(''); 
    const [type, setType] = useState('number'); 
    const [defaultValue, setDefaultValue] = useState(''); 
    const [required, setRequired] = useState(false); 
    const [unique, setUnique] = useState(false); 
    const [validationFunc, setValidationFunc] = useState(false); 

    const handleChange = (event) => {
        
    }
    return ( 
        // <Typebutton name=${propertyName} hook={setPropertyName}/>
    )










}

export default SchemaProperty; 










const StatBlock = (props) => {
    const handleChange = (event) => {
      const propertyName = event.target.getAttribute('id');
      const propertyObject = {};
      propertyObject[propertyName] = event.target.value;
      props.dispatch(actions.updateStatsBlock(propertyObject));
    };
  
    function calculateModifier(score) {
      return Math.floor((score - 10) / 2);
    }
  
    return (
      <div className="stat">
        <span className="statName">{props.fullStatNames.toUpperCase()}</span>
        <span className="statMod">
          {calculateModifier(props.stat) >= 0 ? '+' : ''}
          {calculateModifier(props.stat)}
        </span>
        <input
          type="number"
          className="statNum"
          name={props.statNames}
          id={props.statNames}
          min="0"
          max="30"
          step="1"
          value={props.stat}
          onChange={handleChange}
        />
      </div>
    );
  };
  
  export default StatBlock;
  



