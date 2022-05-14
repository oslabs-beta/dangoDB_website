import * as React from 'react';

const SetRequiredButton = ({ propInfo, setPropInfo }) => {

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
