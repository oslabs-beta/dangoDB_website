import * as React from 'react';

// Button component for Required boolean in Property creator form
const SetRequiredButton = ({ propInfo, setPropInfo }) => {

  return (
    <div>
      {[
        { name: 'true', value: true },
        { name: 'false', value: false },
      ].map((option) => (
        <label className="reqBtn" key={option.name}>
          {option.name}:
          <input
            onChange={() => {
              const currentRequired = propInfo.required;
              setPropInfo({
                ...propInfo, 
                required: !currentRequired
              });
            }}
            type="radio"
            name="reqAnswer"
            value={option.value}
            checked={option.value === propInfo.required}
          />
        </label>
      ))}
    </div>
  );
};

export default SetRequiredButton;
