import * as React from 'react';
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

const SetRequiredButton = (props) => {
  const [required, setRequired] = React.useState(false);
  return (
    <div>
      {[
        { name: 'true', value: true },
        { name: 'false', value: false },
      ].map((option) => (
        <label key={option.name}>
          {option.name}:
          <input
            onChange={() => {
              const currentRequired = required;
              setRequired(!currentRequired);
            }}
            type="radio"
            name="answer"
            value={option.value}
            checked={option.value === required}
          />
        </label>
      ))}
    </div>
  );
};
export default SetRequiredButton;
