//drop down menuimport React from "react";
// import { Controller, useForm, useState } from "react-hook-form";
import * as React from 'react';
// import React, { useState } from 'react';

const TypeButton = ({ type, setType }) => {
  const typeOptions = [
    { name: 'number', value: 'number' },
    { name: 'decimal128', value: 'decimal128' },
    { name: 'string', value: 'string' },
    { name: 'boolean', value: 'boolean' },
    { name: 'objectid', value: 'objectid' },
    { name: 'UUID', value: 'UUID' },
    { name: 'date', value: 'date' },
  ];

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div>
      <Dropdown
        label="type"
        id="type"
        typeOptions={typeOptions}
        value={type}
        handleTypeChange={handleTypeChange}
      />
    </div>
  );
};

const Dropdown = ({ value, handleTypeChange, typeOptions }) => {
  return (
    <label>
      Type:
      {/* {props.label} */}
      <select value={value} onChange={handleTypeChange}>
        {typeOptions.map((option) => (
          <option value={option.value}>{option.name}</option>
        ))}
      </select>
    </label>
  );
};

export default TypeButton;
// function TypeButton({ onChange, value }) {
//     const [radioState, setRadioState] = useState(value);

//     return (
//       <div>
//         {[

//           { name: 'number', value: 'number' },
//           { name: 'decimal128', value: 'decimal128'},
//           { name: 'string', value: 'string' },
//           { name: 'boolean', value: 'boolean' },
//           { name: 'object', value: 'object' },
//           { name: 'UUID', value: 'UUID' } ,
//           { name: 'date', value: 'date' },

//         ].map((option) => (
//           <label key={option.name}>
//             {option.name}:
//             <input
//               onChange={(e) => {
//                 setRadioState(e.target.value);
//                 onChange(e.target.value === "yes");
//               }}
//               type="radio"
//               name="answer"
//               value={option.name}
//               checked={option.name === radioState}
//             />
//           </label>
//         ))}
//       </div>
//     );
//   };
