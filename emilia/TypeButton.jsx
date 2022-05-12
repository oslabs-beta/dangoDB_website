//drop down menuimport React from "react";
// import { Controller, useForm, useState } from "react-hook-form";
import * as React from 'react';

const Type = () => {
  
  const typeOptions = [
    { name: 'number', value: 'number' },
    { name: 'decimal128', value: 'decimal128' },
    { name: 'string', value: 'string' },
    { name: 'boolean', value: 'boolean' },
    { name: 'object', value: 'object' },
    { name: 'UUID', value: 'UUID' },
    { name: 'date', value: 'date' },
  ];

  const [type, setType] = useState('number');

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div>
      <Dropdown
        label="type"
        id="type"
        options={typeOptions}
        value={type}
        onChange={handleTypeChange}
      />
    </div>
  );
};

const Dropdown = ({ label, type, typeOptions, handleTypeChange }) => {
  return (
    <label>
      {label}
      <select value={type} onChange={handleTypeChange}>
        {typeOptions.map((option) => (
          <option value={option.type}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default Type;
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
