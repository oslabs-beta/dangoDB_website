import React, { useState } from 'react';
// import { Controller, useForm } from 'react-hook-form';

// function RadioButtons({ onChange, value }) {
//   const [radioState, setRadioState] = useState(value);

//   return (
//     <div>
//       {[
//         { name: 'true', value: true },
//         { name: 'false', value: false },
//       ].map((option) => (
//         <label key={option.name}>
//           {option.name}:
//           <input
//             onChange={(e) => {
//               setRadioState(e.target.value);
//               onChange(e.target.value === 'true');
//             }}
//             type="radio"
//             name="answer"
//             value={option.name}
//             checked={option.name === radioState}
//           />
//         </label>
//       ))}
//     </div>
//   );
// }

// export default RadioButtons;

export function SetUniqueButton(props) {
  return ( 
    <div>
      {[
        { name: 'true', value: true },
        { name: 'false', value: false },
      ].map((option) => (
        <label key={option.name}>
          {option.name}:
          <input
            onChange = {() => {
              const currentUnique = props.unique; 
              props.setUnique(!currentUnique);
            }}
            type ="radio"
            name ="answer"
            value ={option.name}
            checked ={option.name === props.unique}
          />
        </label>
      ))}
    </div>
  )  
}

export function SetRequiredButton(props) {
  return ( 
    <div>
      {[
        { name: 'true', value: true },
        { name: 'false', value: false },
      ].map((option) => (
        <label key={option.name}>
          {option.name}:
          <input
            onChange = {() => {
              const currentRequired = props.required; 
              props.setRequired(!currentRequired);
            }}
            type ="radio"
            name ="answer"
            value ={option.name}
            checked ={option.name === props.required}
          />
        </label>
      ))}
    </div>
  )
}


