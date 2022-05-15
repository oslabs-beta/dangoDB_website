import * as React from 'react';

const options = [
  { prop: 'something' },
  { prop2: 'something else' },
  { prop3: 'something more' },
];
// Propery dropdown 'button'
//ToDo: Add edit and delete buttons

const PropDrop = ({ savedProps }) => {
//   const [value, setValue] = useState('something');
//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

  return (
    <div>å
      <Dropdown
        //set label to current property name
        //label= savedProps[index].propName
        // label="label"
        // options={options}
        // value={value}
        // onChange={handleChange}
      />
    </div>
  );
};

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <div className="dropdown">
      {/* {control is what you will click to open and close drop down} */}
      <div className="control">
        <div className="arrow"/>
      </div>
      <div className="options">
        <div className="options">
          {
            properties.map(property => <div className="option"></div>)
          }
        </div>
      </div>
    </div>

  );
};

//     <label>
//       {label}
//       <select value={value} onChange={onChange}>
//         {options.map((option) => (
//           <option value={option.value}>{option.label}</option>
//         ))}
//       </select>
//     </label>

export default PropDrop;
